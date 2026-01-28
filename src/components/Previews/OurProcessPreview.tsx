import ProcessSteps from "@/components/elements/ProcessStep";

export default function OurProcessPreview () {
    return (
        <section className="w-full px-[20%] max-sm:gap-y-5 max-sm:px-[5%] bg-white  items-center max-sm:items-start flex gap-y-10 py-20 flex-col ">
            <p className={"text-[#038EF0] font-bold"}>OUR PROCESS</p>
            <h3 className="text-4xl max-sm:text-3xl  text-center max-sm:text-left font-bold text-[#0B0331]">
                Our Roadmap to <br/>
                Financial Excellence.
            </h3>
            <p className="lg:max-w-sm font-sans text-sm max-sm:mb-4 max-sm:text-left text-center text-[#0B0331]">
                Every client arrives with a different starting point.
                Our process adapts to your reality while staying anchored in professional standards.
                Structured, thoughtful, and designed to move you forward with confidence.
            </p>
            <ProcessSteps/>
        </section>
    )
}