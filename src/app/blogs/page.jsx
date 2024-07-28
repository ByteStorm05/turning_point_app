'use client'

import Navbar from "@/components/NavBar"
import { useState } from "react";

const Courses = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('12th Passed');

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const blogs = [
    {
      title: 'IIT-JEE AIIMS NEET IPU Regular Courses For 12th Passed – Final Step',
      description: 'IIT-JEE AIIMS AIPMT NEET IPU Regular Courses For 12th Passed – Final Step Coaching Classes: IIT-JEE AIIMS AIPMT NEET IPU Course Duration: 10 Months Timings: 5 Hrs 4 days a ...',
            image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'AIIMS NEET IPU Regular Courses For 12th Passed – SSPMT',
      description: 'AIIMS NEET IPU Regular Courses For 12th Passed – SSPMT - Sure success PMT Coaching Classes: AIIMS NEET IPU Course Duration: 10 Months Timings: 5 Hrs 4 days a week ...',
            image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    // Add more blogs here with relevant categories
    {
      title: 'IIT-JEE Regular Courses For 12th Passed – SSIIT',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'IIT-JEE AIIMS NEET CBSE Regular Courses For 12th Class – ICP',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'AIIMS NEET CBSE Regular Courses For 12th Class – FDG+',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'IIT-JEE CBSE Regular Courses For 12th Class – SAG+',
      description: 'IIT-JEE CBSE Regular Courses For 12th Class – SAG+ Super Ability Group Turning Point Institute Coaching Classes For 12th Class Students aspiring to Top in IIT-JEE CBSE This blog if ...',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE IIT-JEE AIIMS NEET Regular Courses For 11th Class – IGCP',
      description: 'CBSE IIT-JEE AIIMS AIPMT NEET Regular Courses For 11th Class – IGCP – Integrated Course Program IGCP(MORNING/EVENING) Integrated blog program is for student have a deep rooted feel that they ...',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE AIIMS NEET Regular Courses For 11th Class – FDG',
      description: 'CBSE AIIMS NEET Regular Courses For 11th Class – FDG – Future Doctors Group Turning Point Institute Coaching Classes For 11th Class Students aspiring to Top in CBSE AIIMS NEET ...',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'IIT-JEE CBSE Regular Courses For 11th Class – SAG',
      description: 'IIT-JEE CBSE Regular Courses For 11th Class - SAG - Super Ability Group Turning Point Institute Coaching Classes For 11th Class Students aspiring to Top in IIT-JEE CBSE This blog ...',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE IIT-JEE AIIMS NEET Regular Courses For 10th Class – Utkrisht+',
      description: 'Create a solid foundation for Class 10 CBSE Board Exams with focus on IIT-JEE/AIIMS/AIPMT/NEET. Prepare well, stay ahead, achieve Success. Turning Point Institute offers CBSE Foundation blog - Science Physics ...',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE Regular Courses For 10th Class – Dharohar+',
      description: 'Turning Point Institute offers Expert Coaching for Class 10th CBSE Board Exams. Get Assured 90% above marks. Turning Point Institute offers CBSE Foundation blog - Science Physics Chemistry Maths Biology ...',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE IIT-JEE AIIMS NEET Regular Courses For 9th Class – Utkrisht',
      description: 'Get Success in IIT-JEE/AIIMS/AIPMT/NEET Exams. Create a solid foundation. Expert coaching makes all the difference. Turning Point Institute offers CBSE Pre Foundation blog - Science Physics Chemistry Maths Biology - with .',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'CBSE Regular Courses For 9th Class – Dharohar',
      description: 'Get 90% or more in CBSE Board Exams. Yes, you can. Preparation is the key. Expert coaching makes all the difference. Turning Point Institute offers CBSE Pre Foundation blog - .',
           image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    

  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <section className="bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
              <h1 className="block text-3xl font-bold text-gray-700 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Blogs 📝
              </h1>
              <p className="max-w-lg mx-auto mt-4 text-xl text-gray-500 dark:text-gray-400">
                Turning Point provides structured blogs for Class 10th-12th and graduates, with expert guidance, interactive sessions, and mock tests to excel in IIT-JEE and PMT exams.
              </p>
            </div>

            {/* tabs */}
           
            {/* end of tabs */}

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog, index) => (
                <div key={index}>
                  <div className="relative">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog.image} alt={`Course image ${index + 1}`} />
                  </div>
                  <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                    {blog.title}
                  </h1>
                  <hr className="w-32 my-6 text-blue-500" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {blog.description}
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
