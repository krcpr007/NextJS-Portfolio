import { AiTwotoneFolderOpen } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
const ProjectCard = () => {
    return (
        <>
            <div className="p-5 my-2 bg-slate-900 rounded-lg shadow-2xl hover:text-emerald-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="mb-5">
                    <div className="flex">
                        <AiTwotoneFolderOpen className='text-4xl text-emerald-300'/>
                        <div className="">
                            <div className="flex place-content-end "> 
                                <FiGithub  className='text-emerald-300'/>
                                <FiExternalLink className='text-emerald-300' />
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-emerald-300">
                    1. Product
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed nobis iste voluptatum necessitatibus, cum fugiat voluptas minima provident eveniet quidem blanditiis tempore repudiandae vero! A voluptas nemo dolores earum!
                </p>
            </div>
        </>
    )
}
export default ProjectCard; 