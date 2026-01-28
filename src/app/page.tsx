import OurServicesPreview from "@/components/Previews/OurServicesPreview";
import AboutUsPreview from "@/components/Previews/AboutUsPreview";
import OurProcessPreview from "@/components/Previews/OurProcessPreview";
import Hero from "@/components/elements/Hero";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-[#0B0331] font-space">
            {/* Header */}
            <main
                className="flex text-white   min-h-screen w-full  flex-col items-center justify-between pt-32 sm:items-start">
                <Hero />
                <OurServicesPreview />
                <AboutUsPreview />
                <OurProcessPreview />
            </main>
        </div>
    );
}
