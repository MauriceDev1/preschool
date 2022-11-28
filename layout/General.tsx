import React from 'react'
import Footer from '../components/navigation/Footer'

type LayoutProps = {
    children: React.ReactNode
}

export default function General({children}: LayoutProps) {
  return (
    <>
        {children}
        <Footer />
    </>
  )
}
