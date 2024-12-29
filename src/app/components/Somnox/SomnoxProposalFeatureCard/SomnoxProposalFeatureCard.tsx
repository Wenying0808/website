interface Props{
    icon: React.ReactElement,
    label: string,
}

export const SomnoxProposalFeatureCard = ({icon, label}: Props) => {
    return(
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 hover:bg-white hover:shadow-lg hover:dark:bg-background-dark-2 rounded-xl p-4">
            <div className="flex items-center justify-center text-primary-light dark:text-primary-dark">
                {icon}
            </div>
            <div className="flex flex-col gap-1 max-w-[400px]">
                <p className="text-xs sm:text-sm text-paragraph-light dark:text-paragraph-dark font-medium text-center sm:text-left break-words">{label}</p>
            </div>
        </div>
    )
}