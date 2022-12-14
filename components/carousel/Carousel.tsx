import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import Gar from '../../assets/garfieldOuting.jpg'

export default function Carousel() {
    const [sliderRef] = useKeenSlider({
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
      loop: true,
    })
  
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <div className='w-[100vw] sm:w-[23vw] h-[40vh] sm:h-[30vh] bg-red-100 rounded'>
            <Image 
                src={Gar}
                objectFit={'cover'}
                alt={'Teacher 1 image'} />
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className='w-[100vw] sm:w-[23vw] h-[40vh] sm:h-[30vh] bg-red-100 rounded'>
            <Image 
                src={Gar}
                objectFit={'cover'}
                alt={'Teacher 1 image'} />
            
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className='w-[100vw] sm:w-[23vw] h-[40vh] sm:h-[30vh] bg-red-100 rounded'>
            <Image 
                src={Gar}
                objectFit={'cover'}
                alt={'Teacher 1 image'} />
            
        </div>
      </div>
    </div>
  )
}
