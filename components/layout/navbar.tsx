'use client'

import { useEffect, useState } from "react"
import { AnimatePresence, animate, motion } from 'framer-motion'
import { exit } from "process"
import { init } from "next/dist/compiled/webpack/webpack"
import { initialize } from "next/dist/server/lib/render-server"

const texts = [
    'MStars Hub',
    'Bootcamp #1',
    'Framer Motion',
    'Tailwind CSS'
]

const menuTexts = ['Home', 'Services', 'About us']

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeTextIndex, setActiveTextIndex] = useState(0)

    useEffect(() => {
        const textInterval = setInterval(() => {
            const NewIndex = (activeTextIndex + 1) % texts.length

            setActiveTextIndex(NewIndex)
        }, 5000)
        return () => clearInterval(textInterval)
    }, [activeTextIndex])

    const textParentVariants = {
        initial: {},
        animate: {},
        exit: {}
    }
    const textChildrenVariants = {
        initial: {
            y: 30
        },
        animate: {
            y: 0
        },
        exit: {
            y: -20
        },
    }

    const splitParentVariants = {
        initial: {
            x: 0
        },
        hover: {
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
        <div className="fixed top-0 flex w-screen h-20 z-40 px-10 justify-between items-center bg-transparent ">
            <div className="flex relative z-50">
                <AnimatePresence>
                    <motion.div
                        key={'parent-' + activeTextIndex}
                        variants={textParentVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        className="flex whitespace-nowrap font-bold text-bidnar text-lg overflow-hidden absolute left-0"
                        transition={{
                            duration: 0.5,
                            staggerChildren: 0.1,
                            type: 'spring'
                        }}
                    >
                        {texts[activeTextIndex].split('').map((eachAlphabet, index) =>
                            <motion.span
                                key={'children-' + activeTextIndex + eachAlphabet + index}
                                variants={textChildrenVariants}
                                className="flex"
                            >
                                {eachAlphabet === ' ' ? (
                                    <span className='w-1.5 inline-flex'></span>
                                ) : (
                                    eachAlphabet

                                )}
                            </motion.span>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
            <button
                className="flex flex-col gap-2 size-8 z-50"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <motion.img
                    src='/bar.svg'
                    className="w-10"
                    initial={{ rotate: 0, y: 0 }}
                    animate={{
                        rotate: isMenuOpen ? -45 : 0,
                        y: isMenuOpen ? 7.5 : 0
                    }}
                />
                <motion.img
                    src='/bar.svg'
                    className="w-10"
                    initial={{ rotate: 0, y: 0 }}
                    animate={{
                        rotate: isMenuOpen ? 45 : 0,
                        y: isMenuOpen ? -7.5 : 0
                    }}
                />
            </button>
            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            key={'menu'}
                            className="absolute inset-0 w-screen h-screen text-7xl gap-20  *:border-b-2 *:border-black *:pb-5 bg-menu bg-white text-black z-40 flex flex-col p-20 justify-center"
                            initial={{ y: -1000 }}
                            animate={{
                                y: 0
                            }}
                            exit={{
                                y: 1000
                            }}
                            transition={{
                                duration: 1.5,
                                type: 'spring'
                            }}
                        >
                            {menuTexts.map((eachMenuText, index) => (
                                <motion.div
                                    key={index}
                                    className='flex'
                                    variants={splitParentVariants}
                                    initial='initial'
                                    whileHover='hover'
                                >
                                    {eachMenuText.split('').map((eachAlpahabet: any) => (
                                        <motion.span key={eachMenuText} variants={splitChildrenVariants}>
                                            {eachAlpahabet}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            ))}
                        </motion.div>)}
            </AnimatePresence>
        </div>
    )
}
export default Navbar