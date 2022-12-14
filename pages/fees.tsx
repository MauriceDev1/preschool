import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header/index'
import Gar from '../assets/garfieldOuting.jpg'

export default function Fees() {
  return (
    <div>
      <Head>
        <title>Fees</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header height="h-96 2xl:h-screen" image="https://cdn.pixabay.com/photo/2018/07/08/08/45/abc-3523453_1280.jpg"/>
      <div className='w-full py-10 flex text-gray-600'>
        <div className='flex flex-wrap w-11/12 sm:w-9/12 mx-auto'>
            <div className='flex flex-wrap w-full sm:w-7/12 m-auto'>
            <h1 className='text-6xl text-red-600 font-bold m-auto py-10' style={{fontFamily: 'Ultra',letterSpacing: '3px'}}>SCHOOL FEES</h1>
            <p className='text-lg px-5'>
              An annual school fee per child is set, but this can be paid annually, 
              quarterly or monthly ( over 10 months from February to November) . 
              The same principle applies to the Aftercare service. Parents should anticipate 
              additional expenses to cover insurance, health tests, toiletries, art aprons as 
              well as T-shirts and sweaters. <br></br><br></br>
              School fees are not refundable and a full term's 
              notice in writing required if a child is to be withdrawn from the school. 
              Likewise, the school can insist on a child removal at its discretion, for 
              whatever reason, giving a term's notice. With regard to the Aftercare the 
              withdrawal notice period is a calendar month.<br></br><br></br> The school and Aftercare rely 
              solely on fee payments which go toward the paying of salaries, rental of premises, 
              utilities (water, electricity usage etc), teaching aids and other general expenses. 
              The Governing Body's policy is to set the fees annually so as just to cover budgeted 
              expenditure. No capital reserve is maintained and contingency funds amount to only 10% 
              of the annual budget. A PTA has been established to help raise funds for 
              additional toys, books and equipment
            </p>
            <div className='flex rounded border-yellow-500 flex-wrap w-11/12 m-auto mt-10 border'>
              <div className='font-semibold w-1/3 border-r  border-yellow-500 py-5 text-center'>
                FULL DAY
              </div>
              <div className='w-2/3 py-5 text-center'>
                R 3000.00
              </div>
              <div className='font-semibold w-1/3 border-r border-t  border-yellow-500 py-5 text-center'>
                HALF DAY
              </div>
              <div className='w-2/3 border-t  border-yellow-500 py-5 text-center'>
                R 2000.00
              </div>
            </div>
            <div className='mt-8 px-7'>
              <Link href="/contact">
                <div className='w-full px-9 rounded bg-yellow-500 text-white py-2 cursor-pointer'> 
                  CONTACT US TODAY
                </div>
              </Link>
            </div>
            </div>
            <div className='sm:w-1/3 pt-36' style={{zIndex:'1'}}>
              <Image src={Gar} objectFit={'cover'} style={{borderRadius:'10px',zIndex:'1'}}/> 
            </div>
        </div>
      </div>
    </div>
  )
}
