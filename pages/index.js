import Name from '../Components/Name'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../Components/About'
import Projects from '../Components/Projects'
export default function Home() {
  return (
    <>
    <Name/>
    <About/>
    <Projects/>
    </>
  )
}
