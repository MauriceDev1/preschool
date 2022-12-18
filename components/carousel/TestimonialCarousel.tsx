import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = [
    {
        id:1,
        testimonial: ' “Amazing teachers and best kind of nurturing for kids. Truly a hidden gem. My daughter still asks to go visit the school even though she’s at big school now”',
        name:'- Chantal Gideon',
    },
    {
        id:2,
        testimonial: '“Amazing teachers. Both my kids went to Garfield and absolutely loved it. The most reasonable price in the area.”',
        name:'- Sanrisha Sharma',
    },
    {
        id:3,
        testimonial: '“My son was part of Garfield group 3-6yrs old, he was nurtured, encouraged, loved and safe.”',
        name:'- Melloney Brown-De Vos',
    },
    {
        id:4,
        testimonial: '“I could not be happier with Garfield pre-primary. It was a struggle finding an educare/ pre-primary within the rondebosch, Rosebank, Claremont area with affordable school fees until I came across Garfield. Most important of all, my daughter absolutely loves her school, teachers and friends. Thank you Cathy and team for the amazing work you do.”',
        name:'- Claudio Leng',
    }
];


export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 1, spacing: 10 },
        },
      },
      slides: { perView: 1 },
      loop: true,
    })
  return (
    <>
    <div className="navigation-wrapper w-10/12 m-auto">
    <div ref={sliderRef} className="keen-slider">
        {Testimonials.map(k => {
            return <div className="keen-slider__slide number-slide1" key={k.id}>
            <div className='w-11/12 rounded m-auto'>
                <div className='p-5 italic w-full rounded text-center font-normal text-xl h-[55vh] sm:h-56'>
                {k.testimonial}
                <div className='text-center font-bold pt-5'>
                    {k.name}
                </div>
                </div>
            </div>
        </div>
        })}
    </div>
    {loaded && instanceRef.current && (
      <>
      
        <Arrow
          left
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        />

        <Arrow
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={
            currentSlide ===
            instanceRef.current.track.details.slides.length - 1
          }
        />
      </>
    )}
  </div>
  {/* {loaded && instanceRef.current && (
    <div className="dots">
      {[
        ...Array(instanceRef.current.track.details.slides.length).keys(),
      ].map((idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx)
            }}
            className={"dot" + (currentSlide === idx ? " active" : "")}
          ></button>
        )
      })}
    </div>
  )} */}
  </>
  )
}

function Arrow(props: any) {
  const disabeld = props.disabled ? "w-5/12 arrow--disabled" : ""
  return (
    <div
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
    >
      {props.left && (
        <FaArrowLeft className='text-2xl text-gray-400 hover:text-gray-500' />
      )}
      {!props.left && (
        <FaArrowRight className='text-2xl text-gray-400 hover:text-gray-500'  />
      )}
    </div>
  )
}