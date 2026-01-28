"use client";

import { useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

const steps = [
    {
        id: 1,
        title: "Assessment and Analysis",
        description:
            "We begin by listening before calculating.\n" +
            "Your current position, obligations, and goals are carefully examined to understand not just the numbers, but the story behind them.\n" +
            "This clarity becomes the foundation for every decision that follows.",
        accent: "bg-[#FFF187]",
    },
    {
        id: 2,
        title: "Planning and Implementation",
        description:
            "With insight comes structure.\n" +
            "We design practical strategies and put the right systems in place — registrations, filings, and controls — executed accurately and without unnecessary complexity.\n" +
            "Every step is deliberate, compliant, and aligned with your long-term objectives.",
        accent: "bg-[#FFF187]",
    },
    {
        id: 3,
        title: "Monitoring and Adjustment",
        description:
            "Financial matters don’t stand still, and neither do we.\n" +
            "We continuously review performance, regulatory changes, and emerging risks, adjusting where needed to keep you protected and optimised.\n" +
            "It’s ongoing guidance designed to keep you ahead, not reacting.",
        accent: "bg-[#FFF187]",
    },
];

export default function ProcessSteps() {
    const [activeStep, setActiveStep] = useState<number | null>(2);

    return (
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-200 to-blue-700 pt-6 sm:pt-10 px-4 sm:px-10">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between max-sm:h-[90vh] gap-4 sm:gap-2 sm:h-[40vh]">
                {steps.map((step) => {
                    const isActive = activeStep === step.id;

                    return (
                        <motion.div
                            key={step.id}
                            layout
                            onHoverStart={() => setActiveStep(step.id)}
                            onClick={() => setActiveStep(step.id)}
                            transition={{
                                layout: { duration: 0.45, ease: "easeOut" },
                            }}
                            className={clsx(
                                "relative cursor-pointer rounded-2xl flex flex-col justify-between w-full sm:w-[28%]",
                                isActive
                                    ? "h-auto sm:h-full shadow-xl"
                                    : "h-[160px] sm:h-[200px] opacity-90"
                            )}
                        >
                            <motion.div
                                layout
                                className={clsx(
                                    "h-full w-full p-6 rounded-t-2xl sm:rounded-t-2xl",
                                    isActive ? step.accent : "bg-transparent"
                                )}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-blue-500" />

                                    {isActive && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.15 }}
                                            className="text-4xl sm:text-6xl font-bold text-blue-500"
                                        >
                                            0{step.id}
                                        </motion.span>
                                    )}
                                </div>

                                <div className="mt-4 sm:mt-6">
                                    <h3
                                        className={clsx(
                                            "font-bold",
                                            isActive
                                                ? "text-black text-lg sm:text-xl"
                                                : "text-white"
                                        )}
                                    >
                                        {step.title}
                                    </h3>

                                    {isActive && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="mt-3 font-sans sm:mt-4 text-sm text-black leading-relaxed"
                                        >
                                            {step.description}
                                        </motion.p>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
