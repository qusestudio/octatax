"use client"

import Link from "next/link";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {services} from "@/lib/services";



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
        <div className="relative md:col-start-2 w-full h-full max-w-xl">
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
                        {
                            service.items.map((item, key)=> (
                                <span className="block " key={key}>{item}</span>
                            ))
                        }
                    </p>



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