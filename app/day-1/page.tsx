'use client'

import { animate, motion, useAnimate, useAnimation, useMotionValue, useSpring } from 'framer-motion'
import { startTransition } from 'react'

const App = () => {
  // const inputDivScale = useMotionValue (1)
  // const inputDivScaleSpring = useSpring (inputDivScale)
    const [scope, animate] = useAnimate ()
  const imagesVariants={
    initial:{
      opacity: 0,
      scale: 1
    },
    animate:{
      opacity: 3,
      transition:{
        duration : 5,
        staggerChildren: 2,
        staggerDirection: -1
      }
    },
    whileHover: {
        opacity: 1,
        transition:{
          duration: 1
        }
    },
    whileTap:{
      scale: 1.5,
      transition:{
        duration: 2
      }
    }
  }
 const buttonVariants = {
     initial:{
      scale: 1
      },
     hover:{
      scale: 1.2
     },
    tap:{
      scale: 0.8
     }
 }

 const eachImageVariants = {
  initial:{
    scale: 0.5
  },
  animate:{
   scale: 1
  }
 }
  return (
    <motion.div ref ={scope} className=' relative bg-[#1e41bc] flex text-white text-center justify-center ring-[20px] ring-[#dce5f9] items-center w-2/3 h-44 rounded-lg my-20 mx-10 px-5 py-3'>
      <div className='flex flex-col gap-3'>
        <span   id = 'first-span' className='text-sm transition-all duration-500 sm:text-lg xl:text-2xl font-bold'>
        Already working together?
        </span>
        <span   id = 'second-span' className='text-xs font-thin'>
        Log into your account and connect with others
        </span>
        <motion.div 
        ref={scope}
        className='flex items-center  h-10 w-96 bg-[#7d93dd] rounded-full ring-2'>
          <input
            className='bg-transparent w-full px-3 placeholder:text-gray-200 outline-none placeholder:text-xs'
            placeholder='ulzii98.n@gmail.com'
          />
          <motion.button 
          variants={buttonVariants}
          initial='initial'
          whileHover='hover'
          whileTap='tap'
          transition={{
            type: 'spring'
          }}
          onClick={()=> {
            animate('#first-span', {
              opacity: 0
            },
            {
              duration: 2
            }
          ),
          animate(
            '#second-span',
            {
              rotate: 45
            },
            {
              type: 'spring'
            }
          )
          }}
          className='size-8 flex justify-center mr-1.5 items-center bg-white rounded-full'>
            <img src='/arrow-right.svg' className='w-5' alt='fyg' />
          </motion.button>
        </motion.div>
      </div>
      <motion.div 
        variants={imagesVariants}
        initial= 'initial'
        animate= 'animate'
        whileHover='whileHover'
        whileTap='whileTap'
        className='absolute group -bottom-9 flex gap-3 *:rounded-full *:size-12 *:shadow-xl *:bg-white *:border-white *:border-[3px]'>
        <motion.img variants={eachImageVariants} src='/download.jpg' className="group-hover:border-black hover:scale-125 trasition-all" />
        <motion.img variants={eachImageVariants} src='/jasmine.jpg' className="group-hover:border-yellow-500 hover:scale-125 trasition-all" />
        <motion.img variants={eachImageVariants} src='/aurora.jpg'className="group-hover:border-green-500 hover:scale-125 trasition-all"/>
        <motion.img variants={eachImageVariants} src='/ariel.jpg' className="group-hover:border-orange-500 hover:scale-125 trasition-all" />
        <motion.img variants={eachImageVariants} src='/cinderella.jpg' className="group-hover:border-red-500 hover:scale-125 trasition-all "/>
      </motion.div>
    </motion.div>
  )
}

export default App
