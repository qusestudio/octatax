
// export default function Contact() {
//     return (
//         <div className="flex flex-col min-h-screen items-center justify-center  font-sans">
//             {/* Header */}
//             <Header/>
//             <main className="flex text-white min-h-screen w-full  flex-col items-center  sm:items-start">
//                 <section className="bg-[#0B0331] pt-30 max-md:pt-30 pb-10 max-sm:px-[5%] px-[15%] w-full">
//                     <p className="text-5xl max-md:text-2xl font-bold">Contact Us</p>
//                 </section>
//                 <section className={"bg-white text-[#0B0331] px-[15%] py-10 h-40 w-full"}>
//                     <h1 className={"text-4xl"}>Our Mission</h1>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     )
// }

"use client"

import {ArrowRight, Check, Instagram, Linkedin, Mail, X} from "lucide-react";
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

export default function Contact() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedValue, setSelectedValue] = useState('');
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Basic validation
        if (!fullName.trim() || !email.trim() || !message.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/mail/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fullName, email, budget: selectedValue, message})
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || 'Submission failed');
            }

            setSuccess(data?.message || 'Thank you for contacting us!');
            setFullName("");
            setEmail("");
            setSelectedValue("")
            setMessage("");
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-white  w-full text-white">
            <section className="w-full relative  bg-[#0B0331] max-sm:py-[10%] flex flex-col items-center gap-y-10 py-[5%]">
                <div className="flex z-10 px-[15%] max-md:pt-20 w-full max-sm:px-[5%] flex-col  gap-y-2">
                    <h1 className="text-6xl font-space max-md:text-4xl font-light">
                        Get in touch
                    </h1>
                    <p className="text-xl font-light  max-md:text-sm">
                        We're here to help you set your business right.
                    </p>
                </div>
            </section>
            {/* Contact Form */}
            <section
                className="w-full flex  justify-center">
                <div className="grid gap-y-5 px-[15%] gap-x-[10%] max-sm:px-[5%] py-[10%] max-sm:grid-cols-1 md:grid-cols-2">
                    <div className="text-black flex flex-col gap-y-1 text-xl">
                        <h2 className="text-6xl max-md:text-5xl max-sm:text-4xl font-space tracking-tight">
                            Contact Us.
                        </h2>
                        <h3 className="text-2xl font-medium max-md:text-lg">
                            Talk to an advisor.
                        </h3>
                        <p className="text-[#333] max-sm:text-sm max-md:text-lg py-5">
                            Book a call with our team, and we'll help you identify the most efficient and effective strategy for your business,
                            complete with a transparent quotation.</p>
                    </div>
                    <div
                        className='  w-full items-center flex flex-col gap-y-5'>
                        <form
                            onSubmit={handleSubmit}
                            className="flex w-full my-5 flex-col gap-y-4"
                        >
                            {error && (
                                <div className="w-[50%] flex max-md:w-[95%] text-red-800 items-center gap-2 rounded p-3">
                                    <span className="border border-[#d4c5a8]/20 rounded-full  bg-red-800/20 p-2"><X /></span> {error}
                                </div>
                            )}
                            {success && (
                                <div className="w-[50%] flex max-md:w-[95%] text-green-800 items-center gap-2 rounded p-3">
                                    <span className="border border-[#d4c5a8]/20 rounded-full  bg-green-800/20 p-2"><Check /></span> {success}
                                </div>
                            )}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                                placeholder="Name"
                                className="p-4 py-6  rounded-xl text-black border border-black placeholder:text-black/40 backdrop-blur-2xl  bg-[#D4C5A8]/5"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                                className="p-4 py-6 text-black border rounded-xl border-black placeholder:text-black/40 backdrop-blur-2xl bg-[#D4C5A8]/5"/>

                            {/*<CustomSelect*/}
                            {/*    options={options}*/}
                            {/*    value={selectedValue}*/}
                            {/*    onChange={setSelectedValue}*/}
                            {/*    placeholder="Please select a project investment range"*/}
                            {/*/>*/}

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                placeholder="How can we help?"
                                className="p-4 max-sm:text-lg text-black border rounded-xl border-black placeholder:text-black/40 backdrop-blur-2xl  bg-[#D4C5A8]/5"/>

                            <button disabled={loading}
                                    className="bg-[#0B0331] max-sm:text-sm rounded-xs text-white p-3 text-lg font-medium">
                                {loading ? 'Sending Message...' : 'Submit'}
                            </button>
                            <p className="text-black">
                                By clicking “Submit” you agree to {" our "}
                                <Link href="#" target="_blank" className="underline">TOS</Link>
                                {' and '}
                                <Link href="#" target="_blank" className="underline">Privacy Policy</Link>
                            </p>
                        </form>

                    </div>
                </div>
                {/*<div className="grid uppercase max-md:grid-cols-1 gap-5 md:col-start-2 grid-cols-3">*/}
                {/*    <Link href="https://www.linkedin.com/company/qvsestudio" target="_blank"*/}
                {/*          className="border flex items-center justify-between bg-[#D4C5A8]/5 gap-5  border-[#D4C5A8]/20 p-5">*/}
                {/*        <span className="flex gap-4"><Linkedin/> Linkedin</span> <ArrowRight/> </Link>*/}

                {/*    <Link href="https://www.instagram.com/qvsestudio/" target="_blank"*/}
                {/*          className="border flex items-center justify-between bg-[#D4C5A8]/5 gap-5  border-[#D4C5A8]/20 p-5">*/}
                {/*        <span className="flex gap-4"><Instagram/> Instagram </span> <ArrowRight/> </Link>*/}
                {/*    <Link href="mailto:hello@qvse.co.za" target="_blank"*/}
                {/*          className="border flex items-center justify-between bg-[#D4C5A8]/5 gap-5  border-[#D4C5A8]/20 p-5">*/}
                {/*        <span className="flex gap-4"><Mail /> email </span> <ArrowRight/> </Link>*/}
                {/*</div>*/}

            </section>
        </main>
    )
}