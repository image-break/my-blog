import React from 'react'
import performanceSrc from '/public/performance.png'
import Hero from '@/components/hero'
import { Metadata } from 'next'
export const metadata:Metadata = {
  title:"Performance"
}

export default function Page() {
  return (
    <Hero imgUrl={performanceSrc} altText='Home' content='Welcome to our performance'></Hero>
  )
}
