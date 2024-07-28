'use client'

import Navbar from "@/components/NavBar";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "@/firebaseConfig";

import { collection } from "firebase/firestore";

const ContactUs = () => {
  // ... existing state variables ...

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    class: '',
    otherQuestions: '',
    agreeTerms: false
  });

  // ... existing functions ...

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactRef = ref(db, 'contacts');
      await push(contactRef, formData);
      alert('Form submitted successfully!');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNo: '',
        class: '',
        otherQuestions: '',
        agreeTerms: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <section className="bg-white dark:bg-gray-900">
        {/* Navbar Start */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* Navbar End */}

        {/* Form Start */}
        <div className="flex justify-start">
          <Image 
            src="/images/imgonline-com-ua-ReplaceColor-EnUg5xRWwK.jpg"
            height={1080}
            width={1920}
            className="h-screen mr-10"
            alt="Decorative image"
          />
          <main className="min-h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-5">
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              {/* Repeat similar changes for email, phoneNo, and otherQuestions inputs */}
              <div className="mb-5">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select
                  id="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Choose your Class</option>
                  <option value="12th Passed">12th Passed</option>
                  <option value="12th Class">12th Class</option>
                  <option value="11th Class">11th Class</option>
                  <option value="Foundation">Foundation</option>
                </select>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label htmlFor="agreeTerms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree with the <Link href="/terms-and-conditions" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link>
                </label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Register new account
              </button>
            </form>
          </main>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;