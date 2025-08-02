import React from "react";

// Dummy dane – podmień według potrzeb
const services = ["Dermatology", "Psychiatry", "Cardiology"];
const paymentIcons = [
    { src: "/paypal.svg", alt: "PayPal" },
    { src: "/googlepay.svg", alt: "G Pay" },
    { src: "/applepay.svg", alt: "Apple Pay" },
    { src: "/visa.svg", alt: "VISA" },
    { src: "/mastercard.svg", alt: "MasterCard" },
    { src: "/amex.svg", alt: "AMEX" },
];

const plans = [
    {
        type: "CHAT",
        price: "$16",
        services: ["$16", "$16", "$16"],
    },
    {
        type: "CALL",
        price: "$36",
        services: ["$16", "$16", "$16"],
    },
    {
        type: "VIDEO",
        price: "$116",
        services: ["$16", "$16", "$16"],
    },
];

// Pojedyncza kolumna z planem
const PlanColumn = ({ plan }) => (
    <div className="bg-white rounded-xl shadow px-8 py-6 flex flex-col items-center min-w-[180px]">
        <div className="uppercase text-gray-400 tracking-wide mb-2">{plan.type}</div>
        <div className="text-4xl font-extrabold text-[#272540] mb-3">{plan.price}</div>
        <button className="bg-teal-300 hover:bg-teal-400 text-black font-semibold rounded-full px-6 py-2 mb-5 border border-teal-400 transition">
            Subscribe
        </button>
        <div className="flex flex-col gap-3 w-full">
            {plan.services.map((price, i) => (
                <div key={i} className="flex justify-center border-b last:border-0 pb-3 last:pb-0">
                    <span className="text-[#272540] text-lg">{price}</span>
                </div>
            ))}
        </div>
    </div>
);

// Komponent sekcji
const PricingSection = () => (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
        {/* Nagłówek */}
        <h2 className="text-4xl font-extrabold text-center mb-10">
            Choose the Care Plan That’s<br />Right for You
        </h2>
        {/* Tabela cenowa */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            {/* Lewa kolumna – kafel "Service details" i lista usług */}
            <div className="flex flex-col gap-4 w-full max-w-xs">
                {/* Service details */}
                <div className="bg-white rounded-xl shadow p-6 flex items-center gap-5">
                    <div className="bg-teal-300 w-14 h-14 flex items-center justify-center rounded-full text-2xl text-[#272540] font-bold">
                        <span>↓</span>
                    </div>
                    <div>
                        <div className="text-gray-500 text-sm mb-1">Get started</div>
                        <div className="font-bold text-lg text-[#272540]">Service details</div>
                    </div>
                </div>
                {/* Lista usług */}
                <div className="bg-blue-500 rounded-xl shadow p-6 flex flex-col gap-3">
                    {services.map((name, i) => (
                        <div key={name} className="text-white text-lg flex flex-col gap-1">
                            {name}
                            {i < services.length - 1 && <hr className="border-blue-200 opacity-50 mt-2" />}
                        </div>
                    ))}
                </div>
            </div>
            {/* Kolumny z planami */}
            <div className="flex flex-1 gap-4 justify-center flex-wrap">
                {plans.map((plan) => (
                    <PlanColumn key={plan.type} plan={plan} />
                ))}
            </div>
        </div>
        {/* Metody płatności */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-bold text-lg text-[#272540]">Payment methods</div>
            <div className="flex gap-6 flex-wrap items-center justify-center">
                {paymentIcons.map(({ src, alt }) => (
                    <img
                        key={alt}
                        src={src}
                        alt={alt}
                        className="h-8"
                        style={{ filter: "grayscale(0.3)" }}
                        draggable={false}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default PricingSection;
