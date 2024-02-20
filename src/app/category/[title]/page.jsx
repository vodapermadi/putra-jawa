"use client"
import { ProductComponents } from '@/components'
import { getData } from '@/utils/action'
import React, { useEffect, useState } from 'react'

const PageCategory = ({params}) => {
    const [product,setProduct] = useState([])
    const [visible,setVisible] = useState(false)
    const category = params.title

    useEffect(() => {
        getData('/api/product').then((res) => {
            setProduct(res.find((row) => row.category === category))
            setVisible(true)
        })
    },[])

  return (
    <>
    {visible ? (
        <div className='w-full h-full flex justify-center items-center'>
            <div className="w-5/6 flex flex-col items-center mt-4">
                <div className='w-full p-3 bg-indigo-600 text-white rounded'>
                    <h1 className='text-2xl capitalize'>category "{category}"</h1>
                </div>
                <ProductComponents product={product} />
            </div>
        </div>
    ):(
        <div className='w-full h-full'>
            ..loading..
        </div>
    )}
    </>
  )
}

export default PageCategory