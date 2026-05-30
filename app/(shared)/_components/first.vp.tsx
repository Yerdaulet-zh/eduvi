import Image from "next/image";

export function FirstVP() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-[clamp(0rem,5vw,4rem)] font-metropolis gap-9">
            <div className="flex flex-col justify-center">
                <div className="bg-[#FFFFFF] p-4 rounded-[10px] text-[#FF6652] font-medium text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] w-fit">
                    <p>Never Stop Learning</p>
                </div>
                <div className="pt-2 font-bold text-[1.6rem] sm:text-[2.0rem] md:text-[3rem] lg:text-[3.8rem] leading-[2rem] sm:leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">
                    <p>Grow up your skills by online courses with Eduvi</p>
                </div>
                <div className="font-normal pt-1 text-[#5D5A6F] text-1rem md:text-1.2rem">
                    <p>Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.</p>
                </div>
            </div>

            <div className="relative flex justify-center items-center p-12">

                <div className="relative w-full max-w-[clamp(320px,40vw,480px)] aspect-[4/5]">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://pub-51f3f731af484f6bb32052dee9595dd9.r2.dev/test/icons/boook-boy-bg.svg"
                            alt=""
                            fill
                            className="object-contain"
                            unoptimized={true}
                            priority
                        />
                    </div>

                    <div className="absolute inset-0 z-10">
                        <Image
                            src="https://pub-51f3f731af484f6bb32052dee9595dd9.r2.dev/test/icons/book-boy.svg"
                            alt="Student"
                            fill
                            className="object-contain"
                            unoptimized={true}
                            priority
                        />
                    </div>

                    <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white p-4 rounded-2xl shadow-[0px_25px_70px_0px_rgba(10,3,60,0.15)] z-20">
                        <div className="relative w-full h-full">
                            <Image src="https://pub-51f3f731af484f6bb32052dee9595dd9.r2.dev/test/icons/book-boy-top-left.svg" alt="" fill className="object-contain" />
                        </div>
                    </div>

                    <div className="absolute top-10 -right-6 w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white p-4 rounded-2xl shadow-[0px_25px_70px_0px_rgba(10,3,60,0.15)] z-20">
                        <div className="relative w-full h-full">
                            <Image src="https://pub-51f3f731af484f6bb32052dee9595dd9.r2.dev/test/icons/book-boy-top-right.svg" alt="" fill className="object-contain" />
                        </div>
                    </div>

                    <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white p-4 rounded-2xl shadow-[0px_25px_70px_0px_rgba(10,3,60,0.15)] z-20">
                        <div className="relative w-full h-full">
                            <Image src="https://pub-51f3f731af484f6bb32052dee9595dd9.r2.dev/test/icons/book-boy-mid-left.svg" alt="" fill className="object-contain" />
                        </div>
                    </div>

                    <div className="absolute bottom-10 -right-10 w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white p-4 rounded-2xl shadow-[0px_25px_70px_0px_rgba(10,3,60,0.15)] z-20">
                        <div className="relative w-full h-full">
                            <Image src="https://pub-51f3f731af484f6bb32052dee9595dd9.r2.dev/test/icons/book-boy-bottom-right.svg" alt="" fill className="object-contain" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
