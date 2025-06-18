import React from 'react'
import Cart from './Cart'

function Home() {
  return (
    <div className='bg-yellow-100 h-full md:p-24 p-6'>
        <div className='flex justify-between'>
            <h1 className='text-3xl font-bold md:mb-0 mb-4'>Desserts</h1>
            <div className='hidden md:block rounded-md bg-white w-80 h-72 p-4'>
              <h2 className='text-red-700 font-bold text-3xl'>Your Cart (0)</h2>
              <div>
                  <img src="/assets/illustration-empty-cart.svg" className='ml-24 mt-4 w-36' alt="empty-cart" />
                  <p className='text-orange-900 font-medium flex justify-center items-center pt-4'>Your added items will appear here</p>
              </div>
            </div>
        </div>
      <Cart />
    </div>
  )
}

export default Home
