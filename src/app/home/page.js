'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen  bg-cover bg-center ${darkMode ? 'bg-gray-900' : ''}`} style={{ backgroundImage: 'url(/sea.jpg)' }}>
      <div className="flex flex-col items-center justify-center  h-full px-4 md:px-0">
        <div className={`w-full md:w-3/4 h-full md:h-3/4 mt-4 p-4 md:p-8 shadow-lg rounded-lg overflow-y-auto ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <nav className="w-full p-3 flex justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="focus:outline-none">
                {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-800 dark:text-gray-200 text-xl" />}
              </button>
            </div>
            <ul className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0">
              <li>
                <Link href="/projects" legacyBehavior>
                  <a className="hover:underline text-lg font-serif transition duration-300 hover:text-blue-500">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/contactus" legacyBehavior>
                  <a className="hover:underline text-lg font-sans transition duration-300 hover:text-blue-500">Contact-Me</a>
                </Link>
              </li>
              <li>
                <Link href="/skills" legacyBehavior>
                  <a className="hover:underline text-lg font-mono transition duration-300 hover:text-blue-500">Skills</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0">
            <div className="w-full md:w-2/3 p-4">
              <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} ${darkMode ? 'font-serif' : 'font-sans'}`}>
                𝓢𝔀𝓪𝓳𝓮𝓮𝓽 𝓒𝓱𝓪𝓿𝓪𝓷
              </h1>
              <p className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-white' : 'text-gray-700'} ${darkMode ? 'font-serif' : 'font-mono'}`}>
                𝕴'𝖒 𝖆 𝖋𝖚𝖑𝖑 𝖘𝖙𝖆𝖈𝖐 𝖉𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 𝖜𝖎𝖙𝖍 𝖆 𝖕𝖆𝖘𝖘𝖎𝖔𝖓 𝖋𝖔𝖗 𝖙𝖚𝖗𝖓𝖎𝖓𝖌 𝖈𝖔𝖒𝖕𝖑𝖊𝖝 𝖕𝖗𝖔𝖇𝖑𝖊𝖒𝖘 𝖎𝖓𝖙𝖔 𝖊𝖑𝖊𝖌𝖆𝖓𝖙 𝖘𝖔𝖑𝖚𝖙𝖎𝖔𝖓𝖘. 𝕴 𝖙𝖍𝖗𝖎𝖛𝖊 𝖔𝖓 𝖈𝖗𝖊𝖆𝖙𝖎𝖓𝖌 𝖎𝖓𝖙𝖚𝖎𝖙𝖎𝖛𝖊 𝖚𝖘𝖊𝖗 𝖊𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊𝖘 𝖆𝖓𝖉 𝖗𝖔𝖇𝖚𝖘𝖙 𝖇𝖆𝖈𝖐-𝖊𝖓𝖉 𝖘𝖞𝖘𝖙𝖊𝖒𝖘. 𝕷𝖊𝖙'𝖘 𝖇𝖚𝖎𝖑𝖉 𝖘𝖔𝖒𝖊𝖙𝖍𝖎𝖓𝖌 𝖆𝖒𝖆𝖟𝖎𝖓𝖌 𝖙𝖔𝖌𝖊𝖙𝖍𝖊𝖗!
                <br />
                <br />
                <span className={`text-md md:text-lg italic ${darkMode ? 'text-white' : 'text-gray-700'} ${darkMode ? 'font-mono' : 'font-serif'}`}>
                  ꧁༺ "𝓘 𝓼𝓸𝓵𝓿𝓮 𝓹𝓻𝓸𝓫𝓵𝓮𝓶𝓼 𝔂𝓸𝓾 𝓭𝓸𝓷’𝓽 𝓴𝓷𝓸𝔀 𝔂𝓸𝓾 𝓱𝓪𝓿𝓮, 𝓲𝓷 𝔀𝓪𝔂𝓼 𝔂𝓸𝓾 𝓬𝓪𝓷’𝓽 𝓾𝓷𝓭𝓮𝓻𝓼𝓽𝓪𝓷𝓭!" ༻꧂
                </span>
              </p>
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center mt-4 md:mt-0">
              <img src="/swajeet.jpg" alt="Swajeet Chavan" className="rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-700 w-32 h-32 md:w-auto md:h-auto" />
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row justify-center mt-8 md:mt-8 items-center">
            <img
              src="/full.webp"
              alt="Download"
              className="w-20 h-16 md:w-40 md:h-32 mt-4 md:mt-0 md:absolute md:top-0 md:left-0 md:ml-4"
              style={{ transform: 'translateY(-50%)' }}
            />
            <a
              href="/swajeetcv.pdf"
              download
              className="bg-[#1f2c5e] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt- -4 md:mt-0"
            >
              Download My CV
            </a>
          </div>



        </div>
      </div>
    </div>
  );
}
