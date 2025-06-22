'use client';

import Home from './home';
import About from './About';
import Projects from './Projects';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Landing() {
  const [d, setD] = useState<string>('home');

  return (
    <>
  
    <main className="bg-[#0D1117] min-h-screen flex flex-col justify-center items-center gap-y-[2em] font-mono">
    
    <nav className="w-full bg-[#161B22] flex justify-evenly items-center p-4 border-b-2 border-[#58A6FF] absolute top-0 z-50 text-[#C9D1D9] ">
  <button
    onClick={() => setD('home')}
    className="p-2 md:px-6 md:py-2 border border-transparent hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all duration-200 rounded-md"
  >
    Home
  </button>
  <button
    onClick={() => setD('about')}
    className="p-2 md:px-6 md:py-2 border border-transparent hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all duration-200 rounded-md"
  >
    About
  </button>
  <button
    onClick={() => setD('projects')}
    className="p-2 md:px-6 md:py-2 border border-transparent hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all duration-200 rounded-md"
  >
    Projects
  </button>
  <Link
   
    className="p-2 md:px-6 md:py-2 border border-transparent hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all duration-200 rounded-md"
    href="https://drive.google.com/file/d/1MPUj_OWtgCC6BLi1KrPXimvJt28p8yda/view?usp=sharing"
    target="_blank"
  >
    Resume
  </Link>
</nav>


      {
        d === 'home' ? <Home /> :
        d === 'about' ? <About /> :
        d === 'projects' ? <Projects /> :null
        
      }
    </main>
    
    </>
    
  );
}
