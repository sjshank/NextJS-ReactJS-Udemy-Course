"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export function Links() {
    const pathname = usePathname(); //it will only work in client component
  return (
    <nav >
      <ul className='flex flex-row p-4'>
        <li className='pr-4'>
          <Link className={`link ${pathname == "/" ? 'active-a' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li className='pr-4'>
          <Link
            className={`link ${pathname == "/about" ? 'active-a' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname == "/about#aboutBottom" ? 'active-a' : ''}`}
            href="/about#aboutBottom"
          >
            About#aboutBottom
          </Link>
        </li>
      </ul>
    </nav>
  )
}