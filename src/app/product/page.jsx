"use client"
import { ListProduct, ProductComponents } from '@/components'
import { getData } from '@/utils/action'
import React, { useEffect, useState } from 'react'

const ProductPage = () => {
    const [category,setCategory] = useState([])
    const [product,setProduct] = useState([])

    useEffect(() => {
        getData('/api/category').then((res) => {
            setCategory(res)
        })

        getData('/api/product').then((res) => {
            setProduct(res)
        })
    },[])
    return (
        <>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-5/6 mt-3 flex flex-col'>
                    <ListProduct category={category} />
                    <ProductComponents product={product} />
                </div>
            </div>
        </>
    )
}

export default ProductPage