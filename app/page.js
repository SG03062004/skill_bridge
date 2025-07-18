'use client';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Page = () => {
  const courses = [
    {
      title: 'Digital Marketing Essentials',
      description:
        'Master social media, SEO, and email campaigns. Build confidence and get job-ready in the digital marketing space.',
    },
    {
      title: 'MBA Crash Course',
      description:
        'Learn the foundational concepts of management, marketing, and strategy to boost your business knowledge.',
    },
    {
      title: 'Corporate Communication Skills',
      description:
        'Build your confidence and clarity in professional settings. Learn essential skills in body language, tone, and workplace communication to stand out.',
    },
    {
      title: 'Interview Preparation Masterclass',
      description:
        'Learn how to crack interviews with ease. Practice HR and technical rounds, and improve your body language, confidence, and articulation.',
    },
    {
      title: 'Personal Branding for LinkedIn',
      description:
        'Create a strong LinkedIn profile that gets attention. Learn profile optimization, networking tips, and personal branding strategies.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <nav className="bg-white shadow mb-10 px-6 py-4 flex justify-between items-center rounded-xl">
        <h1 className="text-xl font-bold text-blue-600">SkillBridge</h1>
        <input
          type="text"
          placeholder="Search courses..."
          className="border border-gray-300 rounded px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </nav>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              {course.title}
            </h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center text-gray-600">
        <div className="flex justify-center items-center gap-2 text-sm mt-4">
          <FaInstagram className="text-pink-500" />
          <a
            href="https://instagram.com/skillsbridge_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @skillsbridge_app
          </a>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
