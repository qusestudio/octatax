import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import Image from "next/image";



export default function Services() {
    const services = [
        {
            title: "Financial Accounting",
            image: "tax_r.png",
            items: ["Annual Financial Statements","Monthly Accounting"],
            accent: "bg-[#2563EB]", // blue
        },
        {
            title: "Accounting Officer Reports",
            image: "tax_r.png",
            items: ["Audits","Independent Reviews"],
            accent: "bg-[#2563EB]", // blue
        },
        {
            title: "Tax Administration",
            image: "tax_r.png",
            items: ["Income Tax", "Employee Tax", "SARS Audits & Queries", "Tax Clearance Certificates", "Tax Directives", "VAT"],
            accent: "bg-[#FACC15]", // yellow
        },
        {
            title: "Registrations",
            image: "tax_r.png",
            items: ["CIDB & CSD", "Companies", "Income Tax", "NPO & PBO", "Trusts", "VAT"],
            accent: "bg-[#22C55E]", // green
        },
        {
            title: "Tax & Estate Planning",
            image: "tax_r.png",
            items: ["Estate Structures", "Financial Structures", "Last will & testaments", "Tax Structures", "Trust Deeds"],
            accent: "bg-[#A855F7]", // purple
        },
        {
            title: "Commercial Law",
            image: "tax_r.png",
            items: ["Credit agreements", "Insurance", "Law of contracts", "Master of Court", "Personal Liabilities (CIPC)"],
            accent: "bg-[#A855F7]", // purple
        },
    ];
    return (
        <div className="flex flex-col min-h-screen items-center justify-center  font-sans">
            {/* Header */}
            <main className="flex text-white w-full  flex-col items-center  sm:items-start">
                <section className="w-full relative md:py-[10%_5%] bg-[#0B0331]  flex flex-col items-center max-sm:py-[10%] gap-y-10 py-[5%]">
                    <div className="flex z-10 px-[15%] max-md:pt-20 w-full max-sm:px-[5%] flex-col  gap-y-2">
                        <h1 className="text-6xl font-space max-md:text-2xl font-light">
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
                                    <p className="text-2xl max-sm:text-xl text-center font-space font-bold">{service.title}</p>
                                    <div className={"text-lg max-sm:text-sm text-center"}>
                                        {
                                            service.items.map((item, key)=> (
                                                <p className="list-decimal underline" key={key}>{item}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        )
                    }
                </section>
            </main>
        </div>
    )
}