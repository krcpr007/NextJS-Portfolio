import Image from 'next/image';
import studentHub from '../public/studentHub.jpg'
import { FaGithubAlt } from 'react-icons/fa';
import Button from '../Components/Button';
const StudentHub = () => {
  return (
    <>
      <div className="w-full bg-slate-700 md:px-20">
        <div className="container md:px-10 mx-auto flex flex-col xl:px-0">
          <div className="w-full lg:flex xl:flex lg:space-x-6 space-y-6 items-center mt-12">
            <div className="w-full lg:w-1/2 xl:w-1/2">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
                <div className="flex items-center h-8 text-white bg-gray-900">
                  <div className="w-3 h-3 ml-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 ml-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 ml-2 bg-green-400 rounded-full"></div>
                </div>
                <a href="/studentHub.jpg">
                  <Image src={studentHub}
                    alt="ProjectImage" className="object-cover w-full h-full" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 lg:pl-12 mt-0 shadow-2xl rounded px-5 md:px-0 bg-gray-900 border-emerald-300 border">
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-400">
                StudentsHub
              </h2>
              <p className="mt-4 text-gray-400 xl:text-md">
                A <span className='font-medium text-emerald-300'>ReactJS</span> based site made with help of <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className='hover:underline text-emerald-300 font-medium'>Tailwind css </a> And firebase. Students can post their achievements, status, Projects, coding skills, and many more things. Encrypted end-to-end chat system between students using <span className='text-emerald-300 font-medium'>cryptography</span>.
              </p>
              <div className="flex my-1">
                <Button text="Demo" link="https://studenthubnitp.vercel.app/" />
                <Button text="Code" link="https://github.com/krcpr007/Student-Hub-NITP/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default StudentHub;