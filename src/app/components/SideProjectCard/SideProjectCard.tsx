"use client";

import Image from "next/image";
import { ChipOnProjectCard } from "../ChipOnProjectCard/ChipOnProjectCard";
import Link from "next/link";
import { IconButtonWithTooltip } from "../IconButtonWithTooltip/IconButtonWithTooltip";
import CodeIcon from '@mui/icons-material/Code';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

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
            className="flex gap-4 flex-col md:flex-row max-w-[240px] md:max-w-[520px] p-4 bg-background-light-0 dark:bg-background-dark-0 rounded-xl shadow-md hover:hover:shadow-card-hover dark:border-solid dark:border dark:border-background-dark-3 dark:hover:border-primary-dark">
            <Image src={img} alt={projectTitle} width={240} height={200} className="rounded-md"/>
            <div className="flex flex-col gap-2 justify-between">
                <div className="flex-col space-y-2">
                    <h2 className="text-base sm:text-lg font-semibold text-header-light dark:text-header-dark">{projectTitle}</h2>
                    <div className="flex space-x-2">
                        {chipNames.map(name => (
                            <ChipOnProjectCard key={name} name={name} />
                        ))}
                    </div>
                    <p className="text-xs sm:text-sm text-paragraph-light dark:text-paragraph-dark">{projectDescription}</p>
                </div>
                <div className="flex flex-row gap-1 justify-end">
                    {githubLink && <Link href={githubLink} target="_blank"><IconButtonWithTooltip icon={<CodeIcon/>} label="Open Github"/></Link>}
                    {projectLink && <Link href={projectLink} target="_blank"><IconButtonWithTooltip icon={<ViewInArIcon/>} label="View Project"/></Link>}
                </div>
            </div>
        </div>
    )
}
