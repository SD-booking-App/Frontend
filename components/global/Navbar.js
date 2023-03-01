import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import{useRouter} from 'next/router'
const Navbar = () => {
    return (
      <>
      <header className='hidden lg:inline-block sticky top-0 z-50 w-full bg-[color:var(--navbar)]'>
        <div className='mx-auto pb-2 pt-4 w-[90vw] flex flex-row align-middle justify-between'>
          <div className='flex flex-row align-middle justify-start my-auto'>
            <Link className='my-auto' href={"/"}><Image src={"/assets/Logo1.png"} height={100} width={100} alt="KuickPlan" ></Image></Link>
            <Link className='my-auto' href={"/about-us"}><p className='my-auto mx-8 !ml-16 text-lg font-semibold text-[color:var(--titleColor)] cursor-pointer'>About</p></Link>
            <Link className='my-auto' href={"/vendor-services"}><p className='my-auto mx-8 text-lg font-semibold text-[color:var(--titleColor)] cursor-pointer'>Services</p></Link>
            <Link className='my-auto' href={"/contact-us"}><p className='my-auto mx-8 text-lg font-semibold text-[color:var(--titleColor)] cursor-pointer'>Contact</p></Link>
          </div>
        </div>
        </header>
    </>

    )
  }
  
  export default Navbar