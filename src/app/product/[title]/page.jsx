"use client"
import { getData } from '@/utils/action'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Page = ({ params }) => {
    const [product, setProduct] = useState([])
    const [visible,setVisible] = useState(false)
    const title = decodeURIComponent(params.title)

    useEffect(() => {
        getData('/api/product').then((res) => {
            setProduct(res.find(row => row.title === title))
            setVisible(true)
        })
    }, [])

    return (
        <>
        {visible ? (
            <div className='w-full h-full flex flex-col justify-center items-center relative'>
                <div className='w-5/6 mt-3 flex flex-col gap-3 mb-4'>
                    <Image src={product.images} alt={product.title} width={3000} height={1500} className="object-cover w-full h-auto" />
                    <h1 className='w-full text-center font-semibold text-4xl'>{product?.title}</h1>
                    <p className='indent-8'>
                        {product.description}
                    </p>
                </div>
                <div className='sticky bottom-0 w-full flex justify-center items-center py-4 bg-white shadow-lg border-t border-gray-200'>
                    <div className='w-5/6 flex justify-between items-center gap-3'>
                        <button className='w-1/2 bg-indigo-600 py-2 font-semibold border border-indigo-600 text-white rounded hover:bg-indigo-700 duration-200'>Demo</button>
                        <button className='w-1/2 bg-white py-2 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white duration-200'>Top Up</button>
                    </div>
                </div>
            </div>
        ):(
            <div className='w-full h-full flex justify-center items-center'>
                ..loading..
            </div>
        )}
        </>
    )
}

export default Page