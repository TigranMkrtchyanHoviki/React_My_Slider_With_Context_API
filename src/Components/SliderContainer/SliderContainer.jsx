import React from "react"

import Slider from "../Slider/Slider"
import TimeLine from "../TimeLine/TimeLine"

import SliderContainerStyle from "./SliderContainer.module.css"

const SliderContainer = ({length_imgs}) => {
    return (
        <div className={`${SliderContainerStyle.container}`}>
          <Slider />
          <TimeLine />
        </div>
    )
}

export default SliderContainer