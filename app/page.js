import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-purple-700">
            SkillBridge
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-black"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 text-sm">
          <button className="text-purple-700 hover:underline hidden md:inline">
            Home
          </button>
          <button className="text-purple-700 hover:underline hidden md:inline">
            Courses
          </button>
          <button className="text-purple-700 hover:underline hidden md:inline">
            Certifications
          </button>
          <button className="text-purple-700 hover:underline hidden md:inline">
            Jobs
          </button>
          <button className="text-purple-700 hover:underline hidden md:inline">
            About
          </button>
          <button className="text-purple-700 hover:underline hidden md:inline">
            Contact
          </button>

          <button className="px-3 py-1 border border-purple-600 text-purple-600 rounded hover:bg-purple-50">
            Log In
          </button>
          <button className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
<section className="bg-purple-100 py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
  <div className="max-w-lg">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Master Business Communication for Career Success
    </h2>
    <p className="text-gray-700 mb-4">
      Build your confidence and clarity in professional settings. Learn
      essential skills in body language, tone, and workplace communication
      to stand out and thrive in corporate environments.
    </p>
    <div className="flex flex-wrap gap-4">
      <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
        Explore Courses
      </button>
      <a
        href="https://youtu.be/Vc-Shv-76Ig?si=_fslsWVeZZDxFjkJ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-700 border border-purple-700 px-6 py-2 rounded hover:bg-purple-700 hover:text-white transition"
      >
        Watch Intro
      </a>
    </div>
  </div>

  {/* Clickable Image that opens video */}
  <div className="flex justify-center items-center w-full md:w-[500px]">
    <a
      href="https://youtu.be/Vc-Shv-76Ig?si=_fslsWVeZZDxFjkJ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/business-communication.png"
        alt="Business Communication"
        width={500}
        height={500}
        className="w-full h-auto rounded-xl shadow-xl object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
    </a>
  </div>
