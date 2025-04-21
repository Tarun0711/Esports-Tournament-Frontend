import React from 'react'
import TextSlider from 'text-slider'
const slideText = ["With compy edge to make  your Game experience Better",
"Touranment khelna h ! aaa jaao khila denge",
"Tournament banana h ! aa jaao banva denge ",
"1 V 1 Matches are coming soon"
]
function TextSliderMain(){
    return(
        <div>
        <TextSlider 
	    frequency={500}
        transitionDuration={700}
	    slideText={slideText}
	    />
        </div>
	    
    )
}

export default TextSliderMain

