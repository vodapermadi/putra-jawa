import React from 'react'
import Link from "next/link"

const ContactPage = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center flex-col h-[calc(100vh-62px)]">
                <div className='border border-gray-200 w-1/2 p-4 bg-white rounded-lg shadow-lg'>
                    <h1 className='w-full text-center font-semibold text-2xl'>Contact Us</h1>
                    <div className='flex justify-center items-start p-2 flex-col gap-2'>
                        <label htmlFor="email" className='px-1'>Email</label>
                        <input type="email" id='email' name='email' placeholder='Email@example.com' className='py-2.5 px-2 border border-primary/50 rounded focus:outline-none focus:border-primary/40 w-full' />
                    </div>
                    <div className='flex justify-center items-start p-2 flex-col gap-2'>
                        <label htmlFor="message" className='px-1'>Message</label>
                        <textarea name='message' id='message' placeholder='what do you need?' className='py-2.5 px-2 border border-primary/50 rounded focus:outline-none focus:border-primary/40 w-full'></textarea>
                    </div>
                </div>
                <div className='border border-gray-400 my-4 w-1/2 rounded-full'></div>
                <div className='w-1/2 bg-white rounded-lg border border-gray-200 shadow-lg py-2 flex justify-center items-center gap-1'>
                    {/* email */}
                    <Link href={'/'} className='text-white border bg-red-600 p-2 rounded-full hover:bg-white hover:border hover:border-gray-400 hover:text-red-600 duration-200 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 20 20"><path fill="currentColor" d="M14.608 12.172c0 .84.239 1.175.864 1.175c1.393 0 2.28-1.775 2.28-4.727c0-4.512-3.288-6.672-7.393-6.672c-4.223 0-8.064 2.832-8.064 8.184c0 5.112 3.36 7.896 8.52 7.896c1.752 0 2.928-.192 4.727-.792l.386 1.607c-1.776.577-3.674.744-5.137.744c-6.768 0-10.393-3.72-10.393-9.456c0-5.784 4.201-9.72 9.985-9.72c6.024 0 9.215 3.6 9.215 8.016c0 3.744-1.175 6.6-4.871 6.6c-1.681 0-2.784-.672-2.928-2.161c-.432 1.656-1.584 2.161-3.145 2.161c-2.088 0-3.84-1.609-3.84-4.848c0-3.264 1.537-5.28 4.297-5.28c1.464 0 2.376.576 2.782 1.488l.697-1.272h2.016v7.057zm-2.951-3.168c0-1.319-.985-1.872-1.801-1.872c-.888 0-1.871.719-1.871 2.832c0 1.68.744 2.616 1.871 2.616c.792 0 1.801-.504 1.801-1.896z"></path></svg>
                    </Link>
                    {/* telegram */}
                    <Link href={'/'} className='text-white border bg-blue-600 p-2 rounded-full hover:bg-white hover:border hover:border-gray-400 hover:text-blue-600 duration-200 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11.994 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10m3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11l-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989l.01.009l.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23c.012-.23-.361 0-.361 0l-6.473 4.164l-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258Z"></path></svg>
                    </Link>
                    <Link href={'/'} className='text-white border bg-rose-600 p-2 rounded-full hover:bg-white hover:border hover:border-gray-400 hover:text-rose-600 duration-200 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"></path></svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ContactPage