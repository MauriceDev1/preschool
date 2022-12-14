import Head from 'next/head'
import Header from '../components/header/index'

export default function About() {
  return (
    <div>
      <Head>
        <title>Extra Mural Activities</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header height="h-96" image="https://images.unsplash.com/photo-1555448049-67b919120e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
      <div className='w-full py-16'>
        <div className='flex flex-wrap w-10/12 m-auto'>
          <div className='w-full sm:w-2/3 p-5 text-gray-600'>
            <h2 className='font-bold pb-5 text-6xl text-red-600 uppercase' style={{fontFamily: 'Ultra',letterSpacing: '3px'}}>OUR EXTRA-MURAL PROGRAMME</h2>
            <p className="text-lg">
              At the start of each year parents will be given the details of the Extra- Mural activities on offer for
              the year. These are optional and take place in the hall after school hours and therefore fees are
              payable directly to the instructor concerned.
              </p>
              <h2 className='font-bold pb-5 text-5xl text-yellow-500 uppercase mt-16' style={{fontFamily: 'Ultra',letterSpacing: '3px'}}>OUR AFTERCARE FACILITY</h2>
            <p className="text-lg">
              We offer an Aftercare Service from 12.30 -5.30p.m weekdays. For those children who pay the full
              Aftercare fees, this includes school holidays when the Aftercare operates from 7.30a.m. - 5.30p-m
              However, parents may use this service on an ad hoc basis and will be billed hourly. The Aftercare
              children will be served a fight lunch and mid afternoon tea. Kindly note that the Aftercare will be
              closed for 4 weeks as from about 16th December each year.
              </p> 
            </div>
          <div className='w-full sm:w-1/3 bg-blue-100 rounded shadow h-96' style={{backgroundImage: 'url(https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/243662352_256456099821622_6061892165152021410_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFNQ0byPb__xhEm-f43QmZT4KMY5I3o_rXgoxjkjej-tZ05JOGKwSNseOfPdYYGiZcFi9OWL5JvzkmX1efNPNTx&_nc_ohc=LRhDPXCqMJsAX_W86Q7&_nc_ht=scontent-cpt1-1.xx&oh=00_AfAYep_yKtynfZ6xMul0Ox6qkHVJYyzFghNdlVeR8uYSng&oe=638EE99F)',backgroundSize:'cover'}}></div>
        </div>
        </div>
    </div>
  )
}
