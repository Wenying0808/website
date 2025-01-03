'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    src: string,
    company?: string,
    product?: string,
    role?: string,
    year?: string,
}

export const SectionLanding = ({ src, product, role }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay to allow for the fade-in effect

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className="w-full relative">
            <div className={`absolute top-0 left-0 p-2 sm:p-4 bg-white text-black text-xs sm:text-sm text-center w-full transition-opacity delay-200 duration-500 ${isVisible ? 'opacity-40' : 'opacity-0'}`}>
                {product} | {role} 
            </div>
            <Image 
                src={src} 
                alt="LandingImage" 
                width={2000} 
                height={1000}
            />
        </div>
    )
}