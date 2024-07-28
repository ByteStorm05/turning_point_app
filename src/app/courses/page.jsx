'use client'

import Navbar from "@/components/NavBar"
import { useState } from "react";

const Courses = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('12th Passed');

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const courses = [
    {
      title: 'IIT-JEE AIIMS NEET IPU Regular Courses For 12th Passed – Final Step',
      description: 'IIT-JEE AIIMS AIPMT NEET IPU Regular Courses For 12th Passed – Final Step Coaching Classes: IIT-JEE AIIMS AIPMT NEET IPU Course Duration: 10 Months Timings: 5 Hrs 4 days a ...',
      category: '12th Passed',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'AIIMS NEET IPU Regular Courses For 12th Passed – SSPMT',
      description: 'AIIMS NEET IPU Regular Courses For 12th Passed – SSPMT - Sure success PMT Coaching Classes: AIIMS NEET IPU Course Duration: 10 Months Timings: 5 Hrs 4 days a week ...',
      category: '12th Passed',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    // Add more courses here with relevant categories
    {
      title: 'IIT-JEE Regular Courses For 12th Passed – SSIIT',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      category: '12th Passed',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'IIT-JEE AIIMS NEET CBSE Regular Courses For 12th Class – ICP',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      category: '12th Class',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'AIIMS NEET CBSE Regular Courses For 12th Class – FDG+',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      category: '12th Class',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'IIT-JEE CBSE Regular Courses For 12th Class – SAG+',
      description: 'IIT-JEE CBSE Regular Courses For 12th Class – SAG+ Super Ability Group Turning Point Institute Coaching Classes For 12th Class Students aspiring to Top in IIT-JEE CBSE This course if ...',
      category: '12th Class',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE IIT-JEE AIIMS NEET Regular Courses For 11th Class – IGCP',
      description: 'CBSE IIT-JEE AIIMS AIPMT NEET Regular Courses For 11th Class – IGCP – Integrated Course Program IGCP(MORNING/EVENING) Integrated course program is for student have a deep rooted feel that they ...',
      category: '11th Class',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE AIIMS NEET Regular Courses For 11th Class – FDG',
      description: 'CBSE AIIMS NEET Regular Courses For 11th Class – FDG – Future Doctors Group Turning Point Institute Coaching Classes For 11th Class Students aspiring to Top in CBSE AIIMS NEET ...',
      category: '11th Class',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'IIT-JEE CBSE Regular Courses For 11th Class – SAG',
      description: 'IIT-JEE CBSE Regular Courses For 11th Class - SAG - Super Ability Group Turning Point Institute Coaching Classes For 11th Class Students aspiring to Top in IIT-JEE CBSE This course ...',
      category: '11th Class',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE IIT-JEE AIIMS NEET Regular Courses For 10th Class – Utkrisht+',
      description: 'Create a solid foundation for Class 10 CBSE Board Exams with focus on IIT-JEE/AIIMS/AIPMT/NEET. Prepare well, stay ahead, achieve Success. Turning Point Institute offers CBSE Foundation course - Science Physics ...',
      category: 'Foundation',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE Regular Courses For 10th Class – Dharohar+',
      description: 'Turning Point Institute offers Expert Coaching for Class 10th CBSE Board Exams. Get Assured 90% above marks. Turning Point Institute offers CBSE Foundation course - Science Physics Chemistry Maths Biology ...',
      category: 'Foundation',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE IIT-JEE AIIMS NEET Regular Courses For 9th Class – Utkrisht',
      description: 'Get Success in IIT-JEE/AIIMS/AIPMT/NEET Exams. Create a solid foundation. Expert coaching makes all the difference. Turning Point Institute offers CBSE Pre Foundation course - Science Physics Chemistry Maths Biology - with .',
      category: 'Foundation',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE Regular Courses For 9th Class – Dharohar',
      description: 'Get 90% or more in CBSE Board Exams. Yes, you can. Preparation is the key. Expert coaching makes all the difference. Turning Point Institute offers CBSE Pre Foundation course - .',
      category: 'Foundation',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    

  ];

  const filteredCourses = courses.filter(course =>
    activeTab === 'All' || course.category === activeTab
  );

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <section className="bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
              <h1 className="block text-3xl font-bold text-gray-700 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Courses We Offer
              </h1>
              <p className="max-w-lg mx-auto mt-4 text-xl text-gray-500 dark:text-gray-400">
                Turning Point provides structured courses for Class 10th-12th and graduates, with expert guidance, interactive sessions, and mock tests to excel in IIT-JEE and PMT exams.
              </p>
            </div>

            {/* tabs */}
            <div className="flex justify-center py-10">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="me-2">
                  <a
                    href="#"
                    onClick={() => setActiveTab('All')}
                    className={`inline-block p-4 ${activeTab === 'All' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg`}
                  >
                    All
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    onClick={() => setActiveTab('12th Passed')}
                    className={`inline-block p-4 ${activeTab === '12th Passed' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg`}
                  >
                    12th Passed
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    onClick={() => setActiveTab('12th Class')}
                    className={`inline-block p-4 ${activeTab === '12th Class' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg`}
                  >
                    12th Class
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    onClick={() => setActiveTab('11th Class')}
                    className={`inline-block p-4 ${activeTab === '11th Class' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg`}
                  >
                    11th Class
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    onClick={() => setActiveTab('Foundation')}
                    className={`inline-block p-4 ${activeTab === 'Foundation' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg`}
                  >
                    Foundation
                  </a>
                </li>
              </ul>
            </div>
            {/* end of tabs */}

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course, index) => (
                <div key={index}>
                  <div className="relative">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={course.image} alt={`Course image ${index + 1}`} />
                  </div>
                  <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                    {course.title}
                  </h1>
                  <hr className="w-32 my-6 text-blue-500" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {course.description}
                  </p>
                  <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Courses
