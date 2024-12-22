import { NavBar } from "@/app/components/NavBar/NavBar";
import { IllustrationDescriptionBlock } from "@/app/components/IllustrationDescriptionBlock/IllustrationDescriptionBlock";
import { Footer } from "@/app/components/Footer/Footer";

export default function About() {
    const expertise = [
        {
            img: "/images/illu_expertise_research.svg",
            title: "User Research",
            description: "Perform explorative and evaluative studies to identify problems and verify concepts"
        },
        {
            img: "/images/illu_expertise_designIteration.svg",
            title: "Design & Prototyping",
            description: "Lead prototyping-based iterative design process to reduce cost of production"
        },
        {
            img: "/images/illu_expertise_development.svg",
            title: "Product Development",
            description: "Collaborate and deliver high-quality product efficiently"
        },
    ]
    const qualities = [
        {
            img: "/images/illu_iam_discover.svg",
            title: "Empathetic Discover",
        },
        {
            img: "/images/illu_iam_thinker.svg",
            title: "Systematic Thinker",
        },
        {
            img: "/images/illu_iam_collaborator.svg",
            title: "Adaptive Collaborator",
        },
        {
            img: "/images/illu_iam_communicator.svg",
            title: "Thoughtful Communicator",
        },
    ]
    
    return(
        <div className="flex flex-col">
            <NavBar/>
            <div className="flex flex-wrap place-items-center justify-center gap-4 mt-[64px] p-8 sm:mt-[80px] sm:gap-8 sm:p-16 ">
                {expertise.map(item => (
                    <IllustrationDescriptionBlock key={item.title} img={item.img} title={item.title} description={item.description}/>
                ))}
            </div>
            <div className="flex flex-wrap place-items-center justify-center gap-4 mt-[64px] p-8 sm:mt-[80px] sm:gap-8 sm:p-16 ">
                {qualities.map(item => (
                    <IllustrationDescriptionBlock key={item.title} img={item.img} title={item.title}/>
                ))}
            </div>
            <Footer/>
        </div>
    )
}