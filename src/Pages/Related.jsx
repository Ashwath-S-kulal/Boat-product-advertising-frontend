import React from 'react';
import Image from '../assets/AboutImage1.webp';
import Image1 from '../assets/RelImg1.webp';
import Image2 from '../assets/RelImg2.webp';
import Image3 from '../assets/RelImg3.webp';
import Image4 from '../assets/RelImg4.webp';
import Image5 from '../assets/RelImg5.avif';
import Image6 from '../assets/RelImg6.webp';
import Image7 from '../assets/RelImg7.webp';
import Image8 from '../assets/RelImg8.webp';






function Related() {
  const products = [Image, Image1,Image2, Image3,Image4, Image5,Image6,Image7,Image8];

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700 pt-10">
        Related Products
      </h2>

      <div className="flex justify-center gap-6 my-20 flex-wrap">
        {products.map((imgSrc, index) => (
          <div
            key={index}
            className="w-32 md:w-60 bg-orange-100 rounded-lg pt-5 flex flex-col items-center"
          >
            <img src={imgSrc} alt="image" className="mb-4" />
            <button className="bg-orange-500 px-4 md:px-8 py-3 w-full text-white shadow-2xl text-sm  md:text-lg">
              Know more..
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Related;
