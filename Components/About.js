const About = (props)=>{
    return (
    <>
        <div data-aos={props.dataAos} className="bg-slate-900 p-5 lg:px-48 lg:py-28">
            <div>
                <div className="">
                    <h2 className="text-4xl text-gray-500 font-medium"><span className="text-emerald-400" >01.</span> About Me</h2>
                </div>
               <div className=" mt-5 lg:flex ">
                   <img className="rounded-lg shadow-slate-300 w-4/5 lg:w-1/4 hover:border-2 hover:border-emerald-400 hover:shadow-emerald-300" src="rajan.jpg" alt="mypic" />
                <div className="md:text-justify text-gray-300 mt-2 md:px-8">
                    <p>Hello! My name is Rajan and I enjoy creating things that live on <br/>the internet. My interest in web development started back in 2020 <br/> when I decided to try editing custom Tumblr themes — turns out  <br/>hacking together a custom reblog button taught me a lot  <br/>about HTML & CSS!<br/>
                       Here are a few technologies I’ve been working with recently:
                    </p>   
                    <div className="md:px-4 mt-2">
                    <ul className="list-[square]  flex text-gray-300 list-inside">
                        <div className="mx-0">
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