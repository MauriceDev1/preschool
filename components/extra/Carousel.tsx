import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Carousel() {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
          slideChanged() {
            console.log('slide changed')
          },
        },
        [
          // add plugins here
        ]
      )

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide bg-red-100">1</div>
      <div className="keen-slider__slide bg-blue-100">2</div>
      <div className="keen-slider__slide bg-green-100">3</div>
    </div>
  )
}
