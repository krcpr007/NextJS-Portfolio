import Image from "next/image"
import spotify from "../public/spotify.jpg"
import { FaGithubAlt } from "react-icons/fa"
function Spotify() {
  return (
    <div>
      <div className="text-gray-400">
                <a href="https://github.com/krcpr007/my-spotify" rel="noreferrer" target="_blank" > <h2 className='text-xl my-2 font-semibold' > <span className='text-emerald-300' >02. </span> My Spotify <FaGithubAlt className='inline text-emerald-300' title="Repo Link" />  </h2> </a>
                <div className="md:flex">
                    <div className=''>
                        <ul className='list-disc list-inside'>
                            <li>This is a <span className='font-semibold text-emerald-300'>Spotify Clone</span> made with help of <a href="https://developer.spotify.com/documentation/web-api/" target="_blank" rel="noreferrer" className='hover:underline text-emerald-300 font-medium'>Spotify Web API</a>, react-spotify-web-playback and styled component with <span className="font-semibold text-emerald-300">ReactJS</span></li>
                            <li> <span className="text-emerald-300 font-semibold">Sync with Spotify</span> means you can play music on mobile or application and its starts playing on the website <br /></li>
                            <li>You need Spotify <span className="text-emerald-300">premium</span> to to play music (API limitations )<br /></li>
                            <li>User playlists listed here they can <span className="text-emerald-300 font-semibold">play any song </span> from their playlist or they can search artist, songs, or podcast <br /></li>
                            <li>
                                <a href="http://spotify-krcpr007.vercel.app/" target="_blank" rel="noreferrer" className='text-emerald-300 hover:underline'> visit</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-full">
                        <a href="" target="_blank" rel="noreferrer" >
                            <Image src={spotify} className='shadow-xl rounded-md  ' alt="ProjectImg" />
                        </a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Spotify