import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";

export default function About() {
    return (
        <div className="flex flex-col  min-h-screen items-center justify-center  font-sans">
            {/* Header */}
            <main className="flex text-white min-h-screen w-full  flex-col items-center  sm:items-start">
                <section className="w-full relative  bg-[#0B0331] max-sm:py-[10%] flex flex-col items-center gap-y-10 py-[5%]">
                    <div className="flex z-10 px-[15%] max-md:pt-20 w-full max-sm:px-[5%] flex-col  gap-y-2">
                        <h1 className="text-6xl font-space max-md:text-4xl font-light">
                            Who we are
                        </h1>
                        <p className="text-xl font-light  max-md:text-sm">
                            We're here to help you set your business right.
                        </p>
                    </div>
                </section>
                <section className={"bg-white gap-y-10 flex h-full flex-col text-[#0B0331] max-sm:px-[5%] px-[15%] py-[10%] w-full"}>
                    <div className="flex flex-col gap-y-5">
                        <h3 className={"text-4xl max-sm:text-2xl font-semibold font-space"}>Our Mission</h3>
                        <p className="max-w-3xl max-sm:text-sm text-lg">
                            To simplify accounting and tax compliance through clear guidance, fair pricing, and dependable support.
                            We exist to remove confusion, reduce stress, and help individuals and businesses meet their obligations with confidence.
                            Professional standards, delivered in a way that people can actually understand.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h3 className={"text-4xl max-sm:text-2xl  font-semibold font-space"}>Our Vision</h3>
                        <p className="max-w-3xl max-sm:text-sm text-lg">
                            A future where accounting and tax compliance are not barriers to progress.
                            Where individuals and businesses of all sizes have access to trusted advice and clear financial direction.
                            Empowered people make stronger decisions and build stronger economies.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h3 className={"text-4xl max-sm:text-2xl font-semibold font-space"}>Our Goal</h3>
                        <p className="max-w-3xl max-sm:text-sm text-lg">
                            To make compliant, well-managed finances the norm, not the exception.
                            We aim to support sustainable growth, protect our clients from unnecessary risk,
                            and build long-term financial confidence.
                            Simple systems. Clear advice. Lasting impact.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}