"use client"
import { useState } from "react";

export default function BillingToggle() {
    const [active, setActive] = useState("monthly");

    return (
        <div className="inline-flex rounded-full self-start bg-[#0B1C2D] p-1">
            <button
                onClick={() => setActive("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
          ${
                    active === "monthly"
                        ? "bg-[#4DA3FF] text-black shadow"
                        : "text-white/80 hover:text-white"
                }`}
            >
                Monthly
            </button>

            <button
                onClick={() => setActive("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
          ${
                    active === "yearly"
                        ? "bg-[#4DA3FF] text-black shadow"
                        : "text-white/80 hover:text-white"
                }`}
            >
                Yearly
            </button>
        </div>
    );
}
