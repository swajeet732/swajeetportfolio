// src/app/skills/page.js
import Link from 'next/link';

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <Link href="/home" legacyBehavior>
            <a className="text-blue-600 hover:underline text-lg font-semibold">Back to Home</a>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 text-center">My Skills</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Backend Skills Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out flex flex-col items-center">
            <img src="/backend.png" alt="Backend Development" className="w-24 h-24 mb-4 rounded-full shadow-md" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Backend Development</h2>
            <p className="text-gray-600 text-center">
              <strong>Languages & Frameworks:</strong> Node.js, Express.js, JavaScript
            </p>
          </div>
          {/* Frontend Skills Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out flex flex-col items-center">
            <img src="/frontend.jpg" alt="Frontend Development" className="w-24 h-24 mb-4 rounded-full shadow-md" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frontend Development</h2>
            <p className="text-gray-600 text-center">
              <strong>Technologies:</strong> React.js, Redux, Next.js, HTML, CSS, Pug, Tailwind CSS, Material UI, Bootstrap
            </p>
          </div>
          {/* Database Skills Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out flex flex-col items-center">
            <img src="/database.jpg" alt="Database" className="w-24 h-24 mb-4 rounded-full shadow-md" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database</h2>
            <p className="text-gray-600 text-center">
              <strong>Databases:</strong> MongoDB, MySQL
            </p>
          </div>
          {/* Tools and Technologies Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out flex flex-col items-center">
            <img src="/tools.jpg" alt="Tools & Technologies" className="w-24 h-24 mb-4 rounded-full shadow-md" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Technologies</h2>
            <p className="text-gray-600 text-center">
              <strong>Tools:</strong> Visual Studio Code, Postman
            </p>
          </div>
          {/* DevOps Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out flex flex-col items-center">
            <img src="/devops.jpg" alt="DevOps" className="w-24 h-24 mb-4 rounded-full shadow-md" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">DevOps</h2>
            <p className="text-gray-600 text-center">
              <strong>DevOps:</strong> Git, GitHub, Docker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
