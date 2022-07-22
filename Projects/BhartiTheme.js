import Image from 'next/image';
import bhartiTheme from '../public/theme.jpg'
import Button from '../Components/Button';
import { FaGithubAlt } from 'react-icons/fa';
const BhartiTheme = () => {
  return (
    <>
      <div className="w-full bg-slate-700 md:px-20">
        <div className="container md:px-10 mx-auto flex flex-col xl:px-0">
          <div className="w-full lg:flex xl:flex lg:space-x-6 space-y-6 items-center mt-12">
            <div className="w-full lg:w-1/2 xl:w-1/2 ">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
                <div className="flex items-center h-8 text-white bg-gray-900">
                  <div className="w-3 h-3 ml-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 ml-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 ml-2 bg-green-400 rounded-full"></div>
                </div>
                <a href="/theme.jpg">
                  <Image src={bhartiTheme}
                    alt="ProjectImage" className="object-cover w-full h-full" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 lg:pl-12 shadow-2xl rounded px-5 md:px-0 bg-gray-900 border-emerald-300 border">
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-400">
                Bharti Theme
              </h2>
              <p className="mt-4 text-gray-400 xl:text-md">
                A <span className='font-medium text-emerald-300'>VS code dark theme</span> named as Bharti theme made with help of <a href="https://www.npmjs.com/package/generator-code" target="_blank" rel="noreferrer" className='hover:underline text-emerald-300 font-medium'>Yo Code</a> - Extension and Customization Generator. You can download it from vs code extension marketplace and you can use it.
              </p>
              <div className="flex my-1">
                <Button text={"Download"} link={'https://marketplace.visualstudio.com/items?itemName=Rajankumar.bharti-theme&ssr=false'} />
                <Button text={"Code"} link={'https://github.com/krcpr007/BhartiTheme'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BhartiTheme; 