import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
function SocialMediaLinks() {
  return (
    <>
      <div className='hidden lg:flex fixed flex-col top-[35%] -left-5'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] rounded-t hover:rounded duration-300 '>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/krcpr007/'
                target={'_blank'} rel="noreferrer"
              >
                <span className='ml-10'>Linkedin</span> <FaLinkedin size={30} className="mx-1 text-blue-600" />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] hover:rounded duration-300'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/krcpr007'
                target={'_blank'} rel="noreferrer"
              >
                <span className='ml-11'>Github</span> <FaGithub size={30} className="mx-1"/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] hover:rounded duration-300 '>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='mailto:rajankk.ug20.cse@nitp.ac.in'
              >
                <span className='ml-12'>Email</span> <SiGmail size={30} className="mx-1 -red-500" fill='red'/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] rounded-b hover:rounded duration-300'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='/My_resume.pdf' download
              >
                <span className='ml-10'>Resume</span> <BsFillPersonLinesFill size={30} className="mx-1"/>
              </a>
            </li>
          </ul>
        </div>
    </>
  )
}

export default SocialMediaLinks