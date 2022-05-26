import { useState } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs'
import { BsArrowUpCircle } from 'react-icons/bs'
import ProjectCard from './ProjectCard';
import StudentHub from '../Projectjs/StudentHub';
import BhartiTheme from '../Projectjs/BhartiTheme';
import GitHubFinder from '../Projectjs/GitHubFinder';
import MarvelHub from '../Projectjs/MarvelHub';
import NewsMainia from '../Projectjs/NewsMainia';
const Project = () => {
    const [ShowProjects, setShowProjects] = useState(false);
    const handleShowMoreProjects = () => {
        setShowProjects(true);
    }
    const handleShowLessProjects = () => {
        setShowProjects(false);
    }
    return (
        <>
            <div id='projects' data-aos-once="true" className="bg-slate-700 p-5 lg:px-48 lg:py-28">
                <div className="">
                    <h2 className="text-2xl md:text-4xl text-gray-400 font-medium"><span className='text-emerald-300'>02.</span> Some Things I’ve Built</h2>
                    <hr className='my-1 opacity-10' />
                    <StudentHub />

                    <BhartiTheme />

                    <GitHubFinder />

                    <MarvelHub />

                    <NewsMainia />
                </div>
                <div className='p-2 justify-center flex'>
                    {
                        ShowProjects ? (
                            <button className='rounded-md border-2 border-emerald-300 p-2 text-emerald-300 font-extralight' onClick={handleShowLessProjects}>Show less <BsArrowUpCircle className='inline' /> </button>
                        ) : (
                            <button className='rounded-md  border-2 border-emerald-300 p-2 text-emerald-300 font-extralight ' onClick={handleShowMoreProjects}>Show more <BsArrowDownCircle className='inline animate-bounce' /> </button>
                        )
                    }
                </div>
                {
                    ShowProjects ? (
                        <div>
                            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
                                <ProjectCard ProjectName='InQuera' repoLink="https://github.com/krcpr007/hackNITP_INQUERA" details="Inquera mission is to share and grow the world’s knowledge. the people who have the knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world." deployedLink="/" techStack1='Tailwind CSS' techStack2='MERN' techStack3="HackNITP4.0" />

                                <ProjectCard ProjectName='Nasa Pictures' repoLink="https://github.com/krcpr007/ReactJs-Nasa-App" details='Nasa pictures is a website based on Reactjs and bootstrap using NASA API. Here you can see the astronomy picture of the day and details of that picture, mars pictures which are taken by NASA satellites.' deployedLink="https://nasa.pages.dev/apod" techStack2='Bootstrap' techStack1='ReactJS' techStack3="NASA API" />
                                <ProjectCard ProjectName='Bus Reservation' repoLink="https://github.com/krcpr007/busReservation" details='Its based on Data structure and algorithm written in c  lang. where users can come to book their particular bus and particular seat in that bus. They can see the bus list and which seats are empty or not on the bus. If the user wants to cancel the ticket that can also be done by giving the reservation number which is generated at the time of booking.' deployedLink="/" techStack1='C language' techStack2='DSA' techStack3='BST' />
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}
export default Project; 