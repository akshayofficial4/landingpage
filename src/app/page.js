"use client"
import Image from "next/image";
import { motion,easeInOut } from "framer-motion";
import {Pacifico} from 'next/font/google';

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: '400',
})

export default function Home() {

  const bgAnimation = {
    hidden:{
      clipPath:' polygon( 21% 27%, 77% 26%, 77% 77%, 21% 77%, ) '
    },
    show:{
      clipPath:' polygon( 0 0, 100% 0, 100% 100%, 0 100% ) ',
      transition: {
          ease: 'easeInOut',
          duration:0.8,
          delay:1,
      }
    }
  }

  const textAnimate1 = {
    hidden: {
      y:"100%",
      opacity: 0,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        ease:'easeInOut',
        duration:0.8,
        staggerChildren:0.4,
        delayChildren:1,
      }
    }
  }
  const textAnimate2 = {
    hidden: {
      x:0
    },
    show:(i) => ({
      x:1,
      transition:{
        ease:'easeInOut',
        duration:0.8,
        staggerChildren:0.4,
        delayChildren:1,
      }
    })
  }
  const imageAnimate = {
    hidden:{},
    show:{
      transition: {
        staggerChildren:0.6,
        delayChildren:3.6,
        ease:"easeInOut",
      }
    }
  }

  const imageAnimateChild = {
    hidden:{
      x:100,
      opacity:0,
    },
    show:{
      x:0,
      opacity:1,
      transition:{
        ease:'easeInOut',

      }
    }
  }

  const navAnimate = {
    hidden:{
      y:'-110%',
    },
    show:{
      y:0,
      transition:{
        type:'spring',
        stiffness:60,
        delay:2,
      }
    }
  }

  const textParagraph = {
    hidden:{
      y:'-100%',
      opacity:0,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        type:'spring',
        stiffness:60,
        delay:2.8,
      }
    }
  }

  return (
    <main className="h-screen px-4 overflow-hidden">
      <motion.div className="h-screen absolute inset-0 w-screen z-0" varients={bgAnimation} initial = "hidden" animate="show" >
        <Image src="/bg.webp" alt="background" fill priority={true} sizes="( max-width:768px ) 33vw, (max-width:1024px) 50vw, 100vw" className="object-cover brightness-50" />
      </motion.div>

      <motion.nav className="flex justify-between items-center relative z-10 py-2" variants={navAnimate} initial="hidden" animate="show" >
        <div className={`text-xl font-bold text-yellow-200 underline ${pacifico.className}`}>
          Build Painting
        </div>
        <ul className="flex w-[300px] justify-between items-center ">
          <li className="font-semibold text-[#eaeaea] ">Home</li>
          <li className="font-semibold text-[#eaeaea] ">Services</li>
          <li className="font-semibold text-[#eaeaea] ">Paint</li>
        </ul>
      </motion.nav>

      <div className="relative top-[120px]">

        <motion.div className = "relative left-[25%]" variants={textAnimate1} initial="hidden" animate="show" >
          <motion.h1 className={ `text-9xl text-[#eaeaea] font-bold tracking-tighter ${pacifico.className} ` } variants={textAnimate2} initial="hidden" animate="show" custom={-150} >Painting</motion.h1>
        </motion.div>

        <motion.p className="absolute right-32 top-12 leading-2 w-[600px] text-justify text-xs text-semibold text-[#eaeaea]"> <span className="text-yellow-200" variants={textParagraph} initial="hidden" animate="show">The art of painting is a highly esteemed and reverted form od artistic expression Its a discipline that requires great skill, technique and creativity.</span> Paintings can be created throughout history serving as a means of communication, documentation, and artistic enjoyment</motion.p>

        <motion.div className = "relative left-[25%]" variants={textAnimate1} initial="hidden" animate="show" >
          <motion.h1 className={ `text-9xl text-[#eaeaea] font-bold tracking-tighter ${pacifico.className} ` } variants={textAnimate2} initial="hidden" animate="show" custom={100} >EXPERIENCE</motion.h1>
        </motion.div>
      </div>

        <motion.div className="flex gap-4 absolute bottom-4 " variants={imageAnimate} initial="hidden" animate="show" >
        
          <motion.div className="relative w-[300px] h-[200px] " variants={imageAnimateChild} initial="hidden" animate="show" >
            <Image src='/img-1.webp' fill sizes="( max-width:768px ) 33vw, (max-width:1024px) 50vw, 100vw" className="object-cover rounded-sm saturate-150" />
          </motion.div>

          <motion.div className="relative w-[300px] h-[200px]" variants={imageAnimateChild} initial="hidden" animate="show" >
            <Image src='/img-2.webp' fill sizes="( max-width:768px ) 33vw, (max-width:1024px) 50vw, 100vw" className="object-cover rounded-sm saturate-150" />
          </motion.div>

          <motion.div className="relative w-[300px] h-[200px]" variants={imageAnimateChild} initial="hidden" animate="show" >
            <Image src='/img-3.webp' fill sizes="( max-width:768px ) 33vw, (max-width:1024px) 50vw, 100vw" className="object-cover rounded-sm saturate-150" />
          </motion.div>

        </motion.div>

    </main>
  );
}
