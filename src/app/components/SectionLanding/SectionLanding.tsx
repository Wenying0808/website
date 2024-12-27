import Image from "next/image";

interface Props {
    src: string,
    company?: string,
    product?: string,
    role?: string,
    year?: string,
}

export const SectionLanding = ({ src, company, product, role, year }: Props) => {
    return (
        <div className="w-full relative">
            <div className="absolute top-0 left-0 p-2 sm:p-4 bg-white opacity-40 text-black text-xs sm:text-sm text-center w-full">
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