import Head from 'next/head'
import Header from '../components/header/index'

export default function Prospectus() {
  return (
    <div>
      <Head>
        <title>Prospectus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header height="h-96" image="https://images.unsplash.com/photo-1601339434203-130259102db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"/>
      <div className='w-full py-16'>
        <div className='flex flex-wrap w-10/12 m-auto'>
          <div className='w-full sm:w-2/3 p-5 text-gray-600'>
              <h2 className='font-bold pb-5 text-6xl text-red-600 uppercase' style={{fontFamily: 'Ultra',letterSpacing: '3px'}}>Prospectus</h2>
              <p className="text-lg">
                We aim to build a strong foundation in all areas of development to
                send happy, confident, well-balanced children into the world instilled
                with a lifelong love of learning.
              </p>
              <p className="text-lg pt-3">
                The school&#39;s constitution gives parents a role in the management of the school, whilst ensuring the
                school remains under the control of the Parish Council of Christ the King Church The school is
                managed by a Governing Body which is responsible to the Trustees of the Church Province of South
                Africa for the proper conduct of its affairs. <br></br><br></br>This body is represented by the Rector, Churchwardens
                and Parish Councillors as well as the Principal, the teacher and members of the parent body. It is
                empowered to make rules, set policies adjust fees, control school finances, select teachers for
                appointment and engage non- teaching staff to conduct its business. <br></br><br></br>This committee meets at least
                once a term. The day-to-day operation of the school is the responsibility of the Principal who
                manages the staff, plans school activities, oversees the Aftercare, controls the use of school
                equipment. and ensures that the children receive proper attention and supervision while at school
                or Aftercare.
              </p>
            </div>
          <div className='w-full sm:w-1/3 bg-blue-100 shadow h-96' style={{backgroundImage: 'url(https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/306602591_496303885836841_4417422731782536676_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TPqXoIcvp1cAX_I9quI&_nc_ht=scontent-cpt1-1.xx&oh=00_AfB5l_o74y_5XYzZgBrsNeHxlUzQSpKGc6naRcAw-nH6vg&oe=639116CA)',backgroundSize:'cover'}}></div>
        </div>
        </div>
    </div>
  )
}

