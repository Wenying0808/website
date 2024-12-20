import { ProjectCard } from "./components/ProjectCard/ProjectCard";
export default function Home() {
    const projectsInformation = [
        {
            projectTitle: "Front End Development",
            projectDescription: "A showcase of interactive web applications, demonstrating my skills in front-end development.",
            chipNames: ["Typescript", "React"],
            img: "/images/img_work-FrontEndDev.png",
            projectLink: "/pages/Work/FrontEndDev"
        },
        {
            projectTitle: "IGX Platform",
            projectDescription: "The IGX Platform empowers scientists to analyze genomic data with flexibility and ease.",
            chipNames: ["SaaS", "Antibody Discovery"],
            img: "/images/img_work-IgxPlatform.png",
            projectLink: "/pages/Work/IgxPlatform"
        },
        {
            projectTitle: "SCIA Engineer",
            projectDescription: "SCIA Engineer empowers civil engineers with modeling, analysis, and iteration for optimal structural solutions.",
            chipNames: ["Desktop App", "3D Model"],
            img: "/images/img_work-SciaEngineer.png",
            projectLink: "/pages/Work/SciaEngineer"
        },
        {
            projectTitle: "Breathing Tunes",
            projectDescription: "The App crafts a personalized breathing rhythm, establishing a feedback loop for ultimate relaxation.",
            chipNames: ["Mobile App", "Sleep Health"],
            img: "/images/img_work-Somnox.png",
            projectLink: "/pages/Work/BreathingTunes"
        },
    ]
    return(
        <div className="m-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 p-4 max-w-4xl">
                {projectsInformation.map( project => (
                    <ProjectCard key={project.projectTitle} projectTitle={project.projectTitle} projectDescription={project.projectDescription} chipNames={project.chipNames} img={project.img} projectLink={project.projectLink}/>
                ))}
            </div>
        </div>
    )
}