import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'




import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Education from '@/components/Education'
import Experiences from '@/components/Experiences'
import Awards from '@/components/Awards'
import Projects from '@/components/Projects'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyrus Tan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <body className="template-color-1 spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="150">
    
      <Header/>
   
    <main className="main-page-wrapper">
      
     <Profile/>
     <Education/>
     <Experiences/>
    <Awards/>
     <Projects/>
     {/* <Footer/> */}


    
    </main>
    
    
    </body>
  {/*   <script src="assets/js/vendor/jquery.js"></script>
        <script src="assets/js/vendor/modernizer.min.js"></script>
        <script src="assets/js/vendor/feather.min.js"></script>
        <script src="assets/js/vendor/slick.min.js"></script>
        <script src="assets/js/vendor/bootstrap.js"></script>
        <script src="assets/js/vendor/text-type.js"></script>
        {/* <script src="assets/js/vendor/wow.js"></script> 
        <script src="assets/js/vendor/aos.js"></script>
        <script src="assets/js/vendor/particles.js"></script>

         <script src="assets/js/main.js"></script> */}
    </>
  )
}
