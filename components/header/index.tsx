import React from 'react'

type HeaderProps = {
    image?: string,
    height: string
    text?: string,
}

export default function index({image,height,text}:HeaderProps) {
  return (
    <div className={`${height} w-full flex flex-wrap bg-gray-500`} style={{backgroundImage: `url(${image})`}}>
        {text && <div className='m-auto w-10/12'>
            </div>}
    </div>
  )
}
