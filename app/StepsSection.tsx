import React from "react";

// Komponent pojedynczego kroku
const StepCard = ({ title, desc, imgSrc }) => (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
        <div className="font-semibold text-xl mb-2">{title}</div>
        <div className="text-gray-600 text-base mb-4">{desc}</div>
        {/* Obrazek – podmień src na wycięty z obrazka */}
        <div className="w-full flex justify-center">
            <img
                src={imgSrc}
                alt={title}
                className="w-64 h-48 object-contain rounded-lg"
                draggable={false}
            />
        </div>
    </div>
);

// Główny komponent sekcji kroków
const StepsSection = () => (
    <section className="w-full py-16 bg-blue-50 rounded-3xl max-w-6xl mx-auto px-4 mt-10">
        <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-center">
                Care Made Easy—in Just 3 Steps
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4 text-center max-w-2xl">
                Connect with a doctor, get your prescription or certificate, and take the next step toward feeling okay.
            </p>
            <button className="bg-teal-400 hover:bg-teal-500 text-black font-semibold rounded-full px-6 py-3 mt-2 transition">
                Schedule a Consultation
            </button>
        </div>
        {/* Grid kroków */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
                title="Choose Your Appointment"
                desc="Pick your doctor, date, and how you’d like to be contacted—phone, video, or chat."
                imgSrc="/images/step-1.png" // <- Podmień na wycięty obrazek kroku 1
            />
            <StepCard
                title="We'll Reach Out"
                desc="Our team will message you via WhatsApp to confirm your details and help with payment"
                imgSrc="/images/step-2.png" // <- Podmień na wycięty obrazek kroku 2
            />
            <StepCard
                title="Get the Help You Need"
                desc="In your consultation, you can receive a digital prescription or medical certificate—fast, discreet, and stress-free."
                imgSrc="/images/step-3.png" // <- Podmień na wycięty obrazek kroku 3
            />
        </div>
    </section>
);

export default StepsSection;
