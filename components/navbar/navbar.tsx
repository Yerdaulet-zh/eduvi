import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between py-5 sticky top-0 z-50 bg-[#F7F5FA]">
            <div>
                <Image
                    src="https://pub-51f3f731af484f6bb32052dee9595dd9.r2.dev/test/brand/logo.svg"
                    alt="logo with the name of eduvi"
                    width={114}
                    height={30}
                    loading="eager"
                />
            </div>
            <div>
                <div className="flex justify-end items-center md:gap-5 sm:gap-0.5 text-base font-metropolis font-medium">
                    <div className="flex items-center gap-2.5">
                        <h1>Cart (0)</h1>
                        <Image
                            src="/icons/shopping-bag.svg"
                            alt="shopping cart with items in navbar"
                            width={30}
                            height={30}
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-[30px] md:h-[30px]"
                        />
                    </div>
                    <div className="flex items-center gap-2.5">
                        <h1>My Account</h1>
                        <Image
                            src="/icons/profile.svg"
                            alt="my account"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="flex items-center gap-2.5">
                        <h1>Menu</h1>
                        <Image
                            src="/icons/menu.svg"
                            alt="shopping cart with items in navbar"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
            </div>
        </nav>

    );
}