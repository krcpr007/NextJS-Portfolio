import {VscPreview} from 'react-icons/vsc'
import {VscCode} from 'react-icons/vsc'
function Button({link,text}) {
    return (
        <>
            <a href={link} target="_blank" rel="noreferrer"  className="relative mx-5 px-2 md:px-5 py-1 overflow-hidden font-medium text-gray-600 bg-gray-300 border hover:border-emerald-300 rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex"> {text[0]!=='c'? <VscCode className='m-1'/> : <VscPreview className='m-1'/>}  {text}</span>
            </a>
        </>
    )
}

export default Button