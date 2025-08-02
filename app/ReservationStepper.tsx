"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import stepsConfig from "./stepsConfig.json";
import clsx from "clsx";

const stepsConfig = [
    {
        "key": "specialization",
        "title": "Select Specialization",
        "fields": ["specialization"],
        "options": ["General", "Psychiatry", "Cardiology", "Gynecology", "Orthopedics"]
    },
    {
        "key": "consultationType",
        "title": "Select Consultation Type",
        "fields": ["consultationType"],
        "options": ["Video", "Call", "Chat"]
    },
    {
        "key": "doctor",
        "title": "Select Doctor",
        "fields": ["doctorId"],
        "options": [
            {
                "id": "1",
                "name": "Dr. hoachi San",
                "specialty": "Cardiologist",
                "time": "11pm, 23 October 2026",
                "avatar": "/step3-doctor.png"
            }
        ]
    },
    {
        "key": "datetime",
        "title": "Select date and time",
        "fields": ["date", "time"],
        "calendar": true
    },
    {
        "key": "credentials",
        "title": "Your Credentials",
        "fields": ["name", "whatsapp"]
    },
    {
        "key": "summary",
        "title": "Confirm Consultation",
        "fields": [],
        "summary": true
    }
];

// Hook do automatycznego mierzenia wysokości kontentu
function useHeight(ref: React.RefObject<HTMLDivElement>, deps: any[]) {
    const [height, setHeight] = useState(0);
    React.useLayoutEffect(() => {
        if (ref.current) setHeight(ref.current.offsetHeight);
        // eslint-disable-next-line
    }, deps);
    return height;
}

type StepState = {
    specialization?: string;
    consultationType?: string;
    doctorId?: string;
    date?: string;
    time?: string;
    name?: string;
    whatsapp?: string;
};

