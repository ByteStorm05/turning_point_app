'use client'

import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Navbar from "@/components/NavBar";
import Link from 'next/link';

// Initialize Firebase (use environment variables in production)
const firebaseConfig = {
  apiKey: "AIzaSyAU7gA4Vbv-9cIO7Cz4H1BWO3Wzvm4DzSE",
  authDomain: "turningpoint-58fcb.firebaseapp.com",
  projectId: "turningpoint-58fcb",
  storageBucket: "turningpoint-58fcb.appspot.com",
  messagingSenderId: "734576689988",
  appId: "1:734576689988:web:0d36aaa03959a8f8634d11",
  measurementId: "G-X2NXB1WJ69"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Blogs = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, 'blogs');
        const querySnapshot = await getDocs(blogsRef);
        const fetchedBlogs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <section className="bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-700 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Blogs 📝
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-xl text-gray-500 dark:text-gray-400">
              Turning Point provides structured blogs for Class 10th-12th and graduates, with expert guidance, interactive sessions, and mock tests to excel in IIT-JEE and PMT exams.
            </p>
          </div>

          {loading ? (
            <p className="text-center mt-8">Loading blogs...</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <div className="relative">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog.imageUrl} alt={blog.title} />
                  </div>
                  <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                    {blog.title}
                  </h1>
                  <hr className="w-32 my-6 text-blue-500" />
                  <Link href={`/blogs/${blog.id}`} className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                   Read
                  </Link>

                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blogs