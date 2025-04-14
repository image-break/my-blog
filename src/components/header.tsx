"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Header() {

    const pathname = usePathname()
    const linkData = [
        { name: 'performance', link: '/performance' },
        { name: 'reliability', link: '/reliability' },
        { name: 'scale', link: '/scale' }

    ]

    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8 items-center">
                <Link href='/' className="text-3xl font-bold">Home</Link>
                <div className="text-xl space-x-4 ">
                    {
                        linkData.map((item) => (
                            <Link key={item.name}
                                href={item.link}
                                className={`${item.link === pathname ? 'text-blue-500' : ''}`}>
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
