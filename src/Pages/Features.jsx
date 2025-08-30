import React from "react";
import FeaturesImg from "../assets/features.webp";

export default function Features() {
  const leftFeatures = [
    {
      title: "60Hz Refresh Rate",
      description:
        "Enjoy smooth, fluid visuals with a 60Hz refresh rate that makes every swipe, scroll, and animation feel effortless.",
    },
    {
      title: "600 Nits Brightness",
      description:
        "See your screen clearly, indoors or outdoors, with 600 nits of brightness for exceptional visibility even under sunlight.",
    },
    {
      title: "Always-On Mode",
      description:
        "Your watch never sleeps when you need it most. Always-On Mode keeps the essential information—time, date, and more—visible at a glance without draining the battery excessively.",
    },
  ];

  const rightFeatures = [
    {
      title: "Wake-Up Gesture",
      description:
        "Your watch responds instantly to you. Just raise your wrist and the display comes alive, ready to give you updates without pressing a button.",
    },
    {
      title: "Bluetooth Calling",
      description:
        "Stay connected even when your phone is in your pocket or bag. Make and receive calls directly from your wrist with a built-in mic and speaker for crystal-clear conversations.",
    },
    {
      title: "Voice Assistance",
      description:
        "Your personal assistant, right on your wrist. Ask questions, set reminders, check updates, or control features—just by speaking.",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-10 w-screen">
      <h2 className="text-5xl font-bold text-center text-gray-700 pt-6 md:pt-12">Features</h2>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-10 lg:gap-20">
        
        <div className="max-w-sm flex flex-col justify-around gap-0 md:gap-6 mx-2 md:mx-0">
          {leftFeatures.map((feature, index) => (
            <div key={index}>
              <h1 className="text-lg font-semibold text-gray-700">{feature.title}</h1>
              <p className="font-light text-base mb-5">{feature.description}</p>
            </div>
          ))}
        </div>

        <img src={FeaturesImg} alt="Features" className="w-[320px] lg:w-[480px]" />

        <div className="max-w-sm flex flex-col justify-around gap-0 md:gap-6 mx-2 md:mx-0">
          {rightFeatures.map((feature, index) => (
            <div key={index}>
              <h1 className="text-lg font-semibold text-gray-700 ">{feature.title}</h1>
              <p className="font-light text-base mb-5">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
