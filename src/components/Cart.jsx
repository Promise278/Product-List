import React from 'react'


function Cart() {
  return (
    <div className='-mt-56'>
      <div className='mt-4 flex gap-8 md:flex-row flex-col'>
        <div className='relative'>
            <img src="/assets/waffle.jpg" className='rounded-md md:w-60 w-72' alt="waffle" />
            <button className='shadow-sm absolute -mt-5 rounded-full bg-white border border-red-300 h-10 w-40 flex gap-2 p-2 pl-5 ml-8 hover:bg-blue-500 hover:text-white'><img src="/assets/icon-add-to-cart.svg" alt="cart" />Add to Cart</button>
            <div className='pt-6'>
                <p className='text-gray-500'>Waffle</p>
                <p className='text-red-950 font-semibold text-1xl'>Waffle with Berries</p>
                <p className='text-red-500 font-bold'>$6.50</p>
            </div>
        </div>
        <div className='relative'>
            <img src="/assets/brulee.jpg" className='rounded-md md:w-60 w-72' alt="brulee" />
            <button className='shadow-sm absolute -mt-5 rounded-full bg-white border border-red-300 h-10 w-40 flex gap-2 p-2 pl-5 ml-8 hover:bg-blue-500 hover:text-white'><img src="/assets/icon-add-to-cart.svg" alt="cart" />Add to Cart</button>
            <div className='pt-6'>
                <p className='text-gray-500'>Creme Brulle</p>
                <p className='text-red-950 font-semibold text-1xl'>Vanilla Bean Creme Brulle</p>
                <p className='text-red-500 font-bold'>$7.00</p>
            </div>
        </div>
        <div className='relative'>
            <img src="/assets/macaron.jpg" className='rounded-md md:w-60 w-72' alt="macaron" />
            <button className='shadow-sm absolute -mt-5 rounded-full bg-white border border-red-300 h-10 w-40 flex gap-2 p-2 pl-5 ml-10 hover:bg-blue-500 hover:text-white'><img src="/assets/icon-add-to-cart.svg" alt="cart" />Add to Cart</button>
            <div className='pt-6'>
                <p className='text-gray-500'>Macaron</p>
                <p className='text-red-950 font-semibold text-1xl'>Macaron Mix of Five</p>
                <p className='text-red-500 font-bold'>$8.00</p>
            </div>
        </div>
      </div>
       <div className='mt-4 flex gap-8 md:flex-row flex-col'>
        <div className='relative'>
            <img src="/assets/waffle.jpg" className='rounded-md md:w-60 w-72' alt="waffle" />
            <button className='shadow-sm absolute -mt-5 rounded-full bg-white border border-red-300 h-10 w-40 flex gap-2 p-2 pl-5 ml-8 hover:bg-blue-500 hover:text-white'><img src="/assets/icon-add-to-cart.svg" alt="cart" />Add to Cart</button>
            <div className='pt-6'>
                <p className='text-gray-500'>Waffle</p>
                <p className='text-red-950 font-semibold text-1xl'>Waffle with Berries</p>
                <p className='text-red-500 font-bold'>$6.50</p>
            </div>
        </div>
        <div className='relative'>
            <img src="/assets/brulee.jpg" className='rounded-md md:w-60 w-72' alt="waffle" />
            <button className='shadow-sm absolute -mt-5 rounded-full bg-white border border-red-300 h-10 w-40 flex gap-2 p-2 pl-5 ml-8 hover:bg-blue-500 hover:text-white'><img src="/assets/icon-add-to-cart.svg" alt="cart" />Add to Cart</button>
            <div className='pt-6'>
                <p className='text-gray-500'>Creme Brulle</p>
                <p className='text-red-950 font-semibold text-1xl'>Vanilla Bean Creme Brulle</p>
                <p className='text-red-500 font-bold'>$7.00</p>
            </div>
        </div>
        <div className='relative'>
            <img src="/assets/macaron.jpg" className='rounded-md md:w-60 w-72' alt="waffle" />
            <button className='shadow-sm absolute -mt-5 rounded-full bg-white border border-red-300 h-10 w-40 flex gap-2 p-2 pl-5 ml-10 hover:bg-blue-500 hover:text-white'><img src="/assets/icon-add-to-cart.svg" alt="cart" />Add to Cart</button>
            <div className='pt-6'>
                <p className='text-gray-500'>Macaron</p>
                <p className='text-red-950 font-semibold text-1xl'>Macaron Mix of Five</p>
                <p className='text-red-500 font-bold'>$8.00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
