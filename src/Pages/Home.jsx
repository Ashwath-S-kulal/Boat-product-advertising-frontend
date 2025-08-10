import React from 'react'
import Image from '../assets/Lunar_Call.webp'

export default function Home() {
  return (
    <div className='flex justify-center gap-12 h-screen '>
        <img src={Image} alt="Image" className='w-[600px] h-[600px] items-center mt-20'/>
        <div className='flex flex-col justify-center gap-14 max-w-lg '>
            <h1 className='text-6xl font-bold text-gray-700 leading-[80px]'>Belive in <br/>Technology, Make<br/> the change</h1>
            <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum, corporis adipisci cumque neque soluta sit quo commodi
                 ipsa ex odit minima tenetur sed perspiciatis id optio quos,
                  dolores saepe cupiditate!</p>
            <button class="bg-orange-500 px-8 py-3 rounded-full w-40 text-white shadow-2xl hover:shadow-orange-400">Buy Now</button>

        </div>
        
      
    </div>
  )
}
