import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Head from 'next/head'
function Layout({children}) {
    return (
      <>
       <Head>
          <title>Rajan Kumar</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Navbar/>
      {children}
      <Footer/>
      </>
    );
  }
export default Layout; 