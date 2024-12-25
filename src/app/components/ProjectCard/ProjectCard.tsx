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
            className="xs:max-w-xs sm:max-w-smm md:max-w-md flex-col space-y-0 bg-background-light-0 dark:bg-background-dark-0 dark:border dark:border-solid dark:border-background-dark-3 dark:hover:border-indigo-400 rounded-2xl shadow-md hover:shadow-card-hover cursor-pointer">
            <Image src={img} alt={projectTitle} width={1000} height={200} className="rounded-tl-xl rounded-tr-xl "/>
            <div className="flex-col space-y-2 p-4">
                <h2 className="text-base sm:text-lg font-semibold text-header-light dark:text-header-dark">{projectTitle}</h2>
                <div className="flex space-x-2">
                    {chipNames.map(name => (
                        <ChipOnProjectCard key={name} name={name} />
                    ))}
                </div>
                <p className="text-xs sm:text-sm text-paragraph-light dark:text-paragraph-dark">{projectDescription}</p>
            </div>
        </Link>
    )
}
