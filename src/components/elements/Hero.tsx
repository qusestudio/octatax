import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-[90vh] flex flex-col max-sm:items-center justify-center relative bg-[#0B0331] ">
            <div className="inset-0 h-full absolute">
                <Image
                    src={"/hero.jpg"}
                    alt={"Hero Image"}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex z-20  absolute flex-col items-center lg:items-start justify-center gap-10 py-20 lg:pt-40 px-5 sm:px-10 md:px-20 lg:px-[15%]">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white lg:text-left text-center leading-10 lg:leading-[1.2]">
                    Professional
                    <span className="text-[#038EF0]"> Accounting <br />
                    &</span> Tax Advisory
                </h2>
                <p className=" font-sans font-light sm:text-base lg:text-left  text-center max-w-md lg:max-w-lg">
                    Welcome to OCTA -
                    where tax doesn’t have to be taxing. We demystify the complex and find the fun in smart finance.
                </p>
                <div className="flex font-sans flex-col max-sm:text-sm sm:flex-row gap-2 sm:gap-5">
                    <Link
                        href="/contact"
                        className="font-medium text-[#0B0331] bg-white rounded-md py-2 px-6 text-center"
                    >
                        Talk to an advisor
                    </Link>
                    <Link
                        href="/services"
                        className="border border-white rounded-md font-bold py-2 px-6 text-center text-white"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    )
}