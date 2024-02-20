"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const [openNav, setOpenNav] = useState(false)

    return (
        <>
            <nav className='w-full border border-gray-200 shadow-lg bg-white/90 flex justify-center items-center py-4 sticky top-0 z-20'>
                <button className='absolute right-4 md:hidden' onClick={() => setOpenNav(!openNav)}>
                    {openNav ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"></path></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18"></path></svg>
                    )}
                </button>
                <div className={`${openNav ? '' : 'hidden'} absolute top-16 w-full bg-white p-4`}>
                    <ul className='flex items-center gap-4 font-semibold text-gray-700'>
                        <li>
                            <Link href={'/'} className={`hover:text-primary/80 duration-150 ${pathname === '/' ? 'text-primary/80 ' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/product'} className={`hover:text-primary/80 duration-150 ${pathname === '/product' ? 'text-primary/80 ' : ''}`}>
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'} className={`hover:text-primary/80 duration-150 ${pathname === '/contact' ? 'text-primary/80 ' : ''}`}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href={'/help'} className={`hover:text-primary/80 duration-150 ${pathname === '/help' ? 'text-primary/80' : ''}`}>
                                Help
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-between md:w-5/6 w-full md:px-0 px-4 items-center'>
                    <h1 className='text-xl font-semibold text-gray-700 whitespace-nowrap'>Putra Jawa Tech</h1>
                    <ul className='md:flex items-center gap-4 font-semibold text-gray-700 hidden'>
                        <li>
                            <Link href={'/'} className={`hover:text-primary/80 duration-150 ${pathname === '/' ? 'text-primary/80 ' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/product'} className={`hover:text-primary/80 duration-150 ${pathname === '/product' ? 'text-primary/80 ' : ''}`}>
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'} className={`hover:text-primary/80 duration-150 ${pathname === '/contact' ? 'text-primary/80 ' : ''}`}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href={'/help'} className={`hover:text-primary/80 duration-150 ${pathname === '/help' ? 'text-primary/80' : ''}`}>
                                Help
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar