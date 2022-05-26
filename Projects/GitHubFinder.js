import github from '../public/github.jpg'
import Image from 'next/image';
import { FaGithubAlt } from 'react-icons/fa';
function GitHubFinder() {
    return (
        <>
            <div className="text-gray-400">
                <a href="https://github.com/krcpr007/github-finder-ReactJS" rel="noreferrer" target="_blank" > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >03. </span>Github Finder<FaGithubAlt className='inline text-emerald-300' />  </h2> </a>
                <div className='md:flex'>
                    <div>
                        <ul className='list-disc list-inside'>
                            <li>This is <span className="text-emerald-300 font-medium">React web app</span> where we can find github users </li>
                            <li>You can see also user profiles like avatar, bio, links, and repositories and whether they are hireable or not</li>
                            <li>It made by using <a href="https://docs.github.com/en/rest" target="_blank" rel="noreferrer" className="text-emerald-300 font-medium hover:underline'">Github API</a> and<a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="text-emerald-300 font-medium hover:underline'"> ReactJS </a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en/rest" target="_blank" rel="noreferrer"> <span className='text-emerald-300 font-medium hover:underline'>Github API</span> </a> is a simple, provides whole github data.
                            </li>
                            <li>
                                <a href="https://github-finder-reactjs.pages.dev/" title='github-finder' target="_blank" rel="noreferrer" className='text-emerald-300 font-medium hover:underline'>Visit site</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-4/5">
                        <a href="https://github.com/krcpr007/github-finder-ReactJS/blob/main/public/image1.jpg">
                            <Image src={github} className='shadow-xl border-2 border-emerald-300 rounded-md w-full ' alt="ProjectImg" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GitHubFinder