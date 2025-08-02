import React from "react";

// Przykładowe logo SVG
const Logo = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M30 10C32.5 20 42 20 42 30C42 40 32.5 40 30 50C27.5 40 18 40 18 30C18 20 27.5 20 30 10Z" stroke="#19D4D3" strokeWidth="2.5" fill="none" />
        <circle cx="30" cy="30" r="28" stroke="#19D4D3" strokeWidth="2" fill="none" />
    </svg>
);

const socials = [
    {
        href: "#",
        label: "Facebook",
        icon: (
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" fill="#222" /></svg>
        ),
    },
    {
        href: "#",
        label: "X",
        icon: (
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><path d="M17 7L7 17M7 7l10 10" stroke="#222" strokeWidth="2" strokeLinecap="round" /></svg>
        ),
    },
    {
        href: "#",
        label: "Discord",
        icon: (
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} stroke="#222" strokeWidth={2} /><circle cx={9} cy={12} r={1} fill="#222" /><circle cx={15} cy={12} r={1} fill="#222" /></svg>
        ),
    },
    {
        href: "#",
        label: "Instagram",
        icon: (
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><rect x={4} y={4} width={16} height={16} rx={5} stroke="#222" strokeWidth={2} /><circle cx={12} cy={12} r={4} stroke="#222" strokeWidth={2} /><circle cx={17.5} cy={6.5} r={1.5} fill="#222" /></svg>
        ),
    },
];

const Footer = () => (
    <footer className="bg-gray-50 rounded-t-[64px] pt-14 pb-2 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
            {/* Kolumna 1: logo i opis */}
            <div className="md:w-1/3 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-3">
                    <Logo />
                    <span className="ml-2 text-3xl font-bold tracking-widest text-[#0f0f0f]">LUXMEDI</span>
                </div>
                <p className="text-gray-700 mt-2 mb-10 max-w-xs">
                    LuxMedi is a digital health clinic committed to making mental and general healthcare simple, affordable, and judgment-free.
                </p>
                <div className="flex gap-3 mt-auto">
                    {socials.map((s, i) => (
                        <a
                            key={i}
                            href={s.href}
                            className="rounded-full w-12 h-12 bg-[#51d1d0] flex items-center justify-center hover:bg-[#2dbbb9] transition"
                            aria-label={s.label}
                            target="_blank" rel="noopener noreferrer"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
            {/* Kolumna 2: quicklinks i more */}
            <div className="md:w-1/3 flex flex-col md:flex-row items-start justify-center md:ml-16 md:pl-16 border-l md:border-l border-gray-300">
                <div className="mr-12 mb-6 md:mb-0">
                    <div className="font-semibold text-lg mb-3">Quicklinks</div>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="#">Online prescription</a></li>
                        <li><a href="#">Medical certificate</a></li>
                        <li><a href="#">Referral for tests</a></li>
                        <li><a href="#">Other services</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold text-lg mb-3">More</div>
                    <ul className="space-y-2 text-gray-500">
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
            </div>
            {/* Kolumna 3: contact */}
            <div className="md:w-1/3 flex flex-col items-start md:ml-20 mt-8 md:mt-0">
                <div className="font-semibold text-lg mb-3">Contact</div>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center gap-2">
                        <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4z" fill="none" /><path d="M4 4l8 8 8-8" stroke="#222" strokeWidth={1.5} /><path d="M4 4v16h16V4" stroke="#222" strokeWidth={1.5} /></svg>
                        example@gmail.cpm
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.21c1.21.48 2.53.73 3.89.73a1 1 0 011 1V20a1 1 0 01-1 1C6.39 21 2 16.61 2 11a1 1 0 011-1h3.27a1 1 0 011 .76c.1.32.22.63.35.94z" stroke="#222" strokeWidth={1.5}/></svg>
                        +1 (547) 5654 556
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><path d="M12 2C8 2 4 5 4 9c0 5.25 8 13 8 13s8-7.75 8-13c0-4-4-7-8-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" stroke="#222" strokeWidth={1.5}/></svg>
                        Lorem ipsum dolor sit amet consectetur
                    </li>
                </ul>
            </div>
        </div>
        {/* Stopka prawa */}
        <div className="text-center text-sm mt-8 pb-2 pt-3 text-gray-800 tracking-widest">
            © 2025 LUXMEDI – ALL RIGHTS RESERVED
        </div>
    </footer>
);

export default Footer;
