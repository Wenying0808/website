import Image from "next/image";
import Link
 from "next/link";
export const Footer = () => {
    const socialInfo = [
        {
            src:'/icons/ic_social_linkedin.svg',
            alt:'linkedin',
            url:'https://www.linkedin.com/in/wen-ying-chang-b5539a165/',
        },
        {
            src:'/icons/ic_social_github.svg',
            alt:'github',
            url:'https://github.com/Wenying0808',
        },
        {
            src:'/icons/ic_social_figma.svg',
            alt:'figma',
            url:'',
        },
        {
            src:'/icons/ic_social_medium.svg',
            alt:'medium',
            url:'https://changwenyingnl.medium.com/',
        },    
    ]

    return(
        <div className="flex flex-row w-full gap-4 md:gap-6 p-8 place-content-center">
            {socialInfo.map(item => (
                <Link 
                    key={item.alt} 
                    href={item.url}
                    target="_blank"
                >
                    <Image 
                        key={item.alt} 
                        src={item.src} 
                        alt={item.alt} 
                        width={24} 
                        height={24} 
                        className="hover:cursor-pointer hover:scale-125"
                    />
                </Link>
               
            ))}
        </div>
    )
}