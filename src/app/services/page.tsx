import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import Image from "next/image";



export default function Services() {
    const services = [
        {
            title: "Monthly Accounting",
            image: "tax_r.png",
            description:
                "Streamlined monthly accounting services for individuals and businesses, covering bookkeeping, reconciliations, and financial reporting, so you stay organized, compliant, and always ready for tax season.",
            accent: "bg-[#2563EB]", // blue
        },
        {
            title: "Tax Registration",
            image: "tax_r.png",
            description:
                "Comprehensive SARS registration services for individuals and businesses, including VAT, PAYE, and all related tax accounts, ensuring full compliance from the outset.",
            accent: "bg-[#2563EB]", // blue
        },
        {
            title: "Company Registration",
            image: "tax_r.png",
            description:
                "End-to-end CIPC company incorporation, statutory amendments, and ongoing compliance advisory, tailored to your business objectives.",
            accent: "bg-[#FACC15]", // yellow
        },
        {
            title: "Trust Registration",
            image: "tax_r.png",
            description:
                "Professional trust formation, documentation, and regulatory guidance in accordance with South African legal requirements.",
            accent: "bg-[#22C55E]", // green
        },
        {
            title: "NPO & PBO Registration",
            image: "tax_r.png",
            description:
                "Expert facilitation of non-profit organisation registration and continued support for statutory compliance and governance.",
            accent: "bg-[#A855F7]", // purple
        },
        {
            title: "Annual Financial Statements",
            image: "tax_r.png",
            description:
                "Preparation of fully compliant annual financial statements and management reports, providing clarity for strategic decision-making.",
            accent: "bg-[#F97316]", // orange
        },
        {
            title: "Audits",
            image: "tax_r.png",
            description:
                "Independent audit and review services conducted in strict alignment with applicable professional standards, ensuring integrity and transparency.",
            accent: "bg-[#0EA5E9]", // sky
        },
        {
            title: "SARS Queries",
            image: "tax_r.png",
            description:
                "Efficient management of SARS assessments, verifications, objections, and all correspondence, safeguarding your interests at every stage.",
            accent: "bg-[#EF4444]", // red
        },
        {
            title: "Estate Duties",
            image: "tax_r.png",
            description:
                "Comprehensive estate administration, including preparation of returns and precise duty calculations, delivered with sensitivity and expertise.",
            accent: "bg-[#64748B]", // slate
        },
    ];
    return (
        <div className="flex flex-col min-h-screen items-center justify-center  font-sans">
            {/* Header */}
            <main className="flex text-white w-full  flex-col items-center  sm:items-start">
                <section className="w-full relative  bg-[#0B0331]  flex flex-col items-center max-sm:py-[10%] gap-y-10 py-[5%]">
                    <div className="flex z-10 px-[15%] max-md:pt-20 w-full max-sm:px-[5%] flex-col  gap-y-2">
                        <h1 className="text-6xl font-space max-md:text-3xl font-light">
                            OCTA at your service
                        </h1>
                        <p className="text-xl font-light  max-md:text-sm">
                            We're here to help you set your business right.
                        </p>
                    </div>
                </section>
                <section className={"bg-white h-full grid max-sm:grid-cols-1 grid-cols-3 gap-y-10 text-[#0B0331] px-[15%] py-[10%] w-full"}>
                    {
                        services.map(
                            (service, index) => (
                                <div key={index} className="w-full flex items-center flex-col gap-y-5">
                                    <Image
                                        src={`/${service.image}`}
                                        className="rounded-full"
                                        alt={"image"}
                                        height={100}
                                        width={100}
                                    />
                                    <p className="text-2xl text-center font-space font-bold">{service.title}</p>
                                    <p className={"text-lg max-sm:text-sm text-center"}>
                                        {service.description}
                                    </p>
                                </div>
                            )
                        )
                    }
                </section>
            </main>
        </div>
    )
}