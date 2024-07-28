'use client'

import Navbar from "@/components/NavBar";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMultiDropdownOpen, setIsMultiDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const toggleMultiDropdown = () => {
    setIsMultiDropdownOpen(!isMultiDropdownOpen);
    setIsDoubleDropdownOpen(false); // Close double dropdown when multi dropdown is toggled
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

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <section className="bg-white dark:bg-gray-900">
        
        {/* Navbar Start */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* Navbar End */}

        {/* Form Start */}
        <div className="flex justify-start">
        <img 
        src="/images/imgonline-com-ua-ReplaceColor-EnUg5xRWwK.jpg" className="h-screen mr-10"
      />
        <main className="min-h-screen flex flex-col justify-center items-center">
          <div className="max-w-sm mx-auto mb-5">
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@google.com" required />
            </div>
            <div className="mb-5">
              <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
              <input type="tel" id="phoneNo" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" pattern="[0-9]{10}" title="Please enter a 10 digit number" required />
            </div>
            {/* Dropdown Start */}
          <div className="mb-5">
            <div className="flex gap-3 justify-between items-center">


              
              <div>

                    <form className="max-w-sm mx-auto">
                      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option >Choose your Class</option>
                        <option value="US">12th Passed</option>
                        <option value="CA">12th Class</option>
                        <option value="FR">11th Class</option>
                        <option value="DE">Foundation</option>
                      </select>
                    </form>

              </div>

              <div className="w-1/2 text-sm dark:text-white">
                Not Sure about which course to choose? <Link href="/courses"><span className=" text-blue-600 hover:underline cursor-pointer">Explore Courses</span> </Link>
              </div>

            </div>
            
          </div>
          {/* Dropdown End */}
            <div className="mb-5">
              <label htmlFor="otherQuestions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Any Other Questions?</label>
              <input type="text" id="otherQuestions" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link href="/terms-and-conditions" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
          </div>

          
        </main>
        </div>
      </section>
      
    </div>
  );
}

export default ContactUs;
