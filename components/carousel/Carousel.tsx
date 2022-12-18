import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import Mia from '../../assets/mia.jpeg'
import Cath from '../../assets/cathy.jpeg'
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
    },
    [
      (slider) => {
        let timeout: any 
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ])
  
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <div className='sm:w-[21vw] sm:h-[45vh] rounded'>
            <Image 
                src={Mia}
                objectFit={'contain'}
                alt={'Teacher 1 image'} />
            <div className='bg-red-600 py-2 -mt-2 w-full text-center font-semibold text-xl text-white'>
              Mia
            </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className='sm:w-[21vw] sm:h-[45vh] rounded'>
            <Image 
                src={Cath}
                objectFit={'contain'}
                alt={'Teacher 1 image'} />
            <div className='bg-red-600 py-2 -mt-2 w-full text-center font-semibold text-xl text-white'>
              Cathy (Principal)
            </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className='sm:w-[21vw] h-[45vh] rounded'>
            <Image 
                src={Constance}
                objectFit={'contain'}
                alt={'Teacher 1 image'} />
            <div className='bg-red-600 py-2 -mt-2 w-full text-center font-semibold text-xl text-white'>
              Constance
            </div>
        </div>
      </div>
    </div>
  )
}
