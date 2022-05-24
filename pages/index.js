import Name from '../Components/Name'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Script from 'next/script'
export default function Home() {
  return (
    <>
    {/* Navbar imported from layout */}
    <Script src='/script.js'></Script>
      <Name/>
      <About/>
      <Projects/>
    {/* Footer is also imported from layout */}
    </>
  )
}
