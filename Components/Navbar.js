import Link from 'next/link'
import Image from "next/image";
import rajan from '../public/rajan.jpg'
import SocialMediaLinks from './SocialMediaLinks';
const Navbar = () => {

  return (
    <>
      <nav className="bg-slate-900 border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-slate-900 shadow-2xl sticky top-0 z-50">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href={"/"} >
            <a className="flex">
              <Image src={rajan} className="rounded-full" width={45} height={45} alt="" />
              <span className=" self-center text-lg font-semibold whitespace-nowrap heading ml-2 text-emerald-300 neonText">
                Rajan kumar
              </span>
            </a>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              id='menu-button'
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block font-mono py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  <span className='text-emerald-300'>01.</span>Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className=" font-mono block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className='text-emerald-300 font-mono'>02.</span>About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block font-mono py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className='text-emerald-300 font-mono'>03.</span>Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-mono"
                >
                  <span className='text-emerald-300 font-mono'>04.</span>Contact
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1mk62t09UnlHCtr5EL1lSXUDwq1FHSSSO/view?usp=sharing"
                  target={"_blank"} rel="noreferrer"
                  className="block py-2 pr-4 pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-mono"
                >
                  <button className=" text-emerald-300" >Resume</button>
                </a>
              </li>
            </ul>
          </div>

        </div>
        {/* social media links */}
        <SocialMediaLinks />
      </nav>
    </>
  );
};
export default Navbar; 