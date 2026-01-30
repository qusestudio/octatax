import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";

export default function About() {
    return (
        <div className="flex flex-col  min-h-screen items-center justify-center  font-sans">
            {/* Header */}
            <main className="flex text-white  min-h-screen w-full  flex-col items-center  sm:items-start">
                <section className="w-full relative md:py-[10%_5%] bg-[#0B0331] max-sm:py-[10%] flex flex-col items-center gap-y-10 py-[5%]">
                    <div className="flex z-10 px-[15%] max-md:pt-22 w-full max-sm:px-[5%] flex-col  gap-y-2">
                        <h1 className="text-6xl font-space max-md:text-2xl font-light">
                            Who we are
                        </h1>
                        <p className="text-xl font-light  max-md:text-sm">
                            We're here to help you set your business right.
                        </p>
                    </div>
                </section>
                <section className={"bg-white font-sans gap-y-5 flex h-full flex-col text-[#0B0331] max-sm:px-[5%] px-[15%] py-[5%] w-full"}>
                    <h3 className={"text-4xl max-sm:text-2xl font-semibold font-space"}>About Us</h3>
                    <div className="flex flex-col gap-y-5">
                        <p className="list-disc font-sans max-sm:text-sm text-lg">
                            Oxen Chartered Tax Advisors is here to change the entire story about accounting. Our drive is to transform tax from a daunting obligation into an understandable part of your journey.
                            Through clear education and a fresh perspective, we're making smart finance approachable, and yes, fun for all.
                            Let's change the narrative together.
                        </p>
                        <p className="max-sm:text-sm text-lg">
                            We're a company with multi-disciplined  professionals providing various services in the field of accounting, taxation, estate planning, administration of deceased estates and associated legal services.
                        </p>
                        <p className="max-sm:text-sm text-lg">
                            Our director and partner professionals consist of Chartered Accountants (SA), Professional Accountants (SA), Master Tax Practitioners (SA), and Legal Professionals (Advocate and Attorney).
                        </p>
                    </div>
                </section>
                <section className={"bg-white gap-y-10 gap-x-2 flex max-md:flex-col h-full  text-[#0B0331] max-sm:px-[5%] px-[15%] py-[1%_10%] w-full"}>
                    <div className="flex flex-col gap-y-5">
                        <h3 className={"text-4xl max-sm:text-xl font-semibold font-space"}>Our Mission</h3>
                        <p className="max-w-3xl max-sm:text-sm text-lg">
                            To demystify tax and accounting by making it genuinely understandable and even enjoyable.
                            We empower every client with clear knowledge and proactive strategies.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h3 className={"text-4xl max-sm:text-xl  font-semibold font-space"}>Our Vision</h3>
                        <p className="max-w-3xl max-sm:text-sm text-lg">
                            A world where everyone approaches finance with confidence, not dread.
                            We are changing the narrative of accounting from a complex obligation to an accessible tool for growth.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h3 className={"text-4xl max-sm:text-xl font-semibold font-space"}>Our Goal</h3>
                        <p className="max-w-3xl max-sm:text-sm text-lg">
                            To be the trusted guide that transforms your relationship with tax.
                            We measure success by your clarity, confidence, and sense of control.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}