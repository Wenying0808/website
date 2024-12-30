import Image from "next/image";

interface Props {
    img: string,
    icon: React.ReactElement,
    title: string,
    description: string[]
}
export const SciaEngineerFeatureCard = ({img, icon, title, description}: Props) => {
    return(
        <div className="flex flex-col sm:flex-row gap-4 p-3 sm:p-4 md:p-8 bg-background-light-1 dark:bg-background-dark-3 rounded-xl shadow-md hover:scale-105">
            <Image src={img} alt={title} width={400} height={300} className="rounded-lg m-h-[300px]"/>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 place-items-center">
                    <div className="flex justify-center place-items-center rounded-full min-w-8 w-8 h-8 text-primary-light dark:text-primary-dark">{icon}</div>
                    <h2 className="text-sm sm:text-base font-medium sm:font-semibold text-header-light dark:text-header-dark max-w-[300px]">{title}</h2>
                </div>
                <div className="flex flex-col gap-1 pl-2 text-xs sm:text-sm">
                    {description.map(li => (
                        <li className="text-paragraph-light dark:text-paragraph-dark">{li}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}