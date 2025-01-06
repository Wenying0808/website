import { NavBar } from "@/app/components/NavBar/NavBar";
import { Footer } from "@/app/components/Footer/Footer";
import { SideProjectCard } from "@/app/components/SideProjectCard/SideProjectCard";

export default function FrontEndDevPage(){
    const projects = [
        {
            img:"/images/img_FEP-FinanceFlow.png",
            projectTitle: "Finance Flow",
            projectDescription: "A personal finance app that helps users track and manage their expenses effectively.",
            projectLink: "https://wenying0808.github.io/finance-flow/",
            githubLink: "https://github.com/Wenying0808/finance-flow",
            chipNames: ["Typescript", "React", "Firebase"],
        },
        {
            img:"/images/img_FEP-CancerData.png",
            projectTitle: "Cancer Data",
            projectDescription: "An interactive app that visualizes global cancer data through dynamic charts and graphs.",
            projectLink: "https://wenying0808.github.io/cancer-data/",
            githubLink: "https://github.com/Wenying0808/cancer-data",
            chipNames: ["Javascript", "React", "D3.js"],
        },
        {
            img:"/images/img_FEP-Pomodoro.png",
            projectTitle: "Pomodoro",
            projectDescription: "A productivity tool that uses the Pomodoro Technique to enhance time management and focus.",
            projectLink: "https://wenying0808.github.io/pomodoro/",
            githubLink: "https://github.com/Wenying0808/pomodoro",
            chipNames: ["Javascript", "React", "Storybook"],
        },
        {
            img:"/images/img_FEP-TableComponents.png",
            projectTitle: "Table Components",
            projectDescription: "An interactive table components with row expanding, column sorting, filtering, and reordering features.",
            projectLink: "https://table-component-wenying0808s-projects.vercel.app",
            githubLink: "https://github.com/Wenying0808/table-component",
            chipNames: ["Typescript", "React", "MongoDB"],
        },
        {
            img:"/images/img_FEP-Website.png",
            projectTitle: "Website",
            projectDescription: "A personal website to showcase expertise and portfolio.",
            projectLink: "https://wenying-portfolio.vercel.app",
            githubLink: "https://github.com/Wenying0808/website",
            chipNames: ["Next.js", "Tailwind", "Vercel"],
        },
    ]
    return (
        <div className="flex flex-col dark:bg-background-dark-1">
            <NavBar/>
            <main className="flex flex-col place-items-center justify-center mt-page-top-s md:mt-page-top-l">
                <div className="flex flex-wrap gap-section-s sm:gap-section-l justify-center w-full p-section-s sm:p-section-l">
                    {projects.map(item => (
                        <SideProjectCard key={item.projectTitle} img={item.img} projectTitle={item.projectTitle} projectDescription={item.projectDescription} projectLink={item.projectLink} githubLink={item.githubLink} chipNames={item.chipNames}/>
                    ))}
                </div>
            </main>
            <Footer/>
        </div>
    )
}