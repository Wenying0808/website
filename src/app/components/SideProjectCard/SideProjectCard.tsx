"use client";

import Image from "next/image";
import { ChipOnProjectCard } from "../ChipOnProjectCard/ChipOnProjectCard";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface Props {
    img: string,
    projectTitle: string,
    projectDescription: string,
    projectLink?: string,
    githubLink?: string,
    chipNames: string[],
}

export const SideProjectCard = ({ img, projectTitle, projectDescription, projectLink, githubLink, chipNames }: Props) => {
    return(
        <div
            className="flex gap-4 flex-col md:flex-row max-w-[240px] md:max-w-[520px] p-4 bg-white rounded-xl shadow-md hover:shadow-card-hover">
            <Image src={img} alt={projectTitle} width={240} height={200} className="rounded-md"/>
            <div className="flex flex-col gap-2 md:justify-between">
                <div className="flex-col space-y-2">
                    <h2 className="text-base sm:text-lg font-semibold">{projectTitle}</h2>
                    <p className="text-xs sm:text-sm">{projectDescription}</p>
                    <div className="flex space-x-2">
                        {chipNames.map(name => (
                            <ChipOnProjectCard key={name} name={name} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-row gap-4 justify-end">
                    {githubLink && <Link href={githubLink} target="_blank" className="text-header hover:text-primary hover:cursor-pointer"><CodeIcon/></Link>}
                    {projectLink && <Link href={projectLink} target="_blank" className="text-header hover:text-primary hover:cursor-pointer"><OpenInNewIcon/></Link>}
                </div>
            </div>
        </div>
    )
}
