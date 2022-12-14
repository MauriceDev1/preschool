
import Head from 'next/head'
import { FaAngleRight } from 'react-icons/fa'
import Header from '../components/header/index'

const Rules = [
  {
    id: 1,
    icon: <FaAngleRight />,
    text: 'A full terms notice in writing is required if a child is to be withdrawn from the school.',
  },
  {
    id: 2,
    icon: <FaAngleRight />,
    text: 'A non-refundable deposit of R 300.00 must accompany this application form. This will be deducted from the school fees for the last term the child spends t Garfield Pre-primary School.',
  },
  {
    id: 3,
    icon: <FaAngleRight />,
    text: 'You will be informed in writing if your application for enrolment is successful.',
  },
  {
    id: 4,
    icon: <FaAngleRight />,
    text: 'Please provide a copy of your childs birth certificate.',
  },
]

export default function About() {
  return (
    <div>
      <Head>
        <title>Application for Enrolment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header height="h-96" image="https://images.unsplash.com/photo-1555448049-f8657e9fc8f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
      <div className='w-full py-10 bg-gray-50'>
        <div className='w-9/12 m-auto text-gray-600'>
          <div className='text-center text-6xl text-red-600 font-bold pb-10' style={{fontFamily: 'Ultra',letterSpacing: '3px'}}>
            APLICATION FORM
          </div>
          <div className='w-full flex flex-wrap'>
            <div className='w-full py-5 font-semibold text-xl border-b border-gray-300'>
              Parents Details
            </div>
            <div className='w-full sm:flex pt-10'>
              <div className='w-full sm:w-1/2 sm:mr-5'>
                <div className='py-2'>
                Father's Name
                </div>
                <div className='w-full'>
                  <input type="text" className='border w-full p-2 rounded' name="dname" />
                </div>
              </div>
              <div className='w-full sm:w-1/2'>
                <div className='py-2'>
                Mother's Name
                </div>
                <div className='w-full'>
                  <input type="text" className='border w-full p-2 rounded' name="mname" />
                </div>
              </div>
            </div>
            <div className='py-2'>
              Address
            </div>
            <div className='w-full pb-8'>
              <input type="text" className='border w-full p-2 rounded' name="address" />
            </div>
            <div className='w-full py-5 font-semibold text-xl border-b border-gray-300'>
              Contact Details
            </div>
            <div className='py-2 pt-10'>
              Home Tel
            </div>
            <div className='w-full'>
              <input type="text" className='border w-full p-2 rounded' name="homeTel" />
            </div>
            <div className='w-full flex flex-wrap'>
              <div className='w-full sm:w-1/2 sm:pr-5'>
                <div className='py-2'>
                Father's  Work Tel No
                </div>
                <div className='w-full'>
                  <input type="text" className='border w-full p-2 rounded' name="fwork" />
                </div>
              </div>
              <div className='w-full sm:w-1/2'>
                <div className='py-2'>
                Mother's Work Tel No
                </div>
                <div className='w-full'>
                  <input type="text" className='border w-full p-2 rounded' name="mwork" />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-wrap'>
              <div className='w-full sm:w-1/2 sm:pr-5'>
                <div className='py-2'>
                Father's Cell No
                </div>
                <div className='w-full'>
                  <input type="text" className='border w-full p-2 rounded' name="fcell" />
                </div>
              </div>
              <div className='w-full sm:w-1/2'>
                <div className='py-2'>
                Mother's Cell No
                </div>
                <div className='w-full'>
                  <input type="text" className='border w-full p-2 rounded' name="mcell" />
                </div>
              </div>
            </div>
            <div className='py-2'>
              Email Address
            </div>
            <div className='w-full pb-8'>
              <input type="text" className='border w-full p-2 rounded' name="email" />
            </div>
            <div className='w-full py-5 font-semibold text-xl border-b border-gray-300'>
              Child's Details
            </div>
            <div className='py-2 pt-10'>
              Full Name of Child
            </div>
            <div className='w-full'>
              <input type="text" className='border w-full p-2 rounded' name="fname" />
            </div>
            <div className='py-2'>
              Child's Date of Birth
            </div>
            <div className='w-full'>
              <input type="date" className='border w-full p-2 rounded' name="dob" />
            </div>
            <div className='w-full flex flex-wrap'>
              <div className='w-full sm:w-1/2 sm:pr-5'>
                <div className='py-2'>
                Religion
                </div>
                <div className='w-full'>
                  <input type="text" className='border w-full p-2 rounded' name="religion" />
                </div>
              </div>
              <div className='w-full sm:w-1/2'>
                <div className='py-2'>
                Home Language
                </div>
                <div className='w-full'>
                  <input type="text" className='border w-full p-2 rounded' name="hlang" />
                </div>
              </div>
            </div>
            <div className='py-2'>
              Date Child will Enter Garfield
            </div>
            <div className='w-full pb-8'>
              <input type="date" className='border w-full p-2 rounded' name="enroll" />
            </div>
            <div className='w-full py-5 font-semibold text-xl border-b border-gray-300'>
              Child's Info
            </div>
            <div className='w-full flex pt-10'>
              <div className='w-1/2'>
                <p>
                  Has the child attended a school or play group before? 
                </p>
              </div>
              <div className='w-36 sm:w-56 flex justify-between'>
                <div className='flex items-center'>
                  <input type="radio" name="pgroup" className='w-1/2 h-6 w-6'/><p className='ml-3'>YES</p>
                </div>
                <div className='flex items-center'>
                  <input type="radio" name="pgroup" className='w-1/2 h-6 w-6' /><p className='ml-3'>NO</p>
                </div>
              </div>
            </div>
            <div className='w-full flex py-8'>
              <div className='w-1/2'>
                <p>
                  Will child be attending Aftercare? 
                </p>
              </div>
              <div className='w-56 flex justify-between'>
                <div className='flex items-center'>
                  <input type="radio" name="aftercare" className='w-1/2 h-6 w-6'/><p className='ml-3'>YES</p>
                </div>
                <div className='flex items-center'>
                  <input type="radio" name="aftercare" className='w-1/2 h-6 w-6' /><p className='ml-3'>NO</p>
                </div>
              </div>
            </div>
            <div className='w-full py-5 font-semibold text-xl border-b border-gray-300'>
              NB
            </div>
            <div className='w-full pt-10'>
            <ul>
              {Rules.map(r => {
                  return <li className='flex py-3 text-md items-center' key={r.id}><p className='mr-5'>{r.icon}</p> {r.text}</li>
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 {/* <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noopener noreferrer" ><button>Download CV</button></a> */}