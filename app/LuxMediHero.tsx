"use client";

import React, { useState } from "react";

// Navigation bar for the landing page
const Navbar = () => (
  <nav className="w-full bg-black text-white flex items-center justify-between px-6 md:px-8 py-4">
    <div className="flex items-center space-x-4">
      <span className="font-bold text-lg tracking-widest">LUXMEDI</span>
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li><a href="#" className="hover:underline">ONLINE PRESCRIPTION</a></li>
        <li><a href="#" className="hover:underline">MEDICAL CERTIFICATE</a></li>
        <li><a href="#" className="hover:underline">REFERRAL FOR TESTS</a></li>
        <li><a href="#" className="hover:underline">OTHER SERVICES</a></li>
        <li><a href="#" className="hover:underline">HELP</a></li>
      </ul>
    </div>
    <div className="flex items-center space-x-2">
      <button className="border border-gray-700 rounded px-3 py-1 flex items-center gap-2 text-sm">
        <span role="img" aria-label="flag">🇬🇧</span> ENG ▼
      </button>
      <button className="bg-teal-400 hover:bg-teal-500 text-black font-semibold rounded-full px-5 py-2 ml-3 transition">
        Book Now
      </button>
      <button className="border border-white rounded-full px-4 py-2 ml-2 text-white">
        Contact Us →
      </button>
    </div>
  </nav>
);

interface ConsultationSelectorProps {
  value: string;
  setValue: (value: string) => void;
}

// Selector for consultation types
const ConsultationSelector = ({ value, setValue }: ConsultationSelectorProps) => {
  const options = ["General", "Psychiatry", "Cardiology", "Gynecology", "Orthopedics"];
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center w-full max-w-2xl mx-auto mt-8">
      <h3 className="font-semibold mb-4 text-lg text-center">Book Your Consultation</h3>
      <div className="flex gap-2 flex-wrap justify-center">
        {options.map((opt) => (
          <button
            key={opt}
            className={`px-5 py-2 rounded-full font-medium transition ${
              value === opt
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setValue(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

// Hero section of the landing page
const HeroSection = () => {
  const [selected, setSelected] = useState("Cardiology");

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      <div className="w-full bg-teal-100 text-teal-900 text-center text-xs py-2 px-4">
        First consultation with up to 30% off — choose chat, call, or video. Use code: LUXMEDI
      </div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/90 to-gray-100 z-0" />
      <div className="relative z-10 flex flex-col items-center px-4 pt-20 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 leading-tight">
          Your Health Matters—Because <br className="hidden md:block" />
          You Deserve to Feel Okay
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-gray-700">
          It strikes the right balance—building trust, offering genuine support, and speaking to people in a way that feels real, human, and easy to connect with.
        </p>
        <ConsultationSelector value={selected} setValue={setSelected} />
        <div className="flex justify-center mt-6">
          <span className="bg-gray-900 text-white font-semibold rounded-full px-8 py-3 text-lg">
            consult a medical professional <span className="font-bold">From 69BRL</span>
          </span>
        </div>
      </div>
    </section>
  );
};

// Combined component for the landing page hero with navigation
const LuxMediHero = () => (
  <div className="w-full min-h-screen flex flex-col bg-gray-100">
    <Navbar />
    <HeroSection />
  </div>
);

export default LuxMediHero;

