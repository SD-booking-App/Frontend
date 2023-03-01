import Navbar from '@/components/global/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
// import '../styles/globals.css';
import 'react-resizable/css/styles.css';
import 'tailwindcss/tailwind.css';
export default function App({ Component, pageProps }) {
  return (
    <div>
    {/* <Navbar/> */}
    <Component {...pageProps} />
    <Head>
        <title>Smiths Desk Booking</title>
        <link rel="manifest" href="/manifest.json" />
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    
  </div>
  )
}
