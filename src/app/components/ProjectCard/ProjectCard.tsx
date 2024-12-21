"use client";

import Image from "next/image";
import { ChipOnProjectCard } from "../ChipOnProjectCard/ChipOnProjectCard";
import Link from "next/link";

interface Props {
    projectTitle: string,
    projectDescription: string,
    chipNames: string[],
    img: string,
    projectLink: string,
}

export const ProjectCard = ({ projectTitle, projectDescription, chipNames, img, projectLink }: Props) => {
    return(
        <Link
            href={projectLink}
            className="xs:max-w-xs sm:max-w-smm md:max-w-md flex-col space-y-0 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer">
            <Image src={img} alt={projectTitle} width={1000} height={200} className="rounded-tl-xl rounded-tr-xl "/>
            <div className="flex-col space-y-2 p-4">
                <h2 className="text-base sm:text-lg font-semibold">{projectTitle}</h2>
                <div className="flex space-x-2">
                    {chipNames.map(name => (
                        <ChipOnProjectCard key={name} name={name} />
                    ))}
                </div>
                <p className="text-xs sm:text-sm">{projectDescription}</p>
            </div>
        </Link>
    )
}