export default function ReservationStepper() {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState<"forward" | "backward">("forward");
    const [formState, setFormState] = useState<StepState>({});
    const contentRef = useRef<HTMLDivElement>(null);
    const height = useHeight(contentRef, [step]);
    const currentStep = stepsConfig[step];

    function isStepComplete() {
        if (!currentStep.fields) return true;
        return currentStep.fields.every((field) => !!formState[field as keyof StepState]);
    }
    function handleNext() {
        setDirection("forward");
        setStep((prev) => Math.min(prev + 1, stepsConfig.length - 1));
    }
    function handleBack() {
        setDirection("backward");
        setStep((prev) => Math.max(prev - 1, 0));
    }
    function handleFieldChange(field: string, value: string) {
        setFormState((prev) => ({ ...prev, [field]: value }));
    }

    function renderStep() {
        switch (currentStep.key) {
            case "specialization":
                return (
                    <div className="space-y-4">
                        <div className="text-xl font-semibold mb-4">{currentStep.title}</div>
                        <div className="flex flex-wrap gap-3">
                            {currentStep.options.map((opt: string) => (
                                <button
                                    key={opt}
                                    onClick={() => handleFieldChange("specialization", opt)}
                                    className={clsx(
                                        "px-5 py-2 rounded-xl border font-medium transition-all",
                                        formState.specialization === opt
                                            ? "bg-black text-white"
                                            : "bg-white border-black text-black hover:bg-gray-100"
                                    )}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case "consultationType":
                return (
                    <div className="space-y-4">
                        <div className="text-xl font-semibold mb-4">{currentStep.title}</div>
                        <div className="flex gap-3">
                            {currentStep.options.map((opt: string) => (
                                <button
                                    key={opt}
                                    onClick={() => handleFieldChange("consultationType", opt)}
                                    className={clsx(
                                        "px-5 py-2 rounded-xl border font-medium transition-all",
                                        formState.consultationType === opt
                                            ? "bg-teal-500 text-white"
                                            : "bg-white border-teal-500 text-teal-700 hover:bg-teal-100"
                                    )}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case "doctor":
                return (
                    <div className="space-y-4">
                        <div className="text-xl font-semibold mb-4">{currentStep.title}</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentStep.options.map((doc: any) => (
                                <button
                                    key={doc.id}
                                    onClick={() => handleFieldChange("doctorId", doc.id)}
                                    className={clsx(
                                        "flex items-center p-4 rounded-xl border shadow transition-all",
                                        formState.doctorId === doc.id
                                            ? "bg-blue-50 border-blue-500"
                                            : "bg-white border-gray-200 hover:bg-gray-50"
                                    )}
                                >
                                    <img
                                        src={doc.avatar}
                                        alt={doc.name}
                                        className="w-14 h-14 rounded-full mr-4"
                                    />
                                    <div className="text-left">
                                        <div className="font-bold">{doc.name}</div>
                                        <div className="text-sm text-gray-500">{doc.specialty}</div>
                                        <div className="text-xs text-gray-400">{doc.time}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case "datetime":
                const availableDates = ["2024-04-23", "2024-04-24", "2024-04-25", "2024-04-26"];
                const availableTimes = ["01:00 AM", "03:00 AM", "05:00 AM"];
                return (
                    <div className="space-y-4">
                        <div className="text-xl font-semibold mb-4">{currentStep.title}</div>
                        <div className="flex gap-8">
                            <div>
                                <div className="mb-2 font-medium">Pick date</div>
                                <div className="flex gap-2">
                                    {availableDates.map((date) => (
                                        <button
                                            key={date}
                                            onClick={() => handleFieldChange("date", date)}
                                            className={clsx(
                                                "px-4 py-2 rounded-xl border transition-all",
                                                formState.date === date
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                                            )}
                                        >
                                            {date}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 font-medium">Pick time</div>
                                <div className="flex gap-2">
                                    {availableTimes.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => handleFieldChange("time", time)}
                                            className={clsx(
                                                "px-4 py-2 rounded-xl border transition-all",
                                                formState.time === time
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                                            )}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "credentials":
                return (
                    <div className="space-y-4">
                        <div className="text-xl font-semibold mb-4">{currentStep.title}</div>
                        <div className="flex flex-col gap-4 max-w-md">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formState.name ?? ""}
                                onChange={(e) => handleFieldChange("name", e.target.value)}
                                className="input input-bordered px-4 py-2 rounded-lg border w-full"
                            />
                            <input
                                type="tel"
                                placeholder="Whatsapp Number"
                                value={formState.whatsapp ?? ""}
                                onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                                className="input input-bordered px-4 py-2 rounded-lg border w-full"
                            />
                        </div>
                    </div>
                );

            case "summary":
                const doc = stepsConfig[2].options.find(
                    (d: any) => d.id === formState.doctorId
                );
                return (
                    <div className="space-y-6">
                        <div className="text-xl font-semibold mb-4">Finalize Your Appointment</div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 space-y-3">
                                <div className="font-bold">Payment Method</div>
                                <div className="flex flex-col gap-2">
                                    <button className="px-4 py-2 border rounded-lg text-left">Google Pay</button>
                                    <button className="px-4 py-2 border rounded-lg text-left">Debit Card</button>
                                </div>
                                <div className="mt-2 font-bold">Debit Cards</div>
                                <div className="flex flex-col gap-2">
                                    <button className="px-4 py-2 border rounded-lg flex items-center">
                                        <span className="mr-2 text-lg">💳</span> Axim Bank ****4578
                                    </button>
                                    <button className="px-4 py-2 border rounded-lg flex items-center">
                                        <span className="mr-2 text-lg">💳</span> HDFC Bank ****4521
                                    </button>
                                    <button className="px-4 py-2 border rounded-lg flex items-center">
                                        <span className="mr-2">+</span> Add New Cards
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 space-y-3 border rounded-xl p-4 bg-gray-50">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={doc?.avatar}
                                        alt={doc?.name}
                                        className="w-14 h-14 rounded-full"
                                    />
                                    <div>
                                        <div className="font-bold">{doc?.name}</div>
                                        <div className="text-sm text-gray-500">{doc?.specialty}</div>
                                        <div className="text-xs text-gray-400">{doc?.time}</div>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-1">
                                    <div>Order: <span className="font-semibold">$66.00</span></div>
                                    <div>Delivery: <span className="font-semibold">$2.00</span></div>
                                    <div className="font-bold">Total: $68.00</div>
                                </div>
                            </div>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 transition text-white rounded-xl py-3 px-6 w-full max-w-xs font-semibold">
                            Pay Now
                        </button>
                        <div className="text-xs text-gray-400 text-center">
                            <input type="checkbox" className="mr-2" />I agree to all the terms and policies
                        </div>
                    </div>
                );

            default:
                return null;
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto py-12 px-4">
            <div className="flex justify-between items-center mb-8">
                {stepsConfig.map((s, i) => (
                    <div
                        key={s.key}
                        className={clsx(
                            "flex-1 h-2 mx-1 rounded",
                            i <= step ? "bg-teal-500" : "bg-gray-200"
                        )}
                    />
                ))}
            </div>
            {/* Animowana wysokość oraz animowane przejście stepów */}
            <motion.div
                className="relative"
                animate={{ height }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: 200 }}
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={step}
                        ref={contentRef}
                        variants={{
                            initial: {
                                x: direction === "forward" ? 60 : -60,
                                opacity: 0,
                                position: "absolute",
                                width: "100%",
                            },
                            animate: {
                                x: 0,
                                opacity: 1,
                                position: "relative",
                                width: "100%",
                            },
                            exit: {
                                x: direction === "forward" ? -60 : 60,
                                opacity: 0,
                                position: "absolute",
                                width: "100%",
                            },
                        }}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.38, ease: "easeInOut" }}
                        className="bg-white p-8 rounded-2xl shadow-lg min-h-[350px] w-full"
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            <div className="flex justify-between mt-8">
                <button
                    className={clsx(
                        "px-6 py-2 rounded-xl font-semibold border transition",
                        step === 0
                            ? "bg-gray-200 border-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-white border-gray-300 text-gray-800 hover:bg-gray-50"
                    )}
                    onClick={handleBack}
                    disabled={step === 0}
                >
                    Back
                </button>
                <button
                    className={clsx(
                        "px-6 py-2 rounded-xl font-semibold transition",
                        isStepComplete()
                            ? "bg-teal-600 text-white hover:bg-teal-700"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    )}
                    onClick={handleNext}
                    disabled={!isStepComplete() || step === stepsConfig.length - 1}
                >
                    {step === stepsConfig.length - 1 ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
}
