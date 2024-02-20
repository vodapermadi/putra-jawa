"use client"
import React from 'react'
import Link from 'next/link'

const ListProduct = ({ category }) => {
    return (
        <>
            <div className='flex items-center p-3 overflow-x-auto gap-3 border rounded-lg bg-white'>
                {category.map((row,i) => {
                    return (
                        <Link key={i} href={`category/${row.title}`} className='py-2 px-3 bg-primary rounded-lg border border-gray-200 shadow-lg text-white shrink-0'>
                            {row.title}
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default ListProduct