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
            className="max-w-80 flex-col space-y-0 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer">
            <div className="container rounded-tl-xl rounded-tr-xl bg-slate-400">
                <Image src={img} alt={projectTitle} width={1000} height={200} className="rounded-tl-xl rounded-tr-xl "/>
            </div>
            <div className="flex-col space-y-2 p-4">
                <h2 className="text-base sm:text-lg font-bold">{projectTitle}</h2>
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
