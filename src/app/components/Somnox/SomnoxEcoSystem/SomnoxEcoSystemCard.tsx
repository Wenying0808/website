interface Props{
    icon: React.ReactElement,
    title: string,
    description?: string
}

export const SomnoxEcoSystemCard = ({icon, title, description}: Props) => {
    return(
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center hover:bg-white hover:shadow-lg hover:dark:bg-background-dark-1 rounded-xl p-4">
            <div className="flex items-center justify-center text-primary-light dark:text-primary-dark">
                {icon}
            </div>
            <div className="flex flex-col gap-1 max-w-[400px]">
                <h2 className="text-sm sm:text-base text-primary-light dark:text-primary-dark font-semibold text-center sm:text-left break-words">{title}</h2>
                <p className="text-xs sm:text-sm text-paragraph-light dark:text-paragraph-dark font-medium text-center sm:text-left break-words">{description}</p>
            </div>
        </div>
    )
}