import React from 'react'
import reliabilitySrc from '/public/reliability.png'
import Hero from '@/components/hero'
import { Metadata } from 'next'
export const metadata:Metadata = {
  title:"Reliability"
}
export default function Page() {
  return (
    <Hero imgUrl={reliabilitySrc} altText='Home' content='Welcome to our reliability'></Hero>
  )
}

