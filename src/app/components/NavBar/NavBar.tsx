'use client'; 
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
    const pathname = usePathname();
    return(
        <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md w-full">
            <div className="flex items-center w-full place-content-between p-2 md:p-4">
                <Image src="/images/ic_websiteLogo.svg" alt="logo" width={48} height={48}/>
                <div className="flex items-center gap-x-4 md:gap-x-6 pr-2">
                    <Link 
                        href="/" 
                        className={`${pathname === '/' ? 'text-primary font-semibold' : 'text-black'} hover:text-primary`}
                    >
                        About
                    </Link>
                    <Link 
                        href="/pages/Work" 
                        className={`${pathname === '/' ? 'text-black' : 'text-primary font-semibold'} hover:text-primary`}
                    >
                        Work
                    </Link>
                </div>
            </div> 
        </div>
    )
}