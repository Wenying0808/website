interface Props {
    name: string
}
export const ChipOnProjectCard = ({ name }: Props) => {
    return(
        <div className="bg-secondary text-primary-light px-2 py-1 rounded text-[11px] sm:text-xs font-medium">
            {name}
        </div>
    )
}