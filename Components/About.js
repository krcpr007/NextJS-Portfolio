import Image from "next/image";
import mypic from '../public/rajan.jpg'
const About = (props)=>{
    return (
    <>
    <div data-aos={props.dataAos} id="about" className="bg-slate-700 p-5 lg:px-48 lg:py-28">
        <div>
                <div className="">
                    <h2 className="text-4xl text-gray-500 font-medium"><span className="text-emerald-400" >01.</span> About Me</h2>
                    <hr className=" opacity-10" /> 
                </div>
            <div className="mt-5 lg:flex ">
                   <Image className="rounded-lg shadow-slate-300 md:w-3/5 lg:w-1/4 opacity-70 hover:opacity-100" src={mypic} width={350} height={350} alt="mypic" />
                <div className="md:text-justify text-gray-500 md:px-8 shadow-xl bg-slate-900 rounded p-3 md:py-3 mt-2 md:mt-0 md:ml-5 sm:w-4/5">
                    <p>Hello! My name is Rajan and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                       Here are a few technologies I’ve been working with recently:
                    </p>   
                <div className="md:px-4 mt-2">
                    <ul className="list-[square]  flex text-gray-500 list-inside">
                        <div className="mx-0 ">
                        <li>ReactJS</li>
                        <li>NextJS</li>
                        <li>JavaScript(ES6+)</li>
                        <li>Node.js</li>
                        </div>
                        <div className="mx-1">
                        <li>Java</li>
                        <li>OOP's</li>
                        <li>C <span className="text-emerald-400">&</span> C++</li>
                        <li>Bootstrap</li>
                        </div>
                    </ul>
                </div>
            </div>
                
               </div>
        </div> 
    </div>
    </>
    )
}
export default About;