"use client"

import Link from "next/link";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";

const services = [
    {
        title: "Financial Accounting",
        image: "tax_r.png",
        subServices: [
            "Annual Financial Statements",
            "Monthly Accounting",
        ],
        accent: "bg-[#2563EB]",
    },
    {
        title: "VAT Registration",
        image: "tax_r.png",
        subServices: [
            "Mandatory VAT Registration",
            "Voluntary VAT Registration",
            "VAT Number Retrieval",
            "VAT Category Change",
            "VAT Deregistration"
        ],
        accent: "bg-[#2563EB]",
    },
    {
        title: "PAYE Registration",
        image: "tax_r.png",
        subServices: [
            "PAYE Registration with SARS",
            "Employer PAYE Number Retrieval",
            "PAYE Deregistration",
            "PAYE Reactivation"
        ],
        accent: "bg-[#2563EB]",
    },
    {
        title: "UIF Registration",
        image: "tax_r.png",
        subServices: [
            "UIF Employer Registration",
            "UIF Employee Registration",
            "UIF Number Retrieval",
            "UIF Deregistration"
        ],
        accent: "bg-[#2563EB]",
    },
    {
        title: "SDL Registration",
        image: "tax_r.png",
        subServices: [
            "SDL Employer Registration",
            "SDL Number Retrieval",
            "SDL Deregistration"
        ],
        accent: "bg-[#2563EB]",
    },
    {
        title: "Provisional Tax Registration",
        image: "tax_r.png",
        subServices: [
            "Provisional Tax Registration",
            "IRP30 Confirmation",
            "Provisional Tax Deregistration"
        ],
        accent: "bg-[#2563EB]",
    },
    {
        title: "SARS eFiling Setup",
        image: "tax_r.png",
        subServices: [
            "New eFiling Registration",
            "eFiling Profile Setup",
            "eFiling Password Recovery",
            "Profile Linking & Maintenance"
        ],
        accent: "bg-[#2563EB]",
    }
];


export function ServiceCard() {
    return (
        <div
            className="w-full p-2 py-4 max-sm:bg-[#d9d9d9] sm:p-5 sm:px-10 px-3 gap-y-12 flex flex-col text-[#0B0331] bg-white h-full col-start-2 rounded-2xl">
            <section className="flex items-center gap-x-7">
                <div className="h-20 w-20 rounded-full bg-[#038EF0]"/>
                <p className={"text-2xl max-w-xs font-bold"}>Tax Preparation and Planning</p>
            </section>
            <p className="lg:max-w-sm font-medium text-sm text-[#0B0331]">
                Whether you are seeking a complex financial
                Whatever or a lawyer to empower you. You can come
                to use we are there with you every step of the way.
            </p>
            <Link href={"#"} className={"font-bold text-lg"}>Learn More</Link>
            <div className="flex items-center gap-x-2">
                <ArrowLeft/>
                <ArrowRight/>
            </div>
        </div>
    )
}

export default function ServiceCardMotion() {
    const [index, setIndex] = useState(0);
    const service = services[index];

    const next = () =>
        setIndex((prev) => (prev + 1) % services.length);

    const prev = () =>
        setIndex((prev) => (prev - 1 + services.length) % services.length);

    return (
        <div className="relative col-start-2 w-full h-full max-w-xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{opacity: 0, x: 40}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -40}}
                    transition={{duration: 0.3}}
                    className="bg-white h-full rounded-2xl p-8 shadow-lg"
                >
                    {/* Accent */}
                    <div className={`w-14 h-14 rounded-full ${service.accent}`}/>

                    <h3 className="mt-6 text-xl font-semibold text-[#0B0331]">
                        {service.title}
                    </h3>

                    <p className="mt-3 font-sans text-sm text-gray-600">
                        {/*{service.description}*/}
                    </p>

                    <button className="mt-6 font-medium text-[#0B0331]">
                        Learn More
                    </button>

                    {/* Arrows */}
                    <div className="mt-8 text-black flex items-center gap-6">
                        <button
                            onClick={prev}
                            className="hover:opacity-70 transition"
                        >
                            <ArrowLeft/>
                        </button>
                        <button
                            onClick={next}
                            className="hover:opacity-70 transition"
                        >
                            <ArrowRight/>
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}