"use client"

import { useState } from "react";
import Link from "next/link";
import {Menu, X} from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full  max-sm:border-b z-30 top-0 text-white bg-[#0B0331] px-5 sm:px-10 md:px-20 lg:px-[15%] py-5 max-md:fixed ">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h1 className="font-bold text-2xl border-[#05001B] text-[#0B0331] border-4 rounded-xl p-4 bg-[#038EF0]">OCTA</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-x-5 text-sm">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/ask-akwande">Ask-Akwande</Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="flex flex-col gap-3 mt-4 md:hidden text-center">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    <Link href="/ask-akwande" onClick={() => setIsOpen(false)}>Ask-Akwande</Link>
                </nav>
            )}
        </header>
    );
}
