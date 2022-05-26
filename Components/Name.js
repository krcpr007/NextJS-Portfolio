import { FaGithubAlt } from "react-icons/fa";
const Name = ()=> {
  return (
    <>
      <div className="bg-slate-700 p-5 lg:px-48 lg:pt-48">
          <p className="text-emerald-300 font-medium">Hii, my name is</p>
          <h1 className="text-gray-400 font-smeibold text-5xl md:text-8xl">Rajan kumar</h1>
          <h1 className="text-gray-400 font-medium text-xl md:text-7xl typing font-serif md:h-20">I build things for the web</h1>
          <p className="text-gray-500 font-medium  mt-2 md:m-6">I’m a computer science and engineering student specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused on my B.tech at Nit patna
          </p>
          <div className="mt-2 md:mt-0">
            {/*  flex border shadow-xl hover: hover:shadow-emerald-400 border-emerald-500 px-3 py-1 m-2 font-medium rounded-lg bg-emerald-400  text-slate-900  text-lg */}
            <button className=" flex btn-github"><a className="flex" href="https://github.com/krcpr007" rel="noreferrer" target='_blank'> <FaGithubAlt className="my-1 mx-1"/>My Github</a></button>
          </div>
      </div>
    </>
  );
}

export default Name;
