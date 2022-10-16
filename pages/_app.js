import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

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
              <li><a href="/">Home</a></li>
              <li><a href="/research">Research</a></li>
              <li><a href="/data">Data</a></li>
              <li><a href="/analysis">Analysis</a></li>
              <li><a href="/more">More</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Graphs</h4>
            <ul className='ul'>
              <li><a href="#">Graph 1</a></li>
              <li><a href="#">Graph 2</a></li>
              <li><a href="#">Graph 3</a></li>
              <li><a href="#">Graph 4</a></li>
              
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Names</h4>
            <ul className='ul'>
              <li><a href="#">Sami Laayouni</a></li>
              <li><a href="#">Zakaria Moussai</a></li>
              <li><a href="#">Saad Bouroumiya</a></li>
              
              
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Contact Us</h4>
            <ul className='ul'>
              <li><a href="#">Email</a></li>
              <li><a href="#">Phone</a></li>
             
              
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyApp
