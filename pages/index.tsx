import Head from 'next/head'
import Header from '../components/header/index'
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

import Carousel from '../components/extra/carousel'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DevicePhoneMobileIcon,
  },
]

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/306602591_496303885836841_4417422731782536676_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TPqXoIcvp1cAX_I9quI&_nc_ht=scontent-cpt1-1.xx&oh=00_AfB5l_o74y_5XYzZgBrsNeHxlUzQSpKGc6naRcAw-nH6vg&oe=639116CA',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        height="h-96 sm:h-[68vh]"
        image="https://images.unsplash.com/photo-1564429238817-393bd4286b2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"/>
        <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-8 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Welcome to Garfield</span>
          <span className="block text-red-600">Ready to register?</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/application_for_enrolment"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-500 px-5 py-3 text-base font-medium text-white hover:bg-yellow-600"
            >
              Apply
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-5 py-3 text-base font-medium text-white hover:bg-red-600 "
            >
              Get More Info
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex pt-16 pb-32">
        <div className='w-10/12 m-auto'>
        <div className='w-full text-center text-4xl pb-10 font-bold'>OUR SCHOOL HISTORY</div> 
        <p className='text-lg'>In a response to a request from residents, Christ the King Church opened a private pre- primary school in October 1969. There were initially 34 children and the Church provided the premises, equipment and funds to initiate the school. 
        In 1970 the school was registered with the Western Cape Education Department. Soon after a formal constitution for the school was drawn up as well as a lease agreement between the Management Committee and the Church authorities. 
        Today the school is registered with the WCED as a co-educational independent school. The seventh principal of the school, Mrs. Cathy Chandler joined the school in 1986.</p> 
        </div>
      </div>
    </div>
    <div className='w-full flex bg-gray-50'>
      <div className='flex w-10/12 m-auto'>
        <div className='w-3/6'>
        <div className='w-full text-4xl pb-10 font-bold'>OUR MISSION STATEMENT</div>
        <div className='w-full'>
          <div className='w-full text-2xl pb-10 font-bold'>WE AIM:</div>
          <p className='text-lg py-5'> To develop the whole child in all spheres - physically, intellectually, socially and emotionally </p>
          <p className='text-lg py-5'> To send happy, confident, well-balanced children into the world  </p>
          <p className='text-lg py-5'> To foster a lifelong love of learning  </p>
        </div>
        </div>
        <div className='w-3/6 h-[65vh]' style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/04/01/08/33/boy-1298788__480.png)',backgroundPositionX: '-200px'}}>

        </div>
      </div>
    </div>
    <Carousel />
    </div>
  )
}
