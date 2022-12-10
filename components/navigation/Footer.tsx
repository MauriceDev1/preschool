import React from 'react'
import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter } from 'react-icons/fa'

const Site = [
  {
    id: 1, 
    link: '/',
    name: 'Home'
  },
  {
    id: 2, 
    link: '/about',
    name: 'About'
  },
  {
    id: 3, 
    link: '/classes',
    name: 'Classes'
  },
  {
    id: 4, 
    link: '/enrolment',
    name: 'Enrolment'
  },
  {
    id: 5, 
    link: '/contact',
    name: 'Contact'
  },
]

export default function Footer() {
  return (
    <div className='flex w-full py-20 bg-gradient-to-r from-red-400 to-red-500'>
        <div className='w-11/12 sm:w-8/12 m-auto flex flex-wrap'>
          <div className='w-full sm:w-1/3'>
            <div className='text-white font-semibold'>
              Site Map
              <ul className='mt-3'>
                {Site.map(s => {
                  return <li className="py-1"><a href={s.link} key={s.id}>{s.name}</a></li>
                })}
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
            <div className='flex w-48 py-8 text-xl text-white justify-between'>
              <a href='https://web.facebook.com/10onGarfield'><FaFacebook /></a>
              <FaTwitter />
              <FaInstagram />
              <FaGooglePlus />
            </div>
          </div>
        </div>
    </div>
  )
}
