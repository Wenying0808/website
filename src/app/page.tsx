import { ProjectCard } from "./components/ProjectCard/ProjectCard";
export default function Home() {
    const projectsInformation = [
        {
            projectTitle: "Front End Development",
            projectDescription: "A showcase of interactive web applications, demonstrating my skills in front-end development.",
            chipNames: ["Javascript", "Typescript", "React"],
            img: "./Title",
            projectLink: ""
        },
        {
            projectTitle: "IGX Platform",
            projectDescription: "The IGX Platform empowers scientists to analyze genomic data with flexibility and ease.",
            chipNames: ["SaaS", "Antibody Discovery"],
            img: "./Title",
            projectLink: ""
        },
    ]
    return(
        <div className="m-4">
            <div className="grid grid-cols-2 gap-4 p-4">
                {projectsInformation.map( project => (
                    <ProjectCard key={project.projectTitle} projectTitle={project.projectTitle} projectDescription={project.projectDescription} chipNames={project.chipNames} img={project.img}/>
                ))}
            </div>
        </div>
    )
}