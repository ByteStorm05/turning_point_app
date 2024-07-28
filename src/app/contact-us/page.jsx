'use client'

import Navbar from "@/components/NavBar";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false);
  const [isMultiDropdownOpen, setIsMultiDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    class: '',
    otherQuestions: '',
    agreeTerms: false
  });

  useEffect(() => {
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

    initializeApp(firebaseConfig);

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const toggleMultiDropdown = () => {
    setIsMultiDropdownOpen(!isMultiDropdownOpen);
    setIsDoubleDropdownOpen(false);
  };

  const toggleDoubleDropdown = () => {
    setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('#multiLevelDropdownButton') || event.target.closest('#multi-dropdown')) {
      return;
    }
    if (event.target.closest('#doubleDropdownButton') || event.target.closest('#doubleDropdown')) {
      return;
    }
    setIsMultiDropdownOpen(false);
    setIsDoubleDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    try {
      await addDoc(collection(db, 'contactInquiries'), formData);
      alert('Form submitted successfully!');
      router.push("/")
      setFormData({
        name: '',
        email: '',
        phoneNo: '',
        class: '',
        otherQuestions: '',
        agreeTerms: false
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <section className="bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex justify-start">
          <img 
            src="/images/imgonline-com-ua-ReplaceColor-EnUg5xRWwK.jpg" 
            className="h-screen mr-10"
            alt="Contact Us"
          />
          <main className="min-h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-5">
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@google.com" required />
              </div>
              <div className="mb-5">
                <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" pattern="[0-9]{10}" title="Please enter a 10 digit number" required />
              </div>
              <div className="mb-5">
                <div className="flex gap-3 justify-between items-center">
                  <div>
                    <label htmlFor="class" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="class" name="class" value={formData.class} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="">Choose your Class</option>
                      <option value="12th Passed">12th Passed</option>
                      <option value="12th Class">12th Class</option>
                      <option value="11th Class">11th Class</option>
                      <option value="Foundation">Foundation</option>
                    </select>
                  </div>
                  <div className="w-1/2 text-sm dark:text-white">
                    Not Sure about which course to choose? <Link href="/courses"><span className="text-blue-600 hover:underline cursor-pointer">Explore Courses</span></Link>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="otherQuestions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Any Other Questions?</label>
                <input type="text" id="otherQuestions" name="otherQuestions" value={formData.otherQuestions} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="agreeTerms" name="agreeTerms" type="checkbox" checked={formData.agreeTerms} onChange={handleInputChange} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="agreeTerms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link href="/terms-and-conditions" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </main>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;