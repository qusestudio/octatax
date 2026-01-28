import ProcessSteps from "@/components/elements/ProcessStep";
import Link from "next/link";
import Image from "next/image";

export default function AboutUsPreview(){
    return (
        <section className="w-full px-[20%] max-sm:px-[5%] bg-[#DDF1FF] sm:h-screen max-sm:gap-y-5 flex gap-y-15  py-20 flex-col ">
            <p className={"text-[#038EF0] font-bold"}>ABOUT US</p>
            <div className="flex max-sm:flex-col max-sm:gap-y-5 justify-between w-full">
                <h3 className="text-4xl max-sm:text-3xl font-bold text-[#0B0331]">
                    Empowering Financial <br/>
                    Growth and Stability.
                </h3>
                <div className={"flex flex-col gap-y-5"}>
                    <p className="lg:max-w-sm text-sm font-sans text-[#0B0331]">
                        From taxes, registrations to planning for the future, we guide you every step of the way with patience and care.
                        At Oxen Chartered Tax Advisors, we’re here to make financial confidence feel simple, achievable, and personal.
                    </p>
                    <Link href={"#"}
                          className={"font-bold text-[#0B0331] bg-[#038EF0] rounded-full self-start p-2 px-5"}>More
                        About Us</Link>
                </div>
            </div>
            <div className="w-full  grid gap-y-5 p-5 max-sm:px-0 max-sm:grid-cols-1 grid-cols-[30%_70%] h-full sm:h-[40vh] rounded-2xl">
                <div className="flex text-[#0B0331] flex-col py-10 text-xl max-sm:text-sm h-full max-sm:gap-x-5 justify-center gap-y-15">
                    <p className="max-sm:text-center">
                        <span className="text-6xl max-sm:text-5xl font-semibold">95%</span> <br/>
                        Client satisfaction
                    </p>
                    <p className="max-sm:text-center">
                        <span className="text-6xl max-sm:text-5xl font-semibold">100+</span> <br/>
                        Individuals & <br/>
                        Businesses assisted
                    </p>
                </div>
                <div className="w-full relative bg-[#7CC8FF] sm:col-start-2  h-[40vh] rounded-2xl">
                    <Image
                        src={"/tax_h.jpg"}
                        alt={""}
                        fill
                        className="object-cover rounded-2xl"
                        />
                    <div className="w-full absolute bg-[#0B0331]/20  h-[40vh] rounded-2xl" />
                </div>
            </div>
        </section>
    )
}