import { FaGithubAlt } from 'react-icons/fa';
const Project=(props)=>{
    return(
        <>
        <div data-aos={props.dataAos} id='projects' data-aos-once="true" className="bg-slate-700 p-5 lg:px-48 lg:py-28">
            <div className="">
                <h2 className="text-2xl md:text-4xl text-gray-400 font-medium"><span className='text-emerald-300'>02.</span> Some Things I’ve Built</h2>
                <hr className='my-1 opacity-10' />

                <div className="text-gray-400">
                        <a href="https://github.com/krcpr007/BhartiTheme" rel="noreferrer" target="_blank" > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >01. </span> Bharti Theme <FaGithubAlt className='inline text-emerald-300' />  </h2> </a>
                    <div className="md:flex">
                        <div className=''>
                        <ul className='list-disc list-inside'>
                            <li>This is a <span className='font-medium'>VS code dark theme</span> named Bharti theme made with help of <a href="https://www.npmjs.com/package/generator-code" target="_blank" rel="noreferrer" className='hover:underline text-emerald-300 font-medium'>Yo Code</a> - Extension and Customization Generator. <br /></li>
                            <li>It has medium contrast a or lite contrast theme. <br /></li>
                            <li>Dark navy blue have editor color <br /></li>
                            <li> You can download it from vs code extension marketplace and you can use it. <br /></li>
                            <li><a href="https://marketplace.visualstudio.com/items?itemName=Rajankumar.bharti-theme&ssr=false" target="_blank" rel="noreferrer" className='text-emerald-300 hover:underline'> Install</a></li>
                        </ul>
                        </div>
                        <div className="">
                            <a href="https://raw.githubusercontent.com/krcpr007/BhartiTheme/master/image/bharti_theme2.jpg" target="_blank" rel="noreferrer" >
                                <img src="https://raw.githubusercontent.com/krcpr007/BhartiTheme/master/image/bharti_theme2.jpg" className='shadow border-2 border-emerald-300 rounded-md w-full ' alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="text-gray-400">
                    <a href="https://github.com/krcpr007/NEWSMAiNIA" rel="noreferrer" target="_blank" > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >02. </span>NEWS MAiNIA<FaGithubAlt className='inline text-emerald-300' />  </h2> </a>
                    <div className='md:flex'>

                        <div>
                            <ul className='list-disc list-inside'>
                                <li>This is React web app where we can read lots of news.  </li>
                                <li>Category-wise news (ex-science,business,sports)</li>
                                <li>It made by using <a href="https://newsapi.org/" target="_blank" rel="noreferrer">NEWS24 API</a> and<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> Reactjs </a> </li>
                                <li>
                                <span className='text-emerald-300 font-medium'>News API</span> is a simple, easy-to-use REST API that returns JSON search results for current and historic news articles published by over 80,000 worldwide sources.
                                </li>
                            </ul>
                         </div>
                            <div className="">
                                <a href="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg">
                                    <img src="https://raw.githubusercontent.com/krcpr007/NEWSMAiNIA/main/public/images/Readme.jpg" className='shadow border-2 border-emerald-300 rounded-md w-full ' alt="projectimg" />
                                </a>
                    </div>
                    </div>
                    </div>
                </div>
        <div className="project1">
                <div className="project1-abt">
                    <a href="https://github.com/krcpr007/MarvelHub" rel="noreferrer" target="_blank" style={{ color: "#CCD6F6" }} > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >03. </span>Marvel HuB<FaGithubAlt className='text-emerald-300 inline' />  </h2> </a>
                    <div className='md:flex'>
                    <div>
                        <ul className='list-disc list-inside'> 
                        <li>This is <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> React </a> web app where we can search about marvel superheroes using <a href="https://developer.marvel.com/" target="_blank" rel="noreferrer">Marvel API</a> </li>
                        <li>The <span className='font-medium text-emerald-300'>Marvel Comics API</span> allows developers everywhere to access information about Marvel's vast library of comics—from what's coming up, to 70 years ago.</li>
                        <li><a href="https://marvelhub.pages.dev/" target="_blank" rel="noreferrer" className='text-emerald-300 font-medium'>Vist site</a></li>
                        </ul>
                    </div>
                        <div className="project-img">
                            <img src="https://source.unsplash.com/1600x900/daily?marvel" className='shadow border-2 border-emerald-300 rounded-md w-full'  alt="project1img" />
                            {/* <img src="https://raw.githubusercontent.com/krcpr007/MarvelHub/blob/main/public/image2.jpg" alt="" /> */}
                        </div>
                    </div>
                </div>
         </div>

            </div>
        </div>
        </>
    )
}
export default Project; 