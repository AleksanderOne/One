"use client";
import React, { useState } from "react";

// Przykładowe dane FAQ (JSON)
const faqData = [
    {
        question: "Q. Lorem ipsum dolor sit amet consectetur. Quis sit a aliquet porta?",
        answer:
            "Lorem ipsum dolor sit amet consectetur. Lacus purus imperdiet id ultrices donec viverra nibh. Amet nisi vitae egestas dictum commodo nullam turpis cursus. Nunc massa arcu nunc eget purus. Ullamcorper vitae mauris nunc euismod proin porttitor.",
    },
    {
        question: "Q. Lorem ipsum dolor sit amet consectetur?",
        answer:
            "A: Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.",
    },
    {
        question: "Q. Lorem ipsum dolor sit amet consectetur. Quis porta?",
        answer:
            "A: Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    },
    {
        question: "Q. Lorem ipsum dolor sit . Quis sit a aliquet porta?",
        answer:
            "A: Curabitur aliquet quam id dui posuere blandit.",
    },
    {
        question: "Q. Lorem ipsum dolor sit amet consectetur. Quis sit a aliquet porta?",
        answer:
            "A: Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    },
    {
        question: "Q. Lorem ipsum dolor sit amet consectetur. Qliquet porta?",
        answer:
            "A: Proin eget tortor risus. Nulla porttitor accumsan tincidunt.",
    },
];

const FAQSection = () => {
    const [openIndexes, setOpenIndexes] = useState([0]); // domyślnie otwarte 1

    // Toggle konkretne pytanie (może być wiele otwartych)
    const toggle = (idx) => {
        setOpenIndexes((prev) =>
            prev.includes(idx)
                ? prev.filter((i) => i !== idx)
                : [...prev, idx]
        );
    };

    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-14">
            <h2 className="text-4xl font-extrabold text-center mb-10">
                Most Peoples often ask— these questions
            </h2>
            <div className="flex flex-col gap-4">
                {faqData.map((item, idx) => {
                    const isOpen = openIndexes.includes(idx);
                    return (
                        <div
                            key={idx}
                            className={`rounded-lg transition-all ${isOpen ? "bg-teal-100" : "bg-gray-100"}`}
                        >
                            <button
                                className={`w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-base transition-colors
                  ${isOpen ? "text-[#136965]" : "text-gray-800"}
                `}
                                onClick={() => toggle(idx)}
                            >
                                <span>{item.question}</span>
                                <span className="text-2xl">
                  {isOpen ? "−" : "+"}
                </span>
                            </button>
                            {/* Odpowiedź – animacja pojawiania się */}
                            <div
                                className={`overflow-hidden transition-all duration-300 px-6
                  ${isOpen ? "max-h-96 py-3 opacity-100" : "max-h-0 py-0 opacity-0"}
                `}
                            >
                                <div className="text-gray-700 text-sm bg-teal-50 p-3 rounded-md">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQSection;
