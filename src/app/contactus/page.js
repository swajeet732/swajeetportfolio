import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32 mb-4">
            <Image 
              src="/swajeet.jpg" 
              alt="Swajeet Chavan" 
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-blue-300 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Swajeet Chavan</h1>
        </div>
        <div className="flex flex-col items-center mb-6 space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 w-full flex items-center">
            <FaEnvelope className="text-blue-500 text-xl mr-3" />
            <p className="text-gray-700 text-base sm:text-lg">swajeetchavan732@gmail.com</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 w-full flex items-center">
            <FaPhone className="text-green-500 text-xl mr-3" />
            <p className="text-gray-700 text-base sm:text-lg">+91 98346 10192</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/home" legacyBehavior>
            <a className="text-blue-600 hover:underline text-lg font-semibold">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
