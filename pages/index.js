import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Structure from '@/components/Structure'
import { Suspense } from 'react'
import Loader from 'react-loader-spinner'


import Workspace from '@/components/Workspace'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  

    <div className='w-full min-h-screen text-center'>
      {/* <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>}>
        <Structure/>
      </Suspense> */}
      <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>}>
        <Workspace/>
      </Suspense>
    </div>
    
  )
}