//<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128"><circle cx="18" cy="46.97" r="2"/><circle cx="13" cy="49.97" r="2"/><path d="M127.92,82.32A77.58,77.58,0,0,0,121.86,55,10,10,0,0,0,124,48.06c-.31-3.78-2.82-7.17-6.73-9.08a11,11,0,0,0-5.68-1l-.73-.84a28.57,28.57,0,0,1,13.39,1.62,2,2,0,0,0,1.58-3.68A31.93,31.93,0,0,0,109,33.44a21.74,21.74,0,0,1,12.71-2.31,2,2,0,0,0,.67-3.94,25.48,25.48,0,0,0-15,2.54,16.35,16.35,0,0,1,8.87-4.79,2,2,0,0,0-.51-4c-.36,0-8.57,1.18-13.17,8.51l-1-.78c1.91-5,3.43-11.55,1.68-17.25-1.35-4.41-4.42-7.7-9.11-9.75C94,1.63,77.45-5.56,64,10.21,50.59-5.58,34,1.63,33.9,1.7c-4.7,2.06-7.77,5.34-9.13,9.76-1.75,5.7-.23,12.22,1.68,17.25l-1,.78C20.82,22.16,12.61,21,12.25,21a2,2,0,0,0-.51,4,16.34,16.34,0,0,1,8.87,4.79,25.45,25.45,0,0,0-15-2.54,2,2,0,0,0,.68,3.94,21.47,21.47,0,0,1,12.72,2.31A31.94,31.94,0,0,0,2.21,35.13,2,2,0,0,0,3.79,38.8a28.58,28.58,0,0,1,13.39-1.62l-.73.84a11,11,0,0,0-5.68,1c-3.9,1.91-6.42,5.3-6.73,9.08A10,10,0,0,0,6.14,55,77.57,77.57,0,0,0,.08,82.32C-.57,95.07,2.88,105.4,10.33,113c12.41,12.73,32.78,15,45.49,15,1,0,13,0,14.73,0,12.06.17,34.22-1.55,47.27-15.1C125.16,105.27,128.56,95,127.92,82.32ZM107.1,39a19.76,19.76,0,0,0-6.41,3.77,44.88,44.88,0,0,0-2.87-6.27c.44-.74,1.24-2.16,2.13-4A53.6,53.6,0,0,1,107.1,39ZM74.57,97.75c-1.13-2.91-4.41-5.1-8.57-5.63V30.51A16.82,16.82,0,0,1,77.09,26C89.72,26,100,42.12,100,62S89.72,98,77.09,98A14.14,14.14,0,0,1,74.57,97.75ZM50.91,98C38.28,98,28,81.83,28,62S38.28,26,50.91,26A16.82,16.82,0,0,1,62,30.51v61.6c-4.17.54-7.45,2.72-8.57,5.63A14.14,14.14,0,0,1,50.91,98ZM57,100c0-1.89,2.88-4,7-4s7,2.11,7,4-2.87,4-7,4S57,101.88,57,100ZM95.37,32.65C90.57,26,84.14,22,77.09,22a19,19,0,0,0-7.53,1.58C76.76,11.47,86.2,7.47,89.85,6.33a69.29,69.29,0,0,0-7.57,10.61A2,2,0,1,0,85.72,19c4.91-8.22,8.54-11.47,8.6-11.52a2,2,0,0,0,.19-.2c0,5.06-.92,12.76-3.42,15.29a2,2,0,1,0,2.84,2.82C97.17,22.08,98.13,15,98.4,10.32a11,11,0,0,1,1,2.3C101.52,19.52,97.54,28.52,95.37,32.65ZM61.28,13.19l1.17,1.49a2,2,0,0,0,1.59.77,2,2,0,0,0,1.58-.79l1.08-1.43C73,5.59,79.91,3.87,85,3.93c-5.67,2.6-14.44,8.42-20.76,21a47.57,47.57,0,0,0-20-21C49.16,4.16,55.5,6.16,61.28,13.19ZM28.6,12.63a10.78,10.78,0,0,1,1.46-3c.21,4.66,1.1,12.3,4.52,15.75a2,2,0,1,0,2.84-2.82C34.92,20,34,12.32,34,7.26a2,2,0,0,0,.19.2s3.68,3.28,8.6,11.53a2,2,0,1,0,3.43-2.05A64.94,64.94,0,0,0,37.89,5.5,42.52,42.52,0,0,1,59.12,23.86,19.15,19.15,0,0,0,50.91,22C43.86,22,37.43,26,32.63,32.65,30.46,28.53,26.48,19.55,28.6,12.63ZM28,32.45c.89,1.88,1.7,3.31,2.13,4a44.87,44.87,0,0,0-2.87,6.27A19.75,19.75,0,0,0,20.9,39,53.59,53.59,0,0,1,28,32.45Zm86.89,77.67c-6.19,6.42-14.75,9.95-23.15,11.84,1.4-.68,2.81-1.41,4.21-2.23a2,2,0,0,0-2-3.46c-29.67,17.19-59.69.18-60,0a2,2,0,0,0-2,3.46A49.25,49.25,0,0,0,36.85,122c-8.48-1.84-17.34-5.32-23.65-11.8-6.65-6.82-9.71-16.16-9.12-27.77,0,0,0-.07,0-.1A74.52,74.52,0,0,1,9.3,57.82a2,2,0,0,0,1.89-3.47,6.72,6.72,0,0,1-3.17-6c.19-2.39,1.83-4.51,4.5-5.81,3.85-1.88,10.55.89,13.42,4.52A57.11,57.11,0,0,0,24,62C24,84,36.07,102,50.91,102a17.57,17.57,0,0,0,2.38-.17,6.64,6.64,0,0,0,.75,1.6c-21.37,5.35-32.3-4-37.78-13.39C14,86.18,13.11,80.14,13,78.37a32.23,32.23,0,0,1,8.82-23.91,2,2,0,0,0-2.68-3c-.44.4-10.85,10-10.13,27,.1,2.39,1.19,9.1,3.78,13.52C17,99.14,25.74,109,42.41,109a54.44,54.44,0,0,0,15.25-2.4,14.78,14.78,0,0,0,12.67,0A54.43,54.43,0,0,0,85.59,109c16.68,0,25.45-9.82,29.6-16.91,2.59-4.41,3.68-11.13,3.78-13.52.72-17.06-9.69-26.65-10.13-27a2,2,0,0,0-2.68,3A32.22,32.22,0,0,1,115,78.37c-.07,1.77-1,7.82-3.23,11.66-5.48,9.35-16.41,18.74-37.78,13.39a6.64,6.64,0,0,0,.75-1.6,17.57,17.57,0,0,0,2.38.17C91.93,102,104,84,104,62a57.11,57.11,0,0,0-1.94-14.88c2.88-3.63,9.57-6.4,13.42-4.52,2.66,1.3,4.3,3.42,4.5,5.81a6.72,6.72,0,0,1-3.17,6,2,2,0,0,0,1.89,3.48,74.92,74.92,0,0,1,5.22,24.56s0,.07,0,.1C124.52,94,121.49,103.31,114.94,110.11Z"/><circle cx="110" cy="46.97" r="2"/><circle cx="115" cy="49.97" r="2"/><path d="M58 82c0-4.64-2.52-8-6-8s-6 3.37-6 8 2.52 8 6 8S58 86.62 58 82zm-6 4c-1.1 0-2-1.79-2-4s.9-4 2-4 2 1.79 2 4S53.1 86 52 86zM82 82c0-4.64-2.52-8-6-8s-6 3.37-6 8 2.52 8 6 8S82 86.62 82 82zm-6 4c-1.1 0-2-1.79-2-4s.9-4 2-4 2 1.79 2 4S77.1 86 76 86zM18.61 104.08a4.16 4.16 0 0 1-2.68-2.62 2 2 0 0 0-3.87 1 8.14 8.14 0 0 0 5.33 5.41 2 2 0 0 0 1.22-3.81zM114.5 100.05a2 2 0 0 0-2.44 1.44 4.14 4.14 0 0 1-2.67 2.6 2 2 0 0 0-1.3 2.51 2 2 0 0 0 2.51 1.3 8.14 8.14 0 0 0 5.33-5.41A2 2 0 0 0 114.5 100.05z"/></svg>