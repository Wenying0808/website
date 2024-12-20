"use client";
import { ChipOnProjectCard } from "../ChipOnProjectCard/ChipOnProjectCard";

interface Props {
    projectTitle: string,
    projectDescription: string,
    chipNames: string[],
    img: string,
    projectLink: string,
}

export const ProjectCard = ({ projectTitle, projectDescription, chipNames, img, projectLink }: Props) => {
    const handleClick = () => {
        window.open(projectLink, '_blank')
    }
    return(
        <div 
            onClick={handleClick}
            className="flex-col space-y-0 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer">
            <div className="container rounded-tl-xl rounded-tr-xl bg-slate-400">
                <img src={img} alt={projectTitle}/>
            </div>
            <div className="flex-col space-y-2 p-4">
                <h2 className="text-lg font-bold">{projectTitle}</h2>
                <div className="flex space-x-2">
                    {chipNames.map(name => (
                        <ChipOnProjectCard key={name} name={name} />
                    ))}
                </div>
                <p className="text-sm">{projectDescription}</p>
            </div>
        </div>
    )
}
