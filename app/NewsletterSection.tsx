"use client";
import React, { useState } from "react";

const ebookFile = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

const NewsletterSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [canDownload, setCanDownload] = useState(false);

    const validate = () => {
        if (!name.trim()) return "Please enter your full name.";
        if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Name can only contain letters and spaces.";
        if (!email.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Please enter a valid email address.";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const err = validate();
        if (err) {
            setError(err);
            setCanDownload(false);
            return;
        }
        setCanDownload(true); // odblokuj download
    };

    return (
        <section className="w-full bg-[#51d1d0] py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex-1 max-w-xl">
                <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                    Stay Informed, Stay<br />Healthy
                </h2>
                <p className="text-lg mb-8">
                    Join our newsletter for expert-backed health tips and updates.<br />
                    Sign up now and get a free e-book:<br />
                    <span className="italic">
            “How to Fight Obesity” — practical steps, mindset shifts, and medically sound advice to help you reclaim your health.
          </span>
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
                    <div>
                        <label className="font-semibold mb-1 block">Name</label>
                        <input
                            type="text"
                            className="w-full rounded-lg bg-[#86e3e2] px-4 py-3 text-base outline-none placeholder-gray-600"
                            placeholder="Full name"
                            value={name}
                            onChange={e => { setName(e.target.value); setCanDownload(false); }}
                        />
                    </div>
                    <div>
                        <label className="font-semibold mb-1 block">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-lg bg-[#86e3e2] px-4 py-3 text-base outline-none placeholder-gray-600"
                            placeholder="someone@something.com"
                            value={email}
                            onChange={e => { setEmail(e.target.value); setCanDownload(false); }}
                        />
                    </div>
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    {!canDownload && (
                        <button
                            type="submit"
                            className="mt-2 rounded-full px-8 py-3 bg-white text-gray-900 font-semibold shadow hover:bg-gray-100 transition text-lg"
                        >
                            Download E-Book
                        </button>
                    )}
                </form>
                {canDownload && (
                    <a
                        href={ebookFile}
                        download="E-Book-How-To-Fight-Obesity.pdf"
                        className="mt-4 rounded-full px-8 py-3 bg-white text-gray-900 font-semibold shadow hover:bg-gray-100 transition text-lg inline-block"
                    >
                        Click to Download E-Book
                    </a>
                )}
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="w-[360px] md:w-[450px] lg:w-[500px] max-w-full shadow-2xl rounded-3xl overflow-hidden border-8 border-[#e8e9ee] bg-white">
                    <img
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=600&q=80"
                        alt="E-book tablet"
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
