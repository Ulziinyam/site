'use client'

import { Reorder, motion, useMotionValue, useSpring, } from 'framer-motion'
import { useEffect, useState } from 'react'

const Day4 = () => {

    const [items, setItems] = useState ([
        'Mstars', 
        'Academy', 
        'Selbe', 
        'Ddish', 
        'Unitel'
    ])

    return(
        <motion.div className='w-screen min-h-screen flex flex-col items-center justify-center gap-10'>      
            {items.map((item) =>(
            <EachBox item={item} key={item}/>
            ))}
        </motion.div>
    )
}

const EachBox = ({item}: {item: any}) => {
    const x = useMotionValue (0)
    const y = useMotionValue (0)
    const xSpring = useSpring (x)
    const ySpring = useSpring (y)

    const handleMouseMove = (event: any) => {
        const boxEvent = event.currentTarget!.getBoundingClientRect()

        const boxWidth = boxEvent.width
        const boxHeight = boxEvent.height 

        const mouseY =  event.clientY
        const mouseX =  event.clientX

        const mouseYOnBox = mouseY - boxEvent.top
        const mouseXOnBox = mouseX - boxEvent.left
        
        const ifMouseIsAtTop = mouseYOnBox < boxHeight / 2
        const ifMouseIsAtBottom = mouseYOnBox > boxHeight / 2
        const ifMouseIsAtLeft = mouseXOnBox < boxWidth / 2
        const ifMouseIsAtRight = mouseXOnBox > boxWidth / 2

        if (ifMouseIsAtTop) {
            y.set(5)
        }
        if (ifMouseIsAtBottom) {
            y.set(-5)
        }
        if (ifMouseIsAtLeft) {
            x.set(5)
        }
        if (ifMouseIsAtRight) {
            x.set(-5)
        }

      
      }
      const splitParentVariants = {
        initial:{
            x: 0
        },
        hover:{
            x: 50,
            transition: {
                type: 'spring',
                staggerChildren: 0.1
            }
        }
      }
      const splitChildrenVariants = {
        initial: {
            x: 0
        },
        hover: {
            x: -50
        }
      }

    return (
        <motion.div key={item} className='h-96 text-5xl border-2 border-blue-500 ' 
            style={{
                x: xSpring,
                y: ySpring
            }}
            onMouseMove={handleMouseMove}
        >
            <motion.div 
            className='flex'
            variants={splitParentVariants}
            initial='initial'
            whileHover='hover'
            >
                {item.split('').map ((eachAlpahabet:any) =>(
                <motion.span key={item} variants={splitChildrenVariants}> 
                {eachAlpahabet} 
                </motion.span>
            ))}
            </motion.div>
        </motion.div>
    )
}

export default Day4

