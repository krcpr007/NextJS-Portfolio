import Image from 'next/image';
import bhartiTheme from '../public/theme.jpg'
import {FaGithubAlt} from 'react-icons/fa';
const StudentHub = () => {
    return (
        <>
            <div className="text-gray-400">
                <a href="https://github.com/krcpr007/Student-Hub-NITP" rel="noreferrer" target="_blank" > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >01. </span>Student Hub<FaGithubAlt className='inline text-emerald-300' />  </h2> </a>
                <div className="md:flex">
                    <div className=''>
                        <ul className='list-disc list-inside'>
                            <li>It is a <span className='font-medium text-emerald-300'>ReactJS</span> based  made with help of <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className='hover:underline text-emerald-300 font-medium'>Tailwind css </a> And firebase <br /></li>
                            <li>Students can post their achievements, status, Projects, coding skills, and many more things.</li>
                            <li>Here students can connect to each other and they can <span className="text-emerald-300">chat</span> with any student.</li>
                            <li>Dark Mode</li>
                            <li> <span className='text-emerald-300 font-medium'>Cryptography</span> End to end encrypted messaging to an user<br /></li>
                            <li>
                                <a href="https://studenthubnitp.vercel.app/" target="_blank" rel="noreferrer" className='text-emerald-300 hover:underline'> Visit site</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-2/3">
                        <a href="https://raw.githubusercontent.com/krcpr007/BhartiTheme/master/image/bharti_theme2.jpg" target="_blank" rel="noreferrer" >
                            <Image src={bhartiTheme} className='shadow-xl rounded-md ' alt="ProjectImg" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )

}
export default StudentHub;