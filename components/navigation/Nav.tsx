import React, {useState} from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Image from 'next/image'
import CompanyLogo from '../../assets/Garfield_logo.png'
import Link from 'next/link'

const solutions = [
  {
    name: 'Application For Enrolment',
    href: '/application_for_enrolment',
  },
  {
    name: 'Prospectus',
    href: '/prospectus',
  },
  {
    name: 'School Fees',
    href: '/fees',
  },
]
const classes = [
  {
    name: 'Daily Program',
    href: '/daily_program',
  },
  {
    name: 'Extra Mural Activities',
    href: '/extra_mural_activities',
  }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [toggleEnrolment,setToggleEnrolment] = useState(false)
  const [toggleClasses,setToggleClasses] = useState(false)
  const [openPopup,setOpenPopup] = useState(false)

  return (
    <Popover className="relative bg-white sticky top-0" style={{zIndex:'200'}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              {/* <span className="sr-only">Your Company</span> */}
              <div className='flex w-36'>
                <Image
                  src={CompanyLogo}
                  objectFit={'cover'}
                  alt="company logo"/>
              </div>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex items-center">
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Home
            </a>

            <a href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
            About Us
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Enrolment</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name} 
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              onClick={() => classNames(open)}
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                          
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Classes</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {classes.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/application_for_enrolment"><button className='px-3 py-1 bg-red-600 rounded text-white hover:bg-red-500'>Apply Now</button></Link>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
            <div className="px-5 pt-2 pb-3">
              <div className="flex items-center justify-between">
                <div className='w-36'>
                <Image
                  src={CompanyLogo}
                  objectFit={'cover'}
                  alt="company logo"/>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Home
                </a>

                <a href="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  About Us
                </a>

                <div className="flex text-base font-medium text-gray-500 hover:text-gray-900 justify-between items-center">
                <p>Enrolment</p><div onClick={() => setToggleEnrolment(!toggleEnrolment)}>{toggleEnrolment ?  <FaChevronUp /> : <FaChevronDown /> }</div>
                </div>
                <div className={toggleEnrolment ? 'w-full flex flex-wrap ml-5': 'hidden'}>
                  <a href="/application_for_enrolment" className="py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full">
                    Application for Enrolment
                  </a>
                  <a href="/prospectus" className="py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full">
                    Prospectus
                  </a>
                  <a href="/fees" className="py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full">
                    School Fees
                  </a>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-500 hover:text-gray-900 w-full items-center">
                  <p>Classes</p><div onClick={() => setToggleClasses(!toggleClasses)}>{toggleClasses ?  <FaChevronUp /> : <FaChevronDown /> }</div>
                </div>
                <div className={toggleClasses ? 'w-full flex flex-wrap ml-5': 'hidden'}>
                  <a href="/daily_program" className="py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full">
                    Daily Program
                  </a>
                  <a href="/extra_mural_activities" className="py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full">
                    Extra Mural Activaties
                  </a>
                </div>

                <a href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Contact
                </a>
            </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}