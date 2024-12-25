interface Props{
    title: string
}

export function SectionTitle({title}: Props){
    return(
        <h1 className="text-primary-light dark:text-primary-dark text-xl md:text-2xl font-semibold italic underline underline-offset-8">{title}</h1>
    )
}