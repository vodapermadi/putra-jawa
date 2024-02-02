import { ListProduct, ProductComponents } from '@/components'
import React from 'react'

const ProductPage = () => {
    return (
        <>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-5/6 mt-3 flex flex-col'>
                    <ListProduct />
                    <ProductComponents/>
                </div>
            </div>
        </>
    )
}

export default ProductPage