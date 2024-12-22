import Image from "next/image";

interface Props{
    img: string,
    title: string,
    description?: string
}

export const IllustrationDescriptionBlock = ({img, title, description}: Props) => {
    return(
        <div className="flex flex-col gap-2 justify-items-center">
            <div className="flex justify-center items-center">
                <Image src={img} alt={title} width={200} height={200}/>
            </div>
            <div className="flex flex-col gap-1 max-w-[360px]">
                <h2 className="text-base font-semibold text-center break-words">{title}</h2>
                <p className="text-sm text-textParagraph font-medium text-center break-words">{description}</p>
            </div>
        </div>
    )
}