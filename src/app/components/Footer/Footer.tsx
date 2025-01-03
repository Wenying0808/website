import Image from "next/image";
import Link from "next/link";

import { GitHubIcon } from "@/app/components/icons/GitHub/GitHubIcon";
import { LinkedInIcon } from "@/app/components/icons/LinkedIn/LinkedInIcon";
import { MediumIcon } from "@/app/components/icons/Medium/MediumIcon";
import { FigmaIcon } from "@/app/components/icons/Figma/FigmaIcon";

export const Footer = () => {
    const socialInfo = [
        {
            icon: <LinkedInIcon/>,
            alt: 'linkedin',
            url: 'https://www.linkedin.com/in/wen-ying-chang-b5539a165/',
        },
        {
            icon: <GitHubIcon/>,
            alt: 'github',
            url: 'https://github.com/Wenying0808',
        },
        {
            icon: <FigmaIcon/>,
            alt: 'figma',
            url: '',
        },
        {
            icon: <MediumIcon/>,
            alt: 'medium',
            url: 'https://changwenyingnl.medium.com/',
        },    
    ]

    return(
        <div className="flex flex-row w-full gap-4 md:gap-6 p-8 place-content-center">
            {socialInfo.map(item => (
                <Link 
                    key={item.alt} 
                    href={item.url}
                    target="_blank"
                    className="hover:cursor-pointer hover:scale-125 text-primary-light dark:text-primary-dark"
                >
                    {item.icon}
                </Link>
               
            ))}
        </div>
    )
}