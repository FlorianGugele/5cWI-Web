import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div>
        <ul className="flex p-4">
            <li className='p-2 hover:bg-green-400'>
                <Link href="/">Home</Link>
            </li>
            <li className='p-2 hover:bg-red-400'>
                <Link href="/cars">Cars</Link>
            </li>
            <li className='p-2 hover:bg-red-400'>
                <Link href="/airplane">Airplane</Link>
            </li>
        </ul>
    </div>
  )
}