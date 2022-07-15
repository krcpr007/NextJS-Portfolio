import Image from 'next/image';
import marvelhub from '../public/marvelhub.jpg'
import { FaGithubAlt } from 'react-icons/fa';
import Button from '../Components/Button';
function MarvelHub() {
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
                <Image src={marvelhub}
                  alt="ProjectImage" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 lg:pl-12 shadow-2xl rounded px-5 md:px-0 bg-gray-900">
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-400">
                Marvel Hub
              </h2>
              <p className="mt-1 text-gray-400 xl:text-xl">
                A <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className='font-medium text-emerald-300 '> React </a> web app where we can search about marvel superheroes and comics using <a href="https://developer.marvel.com/" target="_blank" rel="noreferrer" className='text-emerald-300 font-medium'>Marvel API</a>
              </p>
              <div className="flex">
                <Button text={"Demo"} link={'http://spotify-krcpr007.vercel.app/'} />
                <Button text={"Code"} link={'https://marvelhub.pages.dev/'} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MarvelHub