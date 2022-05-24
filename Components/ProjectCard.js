import { AiTwotoneFolderOpen } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
const ProjectCard = ({ ProjectName, repoLink, details, deployedLink, techStack1, techStack2, techStack3 }) => {
    return (
        <>
            <div className="p-5 my-2 bg-slate-900 rounded-lg shadow-2xl border border-emerald-200 hover:border-emerald-300 hover:text-emerald-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="mb-5">
                    <div className="flex">
                        <AiTwotoneFolderOpen className='text-4xl text-emerald-300' />
                        <div className="">
                            <div className="flex pl-40">
                                <a href={repoLink} rel='noreferrer' target='_blank'>
                                    <FiGithub className='m-1 text-emerald-100 hover:text-emerald-300' />
                                </a>
                                <a href={deployedLink} rel='noreferrer' target='_blank'>
                                    <FiExternalLink className='m-1 text-emerald-100' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-emerald-300">
                    {ProjectName}
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                    {details}
                </p>
                <div>
                    <span className='text-emerald-300 text-xs font-medium bg-slate-700 rounded-md py-0.5 px-1 mr-1'>{techStack1}</span>
                    <span className='text-emerald-300 text-xs font-medium bg-slate-700 rounded-md py-0.5 px-1 m-1'>{techStack2}</span>
                    {techStack3 ? (<span className='text-emerald-300 text-xs font-medium bg-slate-700 rounded-md py-0.5 px-1 m-1'>{techStack3}</span>) : null}
                </div>
            </div>
        </>
    )
}
export default ProjectCard; 