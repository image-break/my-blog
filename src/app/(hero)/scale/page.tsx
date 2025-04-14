import React from 'react'
import scaleSrc from '/public/scale.png'
import Hero from '@/components/hero'

import { Metadata } from 'next'
export const metadata:Metadata = {
  title:"Scale"
}
export default function Page() {
  return (
    <Hero imgUrl={scaleSrc} altText='Home' content='Welcome to our scale'></Hero>
  )
}