</section>


      {/* Career Accelerator Section */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Ready to reimagine your career?
        </h2>
        <p className="text-gray-600 mb-12">
          Get the skills and real-world experience employers want with Career
          Accelerators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Business Analytics */}
          <a
            href="https://youtu.be/zIWypc39afE?si=gG-g0d5hE47_wJhO"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 p-6 rounded-lg text-left shadow hover:shadow-lg transition block text-black"
          >
            <Image
              src="/business-analytics.png"
              alt="Business Analytics"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Business Analytics</h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ Excel & Power BI Essentials</li>
              <li>✅ Business Metrics & KPIs</li>
              <li>✅ Dashboarding & Reporting</li>
            </ul>
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span className="mr-4">⭐ 4.5</span>
              <span className="mr-4">💬 12K ratings</span>
              <span>⏱ 35.2 hrs</span>
            </div>
            <button className="text-sm text-blue-700 border border-blue-700 px-4 py-1 rounded hover:bg-blue-700 hover:text-white transition">
              Watch Intro
            </button>
          </a>

          {/* Supply Chain Management */}
          <a
            href="https://youtu.be/33isHhIS5zo?si=So_h4BAzBIctOV_W"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-100 p-6 rounded-lg text-left shadow hover:shadow-lg transition block text-black"
          >
            <Image
              src="/supply-chain.png"
              alt="Supply Chain"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Supply Chain Management
            </h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ Logistics & Inventory Planning</li>
              <li>✅ Procurement Strategies</li>
              <li>✅ SAP & ERP Basics</li>
            </ul>
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span className="mr-4">⭐ 4.4</span>
              <span className="mr-4">💬 9K ratings</span>
              <span>⏱ 24.7 hrs</span>
            </div>
            <button className="text-sm text-green-700 border border-green-700 px-4 py-1 rounded hover:bg-green-700 hover:text-white transition">
              Watch Intro
            </button>
          </a>

          {/* Public Speaking */}
          <a
            href="https://youtu.be/iyDtf_WBROU?si=XWgXVbF2X6A1YLtb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-yellow-100 p-6 rounded-lg text-left shadow hover:shadow-lg transition block"
          >
            <Image
              src="/public-speaking.png"
              alt="Public Speaking"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Public Speaking</h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ Overcome Stage Fear</li>
              <li>✅ Speech Crafting Techniques</li>
              <li>✅ TED Talk Presentation Skills</li>
            </ul>
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span className="mr-4">⭐ 4.8</span>
              <span className="mr-4">💬 18K ratings</span>
              <span>⏱ 12.5 hrs</span>
            </div>
            <button className="text-sm text-yellow-700 border border-yellow-700 px-4 py-1 rounded hover:bg-yellow-700 hover:text-white transition">
              Watch Intro
            </button>
          </a>

          {/* Digital Marketing */}
          <a
            href="https://youtu.be/vknb4HJreNE?si=HNZB0H6mgNhrn8g2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-purple-100 p-6 rounded-lg text-left shadow hover:shadow-lg transition block"
          >
            <Image
              src="/digital-marketer.png"
              alt="Digital Marketing"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ Social Media Marketing</li>
              <li>✅ SEO & Google Ads</li>
              <li>✅ Content Strategy</li>
            </ul>
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span className="mr-4">⭐ 4.6</span>
              <span className="mr-4">💬 3.4K ratings</span>
              <span>⏱ 28.4 hrs</span>
            </div>
            <button className="text-sm text-purple-700 border border-purple-700 px-4 py-1 rounded hover:bg-purple-700 hover:text-white transition">
              Watch Intro
            </button>
          </a>

          {/* Data Analytics */}
          <a
            href="https://youtu.be/F_x5a4OJGrU?si=UALlPhulEVoz0YG9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-pink-100 p-6 rounded-lg text-left shadow hover:shadow-lg transition block"
          >
            <Image
              src="/data-analytics.png"
              alt="Data Analytics"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ SQL & Excel</li>
              <li>✅ Tableau & Dashboards</li>
              <li>✅ Python Data Projects</li>
            </ul>
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span className="mr-4">⭐ 4.7</span>
              <span className="mr-4">💬 22K ratings</span>
              <span>⏱ 32.8 hrs</span>
            </div>
            <button className="text-sm text-pink-700 border border-pink-700 px-4 py-1 rounded hover:bg-pink-700 hover:text-white transition">
              Watch Intro
            </button>
          </a>

          {/* ✅ Card 6: Financial Accounting and Analysis */}
          <a
            href="https://youtu.be/YB5kT16AIrQ?si=tCRFuP7NjosnBy60"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-indigo-100 p-6 rounded-lg text-left shadow hover:shadow-lg transition block"
          >
            <Image
              src="/financial-accounting.png"
              alt="Financial Accounting"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">
              Financial Accounting & Analysis
            </h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ Fundamentals of Accounting</li>
              <li>✅ Financial Statements & Ratios</li>
              <li>✅ Real-World Case Studies</li>
            </ul>
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span className="mr-4">⭐ 4.6</span>
              <span className="mr-4">💬 7.2K ratings</span>
              <span>⏱ 26.1 hrs</span>
            </div>
            <button className="text-sm text-indigo-700 border border-indigo-700 px-4 py-1 rounded hover:bg-indigo-700 hover:text-white transition">
              Watch Intro
            </button>
          </a>
        </div>
      </section>
      <div className="bg-gradient-to-r from-purple-100 to-purple-50 border-t border-purple-300 px-6 py-6 mt-12 text-sm text-gray-800 flex flex-col items-center text-center space-y-3 rounded-md shadow-inner">
  <p className="text-base font-medium text-purple-800">
    🌍 Need help understanding video content in your preferred language?
  </p>
  <p className="max-w-xl">
    Use <span className="font-semibold text-purple-700">HeyGen Video Translator
</span> to convert spoken content into your native language for better clarity and comprehension.
  </p>
  <a
    href="https://www.heygen.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-white bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-md text-sm font-semibold"
  >
    🎥 Translate Videos with HeyGen
  </a>

  {/* Instagram Handle */}
  

  <p className="text-sm text-purple-700 mt-4 flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-purple-600"
  >
    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM18 6.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-6 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z" />
  </svg>
  Follow us on Instagram:{" "}
  <a
    href="https://www.instagram.com/skillsbridge_app"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-purple-900"
  >
    @skillsbridge_app
  </a>
</p>

</div>


    </main>
  );
}
