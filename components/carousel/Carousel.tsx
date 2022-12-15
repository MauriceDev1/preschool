import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import Mia from '../../assets/mia.jpeg'
import Cath from '../../assets/cathy.jpeg'//Constance.jpeg
import Constance from '../../assets/Constance.jpeg'

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
        <div className='sm:w-[100vw] sm:w-[21vw] rounded'>
            <Image 
                src={Mia}
                objectFit={'cover'}
                alt={'Teacher 1 image'} />
            <div className='bg-yellow-400 py-2 w-full text-center font-semibold text-xl'>
              Mia
            </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className='sm:w-[100vw] sm:w-[21vw] rounded'>
            <Image 
                src={Cath}
                objectFit={'cover'}
                alt={'Teacher 1 image'} />
            <div className='bg-yellow-400 py-2 w-full text-center font-semibold text-xl'>
              Cathy (Principal)
            </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className='sm:w-[100vw] sm:w-[21vw] rounded'>
            <Image 
                src={Constance}
                objectFit={'cover'}
                alt={'Teacher 1 image'} />
            <div className='bg-yellow-400 py-2 w-full text-center font-semibold text-xl'>
              Constance
            </div>
        </div>
      </div>
    </div>
  )
}
