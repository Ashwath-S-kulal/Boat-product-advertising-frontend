import React from "react";
import Image1 from "../assets/AboutImage1.webp";
import Image3 from "../assets/AboutImage3.jpg";
import Image4 from "../assets/AboutImage4.webp";

export default function About() {
  const aboutSections = [
    {
      title: "Single Chip for Effortless Calling",
      text: `Experience crystal-clear conversations with the advanced Ultra Seamless Single BT Calling chip, 
      designed for stable connections, extended range, and lower battery usage. Make and receive calls easily 
      using the interactive dial pad, built-in microphone, and speaker—plus, store up to 20 contacts for quick access.`,
      img: Image1,
      imgFirst: true,
    },
    {
      title: "Power That Lasts Longer",
      text: `Stay connected without worrying about frequent charging. Lunar Call delivers up to 10 days of battery life 
      for everyday use, so you can focus on what matters most. Even with BT Calling enabled, you’ll still get up to 3 days 
      of reliable performance. Whether it’s work, travel, or fitness, Lunar Call is built to keep pace with your lifestyle.`,
      img: Image3,
      imgFirst: false,
    },
    {
      title: "Track Your Health, Inside and Out",
      text: `Stay on top of your well-being with a complete suite of health tracking tools, designed to help you understand 
      your body better every day. Monitor your heart rate in real time, keep an eye on your SpO₂ levels for healthy oxygen 
      saturation, and track stress to maintain balance in your routine. Guided breathing exercises help you relax and 
      refocus, while advanced sleep tracking gives you insights into your rest patterns for better recovery. Plus, stay in 
      tune with your body’s rhythm through menstrual cycle tracking—helping you plan, prepare, and stay empowered.`,
      img: Image4,
      imgFirst: true,
    },
    {
      title: "Stay Ahead with Weather Updates",
      text: `Your watch keeps you one step ahead of the skies. Get real-time weather information right on your wrist, 
      so you’re always ready—whether it’s bright sunshine, cloudy skies, or an unexpected downpour. Plan your day, your outfit, 
      and your travels with confidence, no matter where you are.`,
      img: Image3,
      imgFirst: false,
    },
  ];

  return (
    <div className="px-4 w-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700 pt-16 md:pt-24">
        Why you Choose this Watch
      </h2>

      {aboutSections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            section.imgFirst ? "md:flex-row" : "md:flex-row-reverse"
          } justify-center items-center pt-12 gap-0 md:gap-24`}
        >
          <img
            src={section.img}
            alt={`About ${index + 1}`}
            className="w-full max-w-[450px] rounded-lg"
          />

          <aside className="max-w-2xl text-left mx-2 md:mx-0">
            <h2 className="text-slate-700 text-2xl md:text-3xl font-semibold mb-5">
              {section.title}
            </h2>
            <p className="font-light leading-7">{section.text}</p>
            <button className="bg-orange-500 px-8 py-3 rounded-full w-40 text-white shadow-2xl hover:shadow-orange-400 mt-8 transition-all duration-300">
              Know more..
            </button>
          </aside>
        </div>
      ))}
    </div>
  );
}
