interface Props{
    paragraph: string
}

export function SectionParagraph({paragraph}: Props){
    return(
        <p className="text-header-light dark:text-header-dark text-center text-xs sm:text-base max-w-[600px]">
            {paragraph}
        </p>
    )
}