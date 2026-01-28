import Link from "next/link";
import {Copyright, Facebook, Instagram} from "lucide-react";


export default function Footer() {
    return (
        <footer className={"w-full gap-y-15 z-30 top-0 items-center bg-[#05001B] px-[15%] max-sm:px-[3%] py-10 text-white flex flex-col"}>
            <div className="w-full flex max-sm:flex-col gap-y-5  justify-between max-sm:text-center">
                <h1 className="font-medium max-sm:text-sm font-space text-xl">Oxen Chartered Tax Advisors</h1>
                <form className="border flex max-sm:w-full max-sm:flex-col gap-y-4  border-white text-black bg-white justify-stretch w-[40%] rounded-2xl">
                    <input type={"email"} className={"outline-none px-5 py-2 flex-1"} />
                    <button className="self-end max-sm:w-full rounded-2xl px-8 text-white bg-black p-3">Subscribe</button>
                </form>
            </div>
            <div className="flex gap-x-5">
                <Facebook />
                <Instagram />
            </div>
            <nav className={"flex justify-center max-sm:flex-col col-start-2 text-sm gap-y-5 items-center gap-x-5 w-full"}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/services"}>Services</Link>
                <Link href={"/contact"}>Contact Us</Link>
                <Link href={"/ask-akwande"}>Ask-Akwande</Link>
            </nav>
            <div className="flex max-sm:flex-col gap-y-2 max-sm:text-sm w-full max-sm:text-center justify-center items-center gap-x-2">
                <Copyright size={20} />
                Oxen Chartered Tax Advisors, <br className={"hidden max-sm:block"} />
                All rights reserved.
            </div>
        </footer>
    )
}