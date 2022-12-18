import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter } from 'react-icons/fa'
import CompanyLogo from '../../assets/Garfield_logo.png'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

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
    id: 5, 
    link: '/contact',
    name: 'Contact'
  },
];

const More = [
  {
    id: 1, 
    link: '/application_for_enrolment',
    name: 'Application'
  },
  {
    id: 2, 
    link: '/prospectus',
    name: 'Prospectus'
  },
  {
    id: 3, 
    link: '/fees',
    name: 'School Fees'
  },
  {
    id: 4, 
    link: '/daily_program',
    name: 'Dailly Program'
  },
  {
    id: 5, 
    link: '/extra_mural_activities',
    name: 'Extra Mural Activities'
  },

]

export default function Footer() {
  const [email,setEmail] = useState()
  const [loading,setLoading] = useState(false);

  const inputEmail = (e: any) => {
    setEmail(e);
  }
  
  const submitEmail = async () => {
    setLoading(!loading)
    if(email){
        let config = {
          method: 'post',
          url: 'http://localhost:3000/api/join',
          headers: {
            'Content-TYpe': 'application/json'
          },
          data: email,
        };
        
        try {
          const response = await axios(config);
          console.log(response);
          toast('You have subscribed successfully.');
          setLoading(false);
        } catch (error) {
          toast('Please try again and check your email');
          setLoading(false);
        }

      } else {
        setLoading(false);
    }
  }

  return (
    <>
      <Toaster />
      <div className='flex w-full py-20 bg-red-600'>
          <div className='w-11/12 sm:w-8/12 m-auto flex flex-wrap'>
            <div className='w-full sm:w-1/4 text-center'>
              <div className='text-white font-semibold text-sm'>
                <div className='w-48 sm:w-[12vw] m-auto flex pb-3'>
                  <Image 
                    src={CompanyLogo}
                    objectFit={'cover'}
                    alt="Company logo"/>
                </div>
                <p className='text-xl'>Garfield Pre-Primary</p>
                
              </div>
            </div><div className='w-full sm:w-1/4 text-center'>
              <div className='text-white font-semibold pt-10 sm:pt-0'>
                Site Map
                <ul className='mt-3 font-normal sm:ml-16 sm:text-start'>
                  {Site.map(s => {
                    return <li className="py-3 sm:py-1" key={s.id}><Link href={s.link}>{s.name}</Link></li>
                  })}
                </ul>
              </div>
            </div>
            <div className='w-full sm:w-1/4 text-center'>
              <div className='text-white font-semibold pt-10 sm:pt-0'>
                More
                <ul className='mt-3 sm:ml-16 font-normal sm:ml-16 sm:text-start'>
                  {More.map(m => {
                    return <li className="py-3 sm:py-1" key={m.id}><Link href={m.link}>{m.name}</Link></li>
                  })}
                </ul>
              </div>
            </div>
            <div className='w-full sm:w-1/4 text-center'>
              <div className='text-white font-semibold pt-10 sm:pt-0'>
                Social Media
              </div>
              <div className='flex sm:ml-16 w-28 py-8 text-xl text-white justify-between m-auto sm:m-0'>
                <a href='https://web.facebook.com/10onGarfield'><FaFacebook /></a>
                <a href="https://www.instagram.com/garpreprim/?hl=en"><FaInstagram /></a>
              </div>
              <div className='text-white font-semibold pt-10 sm:pt-0'>
                Subscribe for Newsletter
              </div>
              <div className='flex mt-5 justify-center sm:justify-start'>
                  <input type="text" className='border rounded-l p-2 outline-0' onChange={(e) => inputEmail(e.target.value)}/>
                  <button onClick={submitEmail} className='bg-yellow-500 hover:bg-yellow-400 rounded-r text-white px-5'>{!loading ? 'Submit' : <div className='w-full'><div className='loader'></div></div>}</button>
              </div>
            </div>
          </div>
      </div>
      <div className='flex w-full bg-red-700 py-5'>
          <div className='flex sm:w-8/12 text-sm justify-between text-white m-auto'>
            <div>
              Garfield Pre-Primary &copy; <span className='text-xs'>01/12/2022</span> 
            </div>  
            <div>
              Powered by Vano Tech (PTY) Ltd
            </div>     
          </div>
      </div>
    </>
  )
}
