'use client'

import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Navbar from "@/components/NavBar";

// Initialize Firebase
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

const BlogPost = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params?.id;

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      try {
        const blogRef = doc(db, 'blogs', id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlog({ id: blogSnap.id, ...blogSnap.data() });
        } else {
          console.log("No such blog!");
        }
      } catch (error) {
        console.error("Error fetching blog: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className={`${darkMode ? 'dark' : ''}`}>
        <section className="bg-white dark:bg-gray-900">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="container px-6 py-16 mx-auto text-center h-screen">
            <div className="max-w-lg mx-auto">
              <div className="h-12 w-3/4 bg-gray-300 shimmer mb-4 rounded"></div>
              <div className="flex justify-center">
                <div className="h-96 w-full bg-gray-300 shimmer rounded"></div>
              </div>
              <div className="mt-6 max-w-lg mx-auto">
                <div className="h-6 w-3/4 bg-gray-300 shimmer mb-4 rounded"></div>
                <div className="h-6 w-1/2 bg-gray-300 shimmer rounded"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <section className="bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container px-6 py-16 mx-auto text-center h-screen">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{blog.title}</h1>
          </div>

          <div className="flex justify-center mt-10">
            <img className="object-contain w-full h-96 rounded-xl lg:w-4/5" src={blog.imageUrl} alt={blog.title} />
          </div>

          <div className="max-w-lg mx-auto">
            <p className="mt-6 text-gray-500 dark:text-gray-300">{blog.content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
