import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductComponents = ({ product }) => {

    return (
        <>
            <div className='grid md:grid-cols-4 sm:grid-cols-3  gap-3 my-3'>
                {product.length > 0 ? product.map((row, i) => {
                    return (
                        <div key={i} className='w-full flex justify-center items-center flex-col p-4 gap-2 border border-gray-300 rounded-lg'>
                            <Image src={row.images} alt={row.title} width={300} height={150} className='w-full h-[150px] rounded bg-gray-800 object-cover' />
                            <span className='w-full text-start'>{row.title}</span>
                            <Link href={`/product/${row.title}`} className='bg-indigo-600 w-full text-center py-2 rounded-md text-white font-semibold hover:bg-indigo-700 duration-200'>Detail</Link>
                        </div>
                    )
                }) : (
                    <div className='w-full flex justify-center items-center flex-col p-4 gap-2 border border-gray-300 rounded-lg'>
                        <Image src={product.images} alt={product.title} width={300} height={150} className='w-full h-[150px] rounded bg-gray-800 object-cover' />
                        <span className='w-full text-start'>{product.title}</span>
                        <Link href={`/product/${product.title}`} className='bg-indigo-600 w-full text-center py-2 rounded-md text-white font-semibold hover:bg-indigo-700 duration-200'>Detail</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductComponents