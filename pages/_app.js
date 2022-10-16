import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
      <title>Math Project</title>
    </Head>
    <Navbar/>
    
    <Component {...pageProps} />
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col'>
            <h4>Math Project</h4>
            <ul className='ul'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/data">Data</Link></li>
              <li><Link href="/analysis">Analysis</Link></li>
              <li><Link href="/more">More</Link></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Graphs</h4>
            <ul className='ul'>
              <li><Link href="#">Graph 1</Link></li>
              <li><Link href="#">Graph 2</Link></li>
              <li><Link href="#">Graph 3</Link></li>
              <li><Link href="#">Graph 4</Link></li>
              
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Names</h4>
            <ul className='ul'>
              <li><Link href="#">Sami Laayouni</Link></li>
              <li><Link href="#">Zakaria Moussai</Link></li>
              <li><Link href="#">Saad Bouroumiya</Link></li>
              
              
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Contact Us</h4>
            <ul className='ul'>
              <li><Link href="#">Email</Link></li>
              <li><Link href="#">Phone</Link></li>
             
              
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyApp
