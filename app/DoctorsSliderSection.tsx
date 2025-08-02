"use client";
import React, { useRef, useState } from "react";

const SocialIcon = ({ type }: { type: string }) => {
    switch (type) {
        case "instagram":
            return <svg width={22} height={22} viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="black" strokeWidth="2"/><circle cx="11" cy="11" r="5" stroke="black" strokeWidth="2"/><circle cx="16" cy="6" r="1" fill="black"/></svg>;
        case "discord":
            return <svg width={22} height={22} viewBox="0 0 22 22" fill="none"><rect x="3" y="6" width="16" height="10" rx="4" stroke="black" strokeWidth="2"/><circle cx="8" cy="12" r="1" fill="black"/><circle cx="14" cy="12" r="1" fill="black"/></svg>;
        case "twitter":
            return <svg width={22} height={22} viewBox="0 0 22 22" fill="none"><path d="M6 16c8 0 10-6 10-10 0-.2 0-.3 0-.5A7.2 7.2 0 0 0 18 4a7 7 0 0 1-2 1 3.5 3.5 0 0 0-6 3A10 10 0 0 1 4 3s-4 9 5 13c-1 .3-2 .2-3 0C7 18 8.5 18 10 18" stroke="black" strokeWidth="2" fill="none"/></svg>;
        default:
            return null;
    }
};

const DoctorCard = ({ doctor }: { doctor: any }) => (
    <div className="bg-white rounded-2xl shadow p-4 max-w-xs w-72 flex-shrink-0 mx-2 flex flex-col items-center border">
        <img
            src={doctor.img}
            alt={doctor.name}
            className="rounded-xl w-full h-44 object-cover mb-3 pointer-events-none"
            draggable={false}
        />
        <div className="text-lg font-bold">{doctor.name}</div>
        <div className="text-gray-500 text-sm mb-3">{doctor.position}</div>
        <hr className="w-full my-2" />
        <div className="text-center text-gray-700 text-sm mb-4">{doctor.desc}</div>
        <div className="flex justify-center gap-4">
            {Object.entries(doctor.socials).map(([key, val]) => (
                <a href={val as string} key={key} className="hover:scale-110 transition" target="_blank" rel="noopener noreferrer">
                    <SocialIcon type={key} />
                </a>
            ))}
        </div>
    </div>
);

const DoctorsSlider = ({ doctors }: { doctors: any[] }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [scrollStart, setScrollStart] = useState(0);

    // Płynny drag obsługa
    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
        setScrollStart(sliderRef.current!.scrollLeft);
        sliderRef.current!.setPointerCapture(e.pointerId);
        sliderRef.current!.style.scrollBehavior = "auto"; // natychmiastowe dragowanie
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const x = e.clientX;
        sliderRef.current!.scrollLeft = scrollStart - (x - dragStartX);
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(false);
        sliderRef.current!.releasePointerCapture(e.pointerId);
        sliderRef.current!.style.scrollBehavior = "smooth";
    };

    // mobile: touch events fallback
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStartX(e.touches[0].clientX);
        setScrollStart(sliderRef.current!.scrollLeft);
        sliderRef.current!.style.scrollBehavior = "auto";
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX;
        sliderRef.current!.scrollLeft = scrollStart - (x - dragStartX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        sliderRef.current!.style.scrollBehavior = "smooth";
    };

    return (
        <div className="py-10 bg-white select-none">
            <div className="text-4xl font-extrabold text-center mb-2">Meet Our Doctors</div>
            <div className="text-center text-gray-500 mb-8">
                Caring professionals, united by one mission—making healthcare simpler for you.
            </div>
            <div
                ref={sliderRef}
                className={`
          flex gap-4 overflow-x-auto px-4 py-2 scrollbar-hide
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}
        `}
                style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {doctors.map((doctor) => (
                    <div key={doctor.id} style={{ scrollSnapAlign: "start" }}>
                        <DoctorCard doctor={doctor} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-teal-400 hover:bg-teal-500 text-black font-semibold rounded-full px-6 py-3 transition">
                    Schedule a Consultation
                </button>
            </div>
        </div>
    );
};


// PRZYKŁADOWE DANE (przekaż przez propsy w projekcie)
const doctors = [
    {
        id: 1,
        name: "María Rodríguez",
        position: "General Practitioner",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur. Convallis ut tempus eget urna. Enim odio netus nunc turpis nulla.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    {
        id: 2,
        name: "Alex Kim",
        position: "Cardiologist",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=600&q=80",
        desc: "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    {
        id: 3,
        name: "Sara Rossi",
        position: "Psychiatrist",
        img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&q=80",
        desc: "Nullam quis risus eget urna mollis ornare vel eu leo.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    {
        id: 4,
        name: "María Rodríguez",
        position: "General Practitioner",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur. Convallis ut tempus eget urna. Enim odio netus nunc turpis nulla.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    {
        id: 5,
        name: "Alex Kim",
        position: "Cardiologist",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=600&q=80",
        desc: "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    {
        id: 6,
        name: "Sara Rossi",
        position: "Psychiatrist",
        img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&q=80",
        desc: "Nullam quis risus eget urna mollis ornare vel eu leo.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    {
        id: 7,
        name: "María Rodríguez",
        position: "General Practitioner",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur. Convallis ut tempus eget urna. Enim odio netus nunc turpis nulla.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    {
        id: 8,
        name: "Alex Kim",
        position: "Cardiologist",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=600&q=80",
        desc: "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    {
        id: 9,
        name: "Sara Rossi",
        position: "Psychiatrist",
        img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&q=80",
        desc: "Nullam quis risus eget urna mollis ornare vel eu leo.",
        socials: { instagram: "#", discord: "#", twitter: "#" },
    },
    // Dodaj więcej lekarzy jeśli chcesz
];

// Eksport głównego komponentu
const DoctorsSliderSection = () => <DoctorsSlider doctors={doctors} />;

export default DoctorsSliderSection;
