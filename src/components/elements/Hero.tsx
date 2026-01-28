import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full lg:h-[80vh] bg-[#0B0331] flex flex-col items-center lg:items-start justify-center gap-10 py-20 px-5 sm:px-10 md:px-20 lg:px-[15%]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white lg:text-left text-center leading-10 lg:leading-[1.2]">

                Professional
                <span className="text-[#038EF0]"> Accounting <br /> &   </span> Tax Advisory
            </h2>
            <p className="text-sm font-sans sm:text-base lg:text-left md:text-lg  text-center max-w-md lg:max-w-lg">
                Welcome to OCTA (Oxen Chartered Tax Advisors) -
                where tax doesn’t have to be taxing. We demystify the complex and find the fun in smart finance.
            </p>
            <div className="flex font-sans flex-col max-sm:text-sm sm:flex-row gap-2 sm:gap-5">
                <Link
                    href="/contact"
                    className="font-semibold text-[#0B0331] bg-white rounded-full py-2 px-6 text-center"
                >
                    Talk to an advisor
                </Link>
                <Link
                    href="/services"
                    className="border border-white rounded-full font-bold py-2 px-6 text-center text-white"
                >
                    Learn More
                </Link>
            </div>
        </section>
    )
}