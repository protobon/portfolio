import { React, useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";


export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className='fixed bottom-2 left-2'>
            <button type='button' onClick={scrollToTop} className={`${isVisible ? 'opacity-100': 'opacity-0'} inline-flex items-center p-4 m-4 bg-black/50 rounded-full shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300`}>
                <FaArrowUp size={25} color='white'/>
            </button>
        </div>
    )
}
