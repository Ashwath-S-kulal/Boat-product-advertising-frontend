import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import ReviewImg from '../assets/ReviewImg.png';

export default function Review() {
  const reviews = [
    {
      text: `"I’ve been using this watch for two weeks now, and I’m blown away! 
      The display is so bright and crisp that I can read it clearly even in direct sunlight. 
      Bluetooth calling works flawlessly, and I love being able to control my music without taking out my phone. 
      The health tracking features are surprisingly accurate, and the battery life easily lasts me a full week."`,
      name: "Ashwath S",
      img: ReviewImg
    },
    {
      text: `"I wanted a smartwatch that looked great and actually delivered on features—this one ticks every box. 
      The 60Hz display is super smooth, and the weather updates are spot-on. I use the camera control all the time 
      for group selfies, and the wake-up gesture works every single time. Plus, I barely have to charge it! 
      Definitely worth it."`,
      name: "Ashwath S",
      img: ReviewImg
    },
    {
      text: `"This watch has become my workout partner and daily planner. 
      Heart rate and SpO₂ tracking are accurate, and the guided breathing really helps me unwind after work. 
      The voice assistant is a lifesaver when I’m on the go, and the Bluetooth calling is crystal clear. 
      It’s sleek, comfortable, and the battery lasts longer than I expected. Highly recommend!"`,
      name: "Ashwath S",
      img: ReviewImg
    }
  ];

  return (
    <div className='bg-orange-400 pb-20'>
      <h2 className='text-5xl font-bold text-center text-gray-700 pt-10'>Watch Reviews</h2>
      <div className='flex flex-row justify-self-center gap-20 p-10'>
        {reviews.map((review, index) => (
          <div
            key={index}
            className='text-white text-center justify-items-center ring-2 ring-orange-600 p-6 rounded-lg min-w-96 shadow-2xl'
          >
            <FaQuoteLeft />
            <p className='font-semibold text-sm text-center'>{review.text}</p>
            <img src={review.img} alt="Reviewer" className='w-14 ring-2 rounded-full mt-3' />
            <p>{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
