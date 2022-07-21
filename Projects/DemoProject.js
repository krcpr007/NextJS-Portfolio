import Image from 'next/image';
import bhartiTheme from '../public/theme.jpg'
import { FaGithubAlt } from 'react-icons/fa';
const DemoProject = () => {
  return (
    <>
      <div className="w-full bg-slate-700 md:p-20">
        <div className="container md:px-10 mx-auto flex flex-col xl:px-0">
          <div className="w-full lg:flex xl:flex lg:space-x-6 space-y-6 items-center mt-12">
            <div className="w-full lg:w-1/2 xl:w-1/2 mb-10">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
                <div className="flex items-center h-8 text-white bg-gray-900">
                  <div className="w-3 h-3 ml-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 ml-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 ml-2 bg-green-400 rounded-full"></div>
                </div>
                <Image src={bhartiTheme}
                  alt="ProjectImage" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 lg:pl-12">
              <p className="text-sm font-bold tracking-wide text-indigo-500 uppercase">
                Lorem ipsum dolor sit
              </p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-400">
                Bharti Theme
              </h2>
              <p className="mt-1 text-gray-300 xl:text-xl">
                This is a VS code dark theme named as Bharti theme made with help of Yo Code - Extension and Customization Generator
              </p>
              <div className="flex">
                <a href="#0" className="flex items-center m-1 font-medium text-indigo-500 underline" target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                </a>
                <a href="#0" className="flex items-center m-1 font-medium text-indigo-500 underline" target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DemoProject; 