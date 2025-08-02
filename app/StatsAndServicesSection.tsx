import React from "react";
import Image from "next/image";

// Kafelek statystyki górnej
const StatCard = ({ icon, value, label, bg }: { icon: React.ReactNode; value: string; label: string; bg: string }) => (
  <div className={`flex flex-col items-center justify-center rounded-xl px-6 py-4 min-w-[170px] ${bg}`}>
    <div className="text-3xl mb-1">{icon}</div>
    <div className="font-bold text-2xl">{value}</div>
    <div className="text-xs mt-1 text-gray-700 text-center">{label}</div>
  </div>
);

// Kafelek usługi
const ServiceCard = ({ icon, title, desc, link }: { icon: React.ReactNode; title: string; desc: string; link?: string }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-2 min-h-[150px]">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-1">
      {icon}
    </div>
    <div className="font-semibold">{title}</div>
    <div className="text-sm text-gray-600 flex-1">{desc}</div>
    {link && (
      <a href="#" className="text-blue-500 text-sm mt-2 underline">{link}</a>
    )}
  </div>
);

// Główny komponent sekcji
const StatsAndServicesSection = () => (
  <section className="w-full max-w-6xl mx-auto px-4 py-12">
    {/* Statystyki na górze */}
    <div className="flex flex-wrap justify-between gap-4 mb-10">
      <StatCard
        icon={<span>✅</span>}
        value="12,480"
        label="Appointments Completed"
        bg="bg-green-100"
      />
      <StatCard
        icon={<span>💬</span>}
        value="6,750"
        label="Chats That Made a Difference"
        bg="bg-blue-100"
      />
      <StatCard
        icon={<span>❤️</span>}
        value="4,320"
        label="Happy Patients"
        bg="bg-red-100"
      />
      <StatCard
        icon={<span role="img" aria-label="doctor">🧑‍⚕️</span>}
        value="20+"
        label="Certified Doctors"
        bg="bg-pink-100"
      />
    </div>

    {/* Sekcja z tytułem i gridem */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Lewa kolumna */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Symptoms to Solutions<br />—We’ve Got You
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-8 max-w-lg">
          It strikes the right balance—building trust, offering genuine support, and speaking to people in a way that feels real, human, and easy to connect with. Whether you need a prescription, medical certificate, we’re here to guide you from your symptoms to the right care.
        </p>
        {/* Duże zdjęcie */}
        <div className="relative rounded-2xl overflow-hidden shadow-md w-full max-w-md aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&q=80"
            alt="Happy patient"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Prawa kolumna */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ServiceCard
          icon={<svg width="24" height="24" fill="none" className="text-blue-600"><rect width="24" height="24" rx="5" fill="currentColor" /></svg>}
          title="Prescriptions by Message"
          desc="Receive your electronic prescription by SMS or email—valid at any pharmacy."
          link="Read more"
        />
        <ServiceCard
          icon={<svg width="24" height="24" fill="none" className="text-blue-600"><circle cx="12" cy="12" r="10" fill="currentColor" /></svg>}
          title="Preventive Health Guidance"
          desc="Get referrals for essential exams and take charge of your health. We make it easy to stay on top of your wellbeing"
        />
        <ServiceCard
          icon={<svg width="24" height="24" fill="none" className="text-blue-600"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>}
          title="Consultations by chat"
          desc="Talk to a doctor via phone, chat, or video—fast and discreet. With online prescription and a medical certificate"
        />
        <ServiceCard
          icon={<svg width="24" height="24" fill="none" className="text-blue-600"><circle cx="12" cy="12" r="10" fill="currentColor" /></svg>}
          title="Sick Leave Made Simple"
          desc="Get a medical certificate for yourself or your child when needed."
          link="Read more"
        />
      </div>
    </div>
  </section>
);

export default StatsAndServicesSection;

