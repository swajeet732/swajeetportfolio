import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/sea.jpg)' }}>
      <div className="flex flex-col items-center justify-center h-full px-4 md:px-0">
        <div className="bg-white w-full md:w-3/4 h-full md:h-3/4 mt-8 p-4 md:p-8 shadow-lg rounded-lg overflow-y-auto">
          <nav className="w-full text-black p-3 flex justify-end">
            <ul className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0">
              <li>
                <Link href="/projects" legacyBehavior>
                  <a className="hover:underline text-lg font-semibold">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/contactus" legacyBehavior>
                  <a className="hover:underline text-lg font-semibold">Contact Me</a>
                </Link>
              </li>
              <li>
                <Link href="/skills" legacyBehavior>
                  <a className="hover:underline text-lg font-semibold">Skills</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0">
            <div className="w-full md:w-2/3 p-4">
              <h1 className="text-gray-900 text-4xl md:text-5xl font-extrabold mb-6">
                Swajeet Chavan
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                I'm a full stack developer with a passion for turning complex problems into elegant solutions.
                I thrive on creating intuitive user experiences and robust back-end systems. Let's build something amazing together!
                <br />
                <br />
                <span className="text-md md:text-lg italic">"I solve problems you don’t know you have, in ways you can’t understand!"</span>
              </p>
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center mt-4 md:mt-0">
              <img src="/swajeet.jpg" alt="Swajeet Chavan" className="rounded-lg shadow-lg border-4 border-gray-300 w-32 h-32 md:w-auto md:h-auto" />
            </div>
          </div>
          <div className="flex justify-center mt-4 md:mt- -16">
            <a
              href="/swajeetcv.pdf"
              download
              className="bg-[#1f2c5e] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
