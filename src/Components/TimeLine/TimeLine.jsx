import React, { useContext, useState } from "react"

import TimeLineStyles from "./TimeLine.module.css"

import Context from "../../Context/Context"

const TimeLine = () => {

    const valueContext = useContext(Context)

    const {imgs, currentIndex, setActiveImg, Stop_Caorusel} = valueContext

    const Activ_img = (index) => {
        setActiveImg(index)
    }

    return (
        <div className={`${TimeLineStyles.container}`}>
            {
               imgs.map((img, index) => {
                   return (
                       
                       <img
                          onClick={() => { 
                            Activ_img(index)
                            Stop_Caorusel()
                        }}
                          className={`${TimeLineStyles.img} ${currentIndex === index? TimeLineStyles.current_img: ""}`}
                          key={img.id} 
                          src={require(`../../imgs/img${img.url}.jpg`)}
                          alt=""
                        />
                        
                          
                   )
                })
            }
        </div>
    )
}

export default TimeLine