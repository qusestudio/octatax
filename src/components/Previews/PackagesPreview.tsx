import BillingToggle from "@/components/elements/BillingToggle";

export default function PackagesPreview() {
    return (
        <section className="w-full px-[20%] max-sm:px-[5%] bg-[#0B0331] h-screen max-sm:h-full flex max-sm:gap-y-5 gap-y-15 max-sm:py-10  py-20 flex-col ">
            <p className={"text-[#038EF0] font-bold"}>PACKAGES</p>
            <div className="flex gap-y-0 py-2 max-sm:flex-col justify-between w-full">
                <h3 className="text-4xl max-sm:text-3xl font-bold text-white">
                    Tailored Solutions <br/>
                    to Fit Financial Needs.
                </h3>
                <div className={"flex flex-col gap-y-5"}>
                    <p className="lg:max-w-sm text-sm text-white">
                        Choose between our Basic and Standard packages for flexible, reliable financial support tailored to your needs.
                    </p>
                    <BillingToggle/>
                </div>
            </div>
            <div className="w-full gap-x-5 max-sm:gap-y-5 grid max-sm:grid-cols-1 grid-cols-[35%_65%] lg:h-[60vh] max-sm:h-[90vh] rounded-2xl">
                <section className={"bg-[#038EF0] h-[80%] max-sm:h-[30vh] rounded-2xl"}>
                    {/*  TODO: Images  */}
                </section>
                <section className="flex flex-col gap-y-3 w-full h-full">
                    <div className={"bg-[#038EF0] grid max-sm:grid-cols-1 grid-cols-2 p-7 w-full h-full rounded-2xl"}>
                        {/*  TODO: BASIC PLAN  */}
                        <p className="text-black font-semibold text-2xl">
                            Basic Plan
                        </p>
                        <ul>
                            <li className="text-black">
                                Benefit #1
                            </li>
                            <li className="text-black">
                                Benefit #1
                            </li>
                            <li className="text-black">
                                Benefit #1
                            </li>
                        </ul>
                    </div>
                    <div className={"bg-[#038EF0] grid max-sm:grid-cols-1 grid-cols-2 p-7 w-full h-full rounded-2xl"}>
                        {/*  TODO: STANDARD PLAN  */}
                        <p className={"text-2xl font-semibold text-black"}>
                            Standard Plan
                        </p>
                        <ul>
                            <li className="text-black">
                                Benefit #1
                            </li>
                            <li className="text-black">
                                Benefit #1
                            </li>
                            <li className="text-black">
                                Benefit #1
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    )
}