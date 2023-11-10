import React, { useEffect, useRef, useState } from "react";

import SliderContainer from "../SliderContainer/SliderContainer";

import Context from "../../Context/Context";

import getRandomIndex from "../../getRandomIndex/getRandomIndex";

const SliderContext = () => {

    const [imgs, setImgs_url] = useState([
        {
            id: 0,
            url: "0"
        },

        {
            id: 1,
            url: "1"
        },

        {
            id: 2,
            url: "2"
        },

        {
            id: 3,
            url: "3"
        },

        {
            id: 4,
            url: "4"
        }
    ])

    const [currentIndex, setCurrentIndex] = useState(getRandomIndex(imgs.length))

    const [display_caorusel, setDisplay_caorusel] = useState(true)
    const [display_caorusel_revers, setDisplay_caorusel_revers] = useState(true)
    const [display_stop_caorusel, setDisplay_stop_caorusel] = useState(true)

    const idRefCaorusel = useRef()
    const idRefCaoruselRevers = useRef()

    const counterRef = useRef(0)

    const goNext = () => {

        clearInterval(idRefCaorusel.current)
        clearInterval(idRefCaoruselRevers.current)
        counterRef.current = 0
        
        console.log(currentIndex)
        if(currentIndex === imgs.length - 1) {
            setCurrentIndex(0)
        }else {
            setCurrentIndex(currentIndex + 1)
        }

    }

    const goPrev = () => {

        clearInterval(idRefCaorusel.current)
        clearInterval(idRefCaoruselRevers.current)
        counterRef.current = 0
        
        if(currentIndex === 0) {
            setCurrentIndex(imgs.length - 1)
        }else {
            setCurrentIndex(currentIndex - 1)
        }
        
    }


    const setActiveImg = (index) => {
        setCurrentIndex(index)
    }
    
    const Caorusel = () => {

        clearInterval(idRefCaoruselRevers.current)
        counterRef.current = 0
        idRefCaorusel.current = setInterval(() => {

                if(counterRef.current === imgs.length - 1){
                    clearInterval(idRefCaorusel.current)
                    counterRef.current = 0
                    Caorusel()
                }
                
                setCurrentIndex(index => {
                    if(index === imgs.length - 1) {
                        return 0
                    }else {
                        return index + 1
                    }    
                })

                counterRef.current++
    
            }, 3000)

        }

    const Caorusel_Revers = () => {
 
        clearInterval(idRefCaorusel.current)
        counterRef.current = 0
        
        idRefCaoruselRevers.current = setInterval(() => {

            if(counterRef.current === imgs.length - 1){
                clearInterval(idRefCaoruselRevers.current)
                counterRef.current = 0
                Caorusel_Revers()
            }
            
            setCurrentIndex(index => {
                if(index === 0) {
                    return imgs.length - 1
                }else {
                    return index - 1
                }    
            })

            counterRef.current++

        }, 3000)
    }

    const Stop_Caorusel = () => {
        clearInterval(idRefCaorusel.current)
        clearInterval(idRefCaoruselRevers.current)
        counterRef.current = 0
    }

    const value = {
        imgs: imgs,
        currentIndex: currentIndex,
        goNext: goNext,
        goPrev: goPrev,
        setActiveImg: setActiveImg,
        Caorusel: Caorusel,
        Caorusel_Revers: Caorusel_Revers,
        Stop_Caorusel: Stop_Caorusel,
    } 

    return (
        <Context.Provider value={value}>
            <SliderContainer />
        </Context.Provider>    
    )
}

export default SliderContext