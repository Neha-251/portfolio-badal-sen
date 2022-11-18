import background from "../images/background.jpeg"
import badal from "../images/badal.jpeg"
import "./about.css";
import {useEffect, useState} from "react";

export const About = (() => {
    const {slideCount, setSlideCount} = useState(0) 

    useEffect({
        

    }[slideCount])

    return(
        <div className="about">
            <div className='carousel'>
                <div className='slide '>
                    <h1>Hi, this is slide 1</h1>
                </div>
                <div className='slide none'>
                    <h1>Hi, this is slide 2</h1>
                </div>
                <div className='slide none'>
                    <h1>Hi, this is slide 3</h1>
                </div>
                <div className='slide none'>
                    <h1>Hi, this is slide 4</h1>
                </div>
            </div>
        </div>
    )

})