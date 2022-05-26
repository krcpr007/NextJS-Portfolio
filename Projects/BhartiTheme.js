import Image from 'next/image';
import bhartiTheme from '../public/theme.jpg'
import {FaGithubAlt} from 'react-icons/fa';
const BhartiTheme = () => {
    return (
        <>
            <div className="text-gray-400">
                <a href="https://github.com/krcpr007/BhartiTheme" rel="noreferrer" target="_blank" > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >02. </span> Bharti Theme <FaGithubAlt className='inline text-emerald-300' />  </h2> </a>
                <div className="md:flex">
                    <div className=''>
                        <ul className='list-disc list-inside'>
                            <li>This is a <span className='font-medium text-emerald-300'>VS code dark theme</span> named as Bharti theme made with help of <a href="https://www.npmjs.com/package/generator-code" target="_blank" rel="noreferrer" className='hover:underline text-emerald-300 font-medium'>Yo Code</a> - Extension and Customization Generator.</li>
                            <li>It has medium contrast a or lite contrast theme. <br /></li>
                            <li>Dark navy blue have editor color <br /></li>
                            <li> You can download it from vs code extension marketplace and you can use it. <br /></li>
                            <li>
                                <a href="https://marketplace.visualstudio.com/items?itemName=Rajankumar.bharti-theme&ssr=false" target="_blank" rel="noreferrer" className='text-emerald-300 hover:underline'> Install</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-full">
                        <a href="https://raw.githubusercontent.com/krcpr007/BhartiTheme/master/image/bharti_theme2.jpg" target="_blank" rel="noreferrer" >
                            <Image src={bhartiTheme} className='shadow-xl rounded-md  ' alt="ProjectImg" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BhartiTheme; 