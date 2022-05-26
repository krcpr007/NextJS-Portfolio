import Image from 'next/image';
import marvelhub from '../public/marvelhub.jpg'
import { FaGithubAlt } from 'react-icons/fa';

function MarvelHub() {
    return (
        <>
            <div className="">
                <div className="text-gray-400">
                    <a href="https://github.com/krcpr007/MarvelHub" rel="noreferrer" target="_blank" > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >04. </span>Marvel HuB<FaGithubAlt className='text-emerald-300 inline' />  </h2> </a>
                    <div className='md:flex'>
                        <div>
                            <ul className='list-disc list-inside'>
                                <li>This is <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className='font-medium text-emerald-300 '> React </a> web app where we can search about marvel superheroes using <a href="https://developer.marvel.com/" target="_blank" rel="noreferrer" className='text-emerald-300 font-medium'>Marvel API</a> </li>
                                <li>The <a href="https://developer.marvel.com/" target="_blank" rel="noreferrer"><span className='font-medium text-emerald-300 hover:underline'>Marvel Comics API</span> </a>allows developers everywhere to access information about Marvel&#39;s cinematic universe</li>
                                <li><a href="https://marvelhub.pages.dev/" target="_blank" rel="noreferrer" className='text-emerald-300 font-medium hover:underline'>Visit site</a></li>
                            </ul>
                        </div>
                        <div className="md:w-4/5">
                            <a href="https://github.com/krcpr007/MarvelHub/blob/main/public/image2.jpg">
                                <Image src={marvelhub} className='shadow border-2 border-emerald-300 rounded-md w-full' alt="project1img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MarvelHub