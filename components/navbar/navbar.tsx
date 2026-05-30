import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex flex-row items-center justify-between py-5 z-50 bg-[#F7F5FA]">
            <div className="relative h-8 w-35 sm:h-9 sm:w-45 md:h-10 md:w-60 lg:h-10 lg:w-60">
                <Image
                    src="https://pub-51f3f731af484f6bb32052dee9595dd9.r2.dev/test/brand/logo.svg"
                    alt="logo with the name of eduvi"
                    fill
                    className="object-contain"
                    loading="eager"
                />
            </div>
            <div>
                <div className="flex flex-row gap-2 sm:gap-2.5 md:gap-5 text-[0.9rem] sm:text-base font-metropolis font-medium">
                    <div className="flex flex-row items-center gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-2.5">
                        <h1>Cart (0)</h1>
                        <div className="relative w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7">
                            <Image
                                src="/icons/shopping-bag.svg"
                                alt="shopping cart with items in navbar"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-2.5">
                        <h1>My Account</h1>
                        <div className="relative w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7">
                            <Image
                                src="/icons/profile.svg"
                                alt="my account"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-2.5">
                        <h1>Menu</h1>
                        <div className="relative w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7">
                            <Image
                                src="/icons/menu.svg"
                                alt="shopping cart with items in navbar"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}
