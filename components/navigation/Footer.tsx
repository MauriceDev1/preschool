import React from 'react'

export default function Footer() {
  return (
    <div className='flex w-full py-20 bg-red-600'>
        <div className='w-11/12 sm:w-8/12 m-auto flex flex-wrap'>
          <div className='w-full sm:w-1/3'>
            <div className='text-white font-semibold'>
              Site Map
              <ul className=''>
                <li>Home</li>
                <li>About</li>
                <li>Enrolment</li>
                <li>Classes</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className='w-full sm:w-1/3'>
            <div className='text-white font-semibold'>More</div>
          </div>
          <div className='w-full sm:w-1/3'>
            <div className='text-white font-semibold'>
              Social Media
            </div>
          </div>
        </div>
    </div>
  )
}
