"use client";
import React, { useState } from "react";

// Dane przykładowe
const testimonials = [
    {
        id: 1,
        category: "GENERAL MEDICINE",
        text: "Improved health and mood by the end of this month after the course.",
        author: "Annette Black",
        age: 35,
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
        id: 2,
        category: "PSYCHIATRY THERAPY",
        text: "Out of thousands of types of meditation, we offer a core of the most simple and effective practices.",
        author: "Mariana Alves",
        age: 32,
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: 3,
        category: "GENERAL MEDICINE",
        text: "Meditation is a tool for the mind to achieve different states of being.",
        author: "Jenny Wilson",
        age: 34,
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        id: 4,
        category: "PSYCHIATRY THERAPY",
        text: "Improved health and mood by the end of this month after the course.",
        author: "Courtney Henry",
        age: 38,
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    {
        id: 5,
        category: "GENERAL MEDICINE",
        text: "I found the sessions to be transformative and easy to follow.",
        author: "Bruna Silva",
        age: 40,
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
];

// Pomocnik – zawsze zwraca indeks w zakresie 0..len-1
const getWrappedIndex = (idx, len) => ((idx % len) + len) % len;

// Renderuje dokładnie 5 kart: 2 na lewo, aktywna, 2 na prawo
const getDisplayCards = (active, data) => {
    const len = data.length;
    return [
        data[getWrappedIndex(active - 2, len)],
        data[getWrappedIndex(active - 1, len)],
        data[getWrappedIndex(active, len)],
        data[getWrappedIndex(active + 1, len)],
        data[getWrappedIndex(active + 2, len)],
    ];
};

const CoverflowInfinite = () => {
    const [active, setActive] = useState(0); // Pierwsza karta na środku

    // Wygląd coverflow z efektami
    const cardTransforms = [
        // od lewej do prawej (pozycje względem środkowej)
        { x: -280, r: -15, o: 0.45, z: 6, s: 0.97 },
        { x: -140, r: -8, o: 0.82, z: 8, s: 0.985 },
        { x: 0, r: 0, o: 1, z: 10, s: 1.07 },
        { x: 140, r: 8, o: 0.82, z: 8, s: 0.985 },
        { x: 280, r: 15, o: 0.45, z: 6, s: 0.97 },
    ];

    // Przechodzimy w pętli!
    const goPrev = () => setActive((a) => getWrappedIndex(a - 1, testimonials.length));
    const goNext = () => setActive((a) => getWrappedIndex(a + 1, testimonials.length));
    const goTo = (i) => setActive(getWrappedIndex(i, testimonials.length));

    const visibleCards = getDisplayCards(active, testimonials);

    return (
        <section className="w-full min-h-[560px] flex flex-col items-center justify-center relative pt-10 overflow-x-hidden">
            <h2 className="text-4xl font-extrabold text-center mb-10 select-none">
                What Care Feels Like—In Their Words
            </h2>
            <div className="relative w-full flex items-center justify-center" style={{ height: 390, minHeight: 350 }}>
                <div className="relative w-[340px] h-[360px] mx-auto" style={{ perspective: 1200 }}>
                    {visibleCards.map((item, i) => {
                        const { x, r, o, z, s } = cardTransforms[i];
                        return (
                            <div
                                key={item.id + "-" + i}
                                className={`
                  rounded-3xl bg-white shadow-lg p-8 flex flex-col justify-between border border-gray-100
                  select-none absolute left-1/2 top-1/2 transition-all duration-500
                  ${i === 2 ? "pointer-events-auto z-30" : "pointer-events-none"}
                `}
                                style={{
                                    width: 340,
                                    height: 360,
                                    transform: `translate(-50%, -50%) translateX(${x}px) rotate(${r}deg) scale(${s})`,
                                    opacity: o,
                                    zIndex: z,
                                    boxShadow: i === 2 ? "0 8px 40px 0 rgba(50,60,80,.13)" : "0 2px 12px 0 rgba(80,90,110,.09)",
                                    background: i === 2 ? "linear-gradient(135deg, #f3f3fb 60%, #eaf4fa 100%)" : "#fff",
                                    filter: i !== 2 ? "blur(0.5px)" : "none",
                                }}
                            >
                                <div>
                                    <div className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-3">{item.category}</div>
                                    <div className="text-lg font-medium mb-6 text-gray-800">{item.text}</div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img
                                        src={item.avatar}
                                        alt={item.author}
                                        className="rounded-full w-9 h-9 object-cover border-2 border-white shadow"
                                    />
                                    <div className="ml-3">
                                        <div className="font-semibold text-gray-800">{item.author}</div>
                                        <div className="text-xs text-gray-400">{item.age} years</div>
                                    </div>
                                </div>
                                <div className="absolute right-7 bottom-8 text-4xl text-gray-300 font-serif pointer-events-none select-none">
                                    <span>”</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Strzałki */}
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:bg-gray-100 z-40"
                    onClick={goPrev}
                    aria-label="Previous"
                >
                    <span className="text-2xl">&#60;</span>
                </button>
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:bg-gray-100 z-40"
                    onClick={goNext}
                    aria-label="Next"
                >
                    <span className="text-2xl">&#62;</span>
                </button>
            </div>
            {/* Dot paginacja */}
            <div className="flex items-center gap-1 mt-7">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        className={`w-2.5 h-2.5 mx-1 rounded-full transition-all duration-300
              ${getWrappedIndex(active, testimonials.length) === i ? "bg-gray-800" : "bg-gray-300"}
            `}
                        onClick={() => goTo(i)}
                        aria-label={`Show testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default CoverflowInfinite;
