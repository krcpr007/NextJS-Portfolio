import Image from 'next/image';
import newsmainia from '../public/newsmania.jpg'
import {FaGithubAlt} from 'react-icons/fa';
function NewsMainia() {
    return (
        <>
            <div className="">
                <div className="text-gray-400">
                    <a href="https://github.com/krcpr007/NEWSMAiNIA" rel="noreferrer" target="_blank" > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >05. </span>NEWS MAiNIA<FaGithubAlt className='inline text-emerald-300' />  </h2> </a>
                    <div className='md:flex'>

                        <div>
                            <ul className='list-disc list-inside'>
                                <li>This is React web app where we can read lots of news.  </li>
                                <li>Category-wise news (ex-science,business,sports)</li>
                                <li>It made by using <a href="https://newsapi.org/" target="_blank" rel="noreferrer">NEWS24 API</a> and<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> Reactjs </a> </li>
                                <li>
                                    <span className='text-emerald-300 font-medium'>News API</span> is a simple, easy-to-use REST API <br /> that returns JSON search results for current and historic news articles published by over 80,000 worldwide sources.
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-4/5">
                            <a href="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg">
                                <Image src={newsmainia} className='shadow border-2 border-emerald-300 rounded-md w-full ' alt="projectimg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsMainia