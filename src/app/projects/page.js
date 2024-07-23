// src/app/projects/page.js
import Link from 'next/link';

const projects = [
  {
    name: "Toy Store",
    description: "A full-fledged e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). Features include product listings, user authentication, and a shopping cart.",
    imageUrl: "/ecommerce.jpeg",
    link: "#",
  },
  {
    name: "Football Jersey Store",
    description: "An e-commerce platform built with Next.js that allows users to browse and purchase football jerseys. It includes dynamic product pages and a secure checkout process.",
    imageUrl: "/Leomessi.jpg",
    link: "#",
  },
  {
    name: "Student Management System",
    description: "A comprehensive system for managing student information, including registration, grades, and attendance. Built with MERN stack, this application provides an intuitive interface for both students and administrators.",
    imageUrl: "/studentmanagementsystem.png",
    link: "#",
  },
  {
    name: "MakeItEasy",
    description: "An HR management system designed to streamline HR processes. It features employee profiles, leave management, and performance tracking, developed with a focus on usability and efficiency.",
    imageUrl: "/makeiteasy.png",
    link: "#",
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link href="/home" legacyBehavior>
            <a className="text-blue-600 hover:underline text-lg font-semibold mb-4 md:mb-0">Back to Home</a>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 text-center">My Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full h-60">
                <img src={project.imageUrl} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.name}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link href={project.link} legacyBehavior>
                  <a className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 block text-center">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
