import React, { useContext, useState } from "react"
import SliderStyles from "./Slider.module.css"
import Context from "../../Context/Context"
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";



const Slider = () => {

    const valueContext = useContext(Context)

    const {imgs, currentIndex, goNext, goPrev, Caorusel, Caorusel_Revers, Stop_Caorusel } = valueContext

    const [animationRigth, setAnimationRigth] = useState(false)
    const [animationLeft, setAnimationLeft] = useState(false)

    const [display_caorusel, setDisplay_caorusel] = useState(true)
    const [display_caorusel_revers, setDisplay_caorusel_revers] = useState(true)
    const [display_stop_caorusel, setDisplay_stop_caorusel] = useState(true)

    const [name_clicked_btn, setName_clicked_btn] = useState("jhgjhjgjhgjg")
    const [click, setClick] = useState("")
    const [show_text, setShow_text] = useState(false)

    // function show_clicked_btn_name () {
    //     if(click === "click_Caorusel") {
    //       setShow_text(true)
    //       setTimeout(() => {
    //         setShow_text(false)
    //       }, 1000)
    //      setName_clicked_btn("Caorusel")
    //     }else if(click === "click_Caorusel_Revers") {
    //         setShow_text(true)
    //         setTimeout(() => {
    //         setShow_text(false)
    //       }, 1000)
    //      setName_clicked_btn("Caorusel Revers")
    //     }else if(click === "click_Stop_Caorusel") {
    //         setShow_text(true)
    //         setTimeout(() => {
    //         setShow_text(false)
    //       }, 1000)
    //      setName_clicked_btn("Stop Caorusel")
    //     }
    // }

    // const click_Caorusel = () => {
    //       setClick(text => "click_Caorusel")
    //       show_clicked_btn_name()
    // }

    // const click_Caorusel_Revers = () => {
    //     setClick(text => "click_Caorusel_Revers")
    //     show_clicked_btn_name()
    // }

    // const click_Stop_Caorusel = () => {
    //     setClick(text => "click_Stop_Caorusel")
    //     show_clicked_btn_name()
    // }

    const getAnimation_rigth = () => {
        setAnimationRigth(true)

        setTimeout(() => {
            setAnimationRigth(false)
        }, 300)
    }

    const getAnimation_left = () => {
        setAnimationLeft(true)

        setTimeout(() => {
            setAnimationLeft(false)
        }, 300)
    }
    
    return (
        <div className={`${SliderStyles.container}`}>
    
                <div className={`${SliderStyles.div_img}`}>

                    {/* <div className={`${SliderStyles.info_about_clicked_button} ${show_text ? SliderStyles.show : SliderStyles.hide}`}>
                        {name_clicked_btn}</div> */}

                    {
                        imgs.map((img, index) => {
                            return (
                                <img
                                   key={img.id}
                                   src={require(`../../imgs/img${index}.jpg`)}
                                   style={{
                                      translate: `${-100 * currentIndex}%`
                                   }}
                                />
                            )
                        })
                    }
                    
                    <div className={`${SliderStyles.div_buttons}`}>
                        <div>
                            <FaAngleLeft className={`${SliderStyles.arrow_left} ${animationLeft ? SliderStyles.click_arrow_animation: ""}`} 
                            onClick={() => {
                                getAnimation_left()
                                goPrev()}} />
                        </div>
                        <div>
                            <FaAngleRight className={`${SliderStyles.arrow_right} ${animationRigth ? SliderStyles.click_arrow_animation: ""}`} 
                            onClick={() => {
                                getAnimation_rigth()
                                goNext()}} />
                        </div>
                      
                    </div>

                </div>

                <div className={`${SliderStyles.div_Caorusel_button}`}>
                    <button 
                       onClick={() => {
                        // click_Caorusel_Revers()
                        if(display_caorusel_revers){
                            Caorusel_Revers()
                            setDisplay_caorusel_revers(false)
                            setDisplay_caorusel(true)
                            setDisplay_stop_caorusel(true)
                        }
                        }}
                    >Caorusel Revers</button>

                    <button 
                       onClick={() => {
                        // click_Stop_Caorusel()
                        if(display_stop_caorusel){
                            Stop_Caorusel()
                            setDisplay_stop_caorusel(false)
                            setDisplay_caorusel(true)
                            setDisplay_caorusel_revers(true)
                        }
                        }}
                    >Stop Caorusel</button>

                    <button 
                       onClick={() => {
                        // click_Caorusel()

                        if(display_caorusel) {
                            Caorusel()
                            setDisplay_caorusel(false)
                            setDisplay_caorusel_revers(true)
                            setDisplay_stop_caorusel(true)
                        }
                        }}
                    >Caorusel</button>
                </div>
        </div>
    )
}

export default Slider