import Image from 'next/image';
import Sorting from '../public/Sorting.gif';
import Button from '../Components/Button';
const SortingVisualizer = () => {
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
                <a href="/Sorting.gif">
                  <Image src={Sorting}
                    alt="ProjectImage" className="object-cover w-full h-full" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 lg:pl-12 shadow-2xl rounded px-5 md:px-0 bg-gray-900 border-emerald-300 md:border">
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-400">
                Sorting visualizer
              </h2>
              <p className="mt-4 text-gray-400 xl:text-md">
                <span className='text-emerald-300 font-medium'>React web app</span> Where you can visualize how actually a sorting algorithm works in <span className='text-emerald-300 font-medium'>bar graphical manner</span> . It include
                various sorting algorithms. I made it using, ReactJS and for styling i used Tailwind CSS
              </p>
              <div className="flex my-1">
                <Button text={"Demo"} link={'https://github.com/krcpr007/visualize_sorting_algos_React'} />
                <Button text={"Code"} link={'https://github.com/krcpr007/visualize_sorting_algos_React'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SortingVisualizer; 