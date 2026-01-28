import Link from "next/link";
import ServiceCardMotion from "@/components/elements/ServiceCard";
import Image from "next/image";

export default function OurServicesPreview() {
    return (
        <section className="w-full max-sm:h-full px-[20%] max-sm:px-[5%]  bg-white h-screen flex gap-y-15 max-sm:gap-y-10  py-20 flex-col ">
            <p className={"text-[#038EF0] font-bold"}>OUR SERVICES</p>
            <div className="flex max-sm:flex-col gap-y-5 justify-between w-full">
                <h3 className="text-4xl max-sm:text-3xl font-bold text-[#0B0331]">
                    Innovative Solutions <br/>
                    for Modern Accounting.
                </h3>
                <div className={"flex flex-col gap-y-5"}>
                    <p className="lg:max-w-sm font-sans text-sm text-[#0B0331]">
                        Behind every form, filing, and deadline is a real life in motion.
                        Our job is to step in where complexity begins, handling the registrations, reports, and regulations that slow you down.
                        So your focus stays where it belongs. Building, providing, and moving forward.
                    </p>
                    <Link href={"/services"}
                          className={"font-bold text-[#0B0331] bg-[#038EF0] rounded-full self-start p-2 px-5"}>Explore
                        All Services</Link>
                </div>
            </div>
            <div className="w-full bg-[#D9D9D9] relative h-[40vh] max-sm:h-[50vh] grid max-sm:grid-cols-1 sm:p-2 grid-cols-2  rounded-2xl">\
                <Image
                    src={"/tax_c.jpeg"}
                    alt={""}
                    fill
                    className="object-cover rounded-2xl"
                />
                <ServiceCardMotion />
            </div>
        </section>
    )
}