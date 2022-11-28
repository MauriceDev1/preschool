import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/navigation/Footer'

type LayoutProps = {
    children: React.ReactNode
}

export default function General({children}: LayoutProps) {
  return (
    <>
        <Nav />
        {children}
        <Footer />
    </>
  )
}
