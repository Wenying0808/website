import { NavBar } from "@/app/components/NavBar/NavBar";
import { Footer } from "@/app/components/Footer/Footer";
import { SectionLanding } from "@/app/components/SectionLanding/SectionLanding";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { SectionParagraph } from "@/app/components/SectionParagraph/SectionParagraph";
import Image from "next/image";
import { SciaEngineerFeatureCard } from "@/app/components/SciaEngineer/SciaEngineerFeatureCard/SciaEngineerFeatureCard";
import { SciaEngineerStructureIcon } from "@/app/components/icons/SciaEngineerStructure/SciaEngineerStructure";
import { SciaEngineerLoadIcon } from "@/app/components/icons/SciaEngineerLoad/SciaEngineerLoad";
import { SciaEngineerResultsIcon } from "@/app/components/icons/SciaEngineerResults/SciaEngineerResults";
import { MediaPlayer } from "@/app/components/MediaPlayer/MediaPlayer";

export default function SciaEngineerPage() {
    const features = [
        {
            img:"/images/img_work-SciaEngineer-feature-inputTable.png",
            icon: <SciaEngineerStructureIcon/>,
            title: "Import and Adjust Model Flexibly via Input Table",
            description: [
                "Paste data in Inputs Table to import model",
                "Edit data to modify model on-the-fly",
                "Sort & filter data to inspect specific structure"
            ]
        },
        {
            img:"/images/img_work-SciaEngineer-feature-markingMenu.png",
            icon: <SciaEngineerLoadIcon/>,
            title: "Model/Load Structure Efficiently via Marking Menu",
            description: [
                "On-demand menu via hotkey at fingertips",
                "Speed up workflow by reducing mouse travel",
                "Customise content to adapt different needs"
            ]
        },
        {
            img:"/images/img_work-SciaEngineer-feature-resultsTable.png",
            icon: <SciaEngineerResultsIcon/>,
            title: "Make informative and transparent decisions via Results Table",
            description: [
                "Use filter & sorting to identify bottleneck",
                "Compare data in different tabs to iterate",
                "Detailed data inspection in Preview"
            ]
        },
        {
            img:"/images/img_work-SciaEngineer-feature-maxScreen.png",
            icon: <SciaEngineerStructureIcon/>,
            title: "Minimize the UI components",
            description: [
                "Use filter & sorting to identify bottleneck",
                "Enable to tear off components from App",
            ]
        },
    ];

    const releases = [
        {   label: "Release 21.0",
            url: "https://www.youtube.com/embed/ygnvInHk3Yk?si=Jdm9EORhmA5uRndL",
        },
        {   label: "Release 21.1",
            url: "https://www.youtube.com/embed/e2ZXzvIcLaU?si=FVnyRtAaepG2hPSp&amp;start=572",
        },
        {   label: "Release 22.0",
            url: "https://www.youtube.com/embed/SoSGCBfopjU?si=arUOAZGAniguDTJ8&amp;start=572",
        },
    ]

    return(
        <div className="flex flex-col dark:bg-background-dark-0">
            <NavBar/>
            <main className="flex flex-col place-items-center w-full justify-center mt-page-top-s md:mt-page-top-l">
                <SectionLanding src="/images/img_work-SciaEngineer.png" product="Scia Engineer" role="UX/UI Design"/>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-2 dark:bg-background-dark-2">
                    <SectionTitle title="SCIA Engineer"/>
                    <SectionParagraph paragraph="SCIA Engineer enables civil engineers to model, analyze, visualize data, and iteratively optimize structural designs for optimal solutions."/>
                </div>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-3 dark:bg-background-dark-3">
                    <SectionTitle title="Workflows & Challenges "/>
                    <SectionParagraph paragraph="Civil engineers aim to create sustainable and resilient infrastructures through iterating the structural design through loading various conditions for testing and conducting analyses of the outcomes. Here are the main workflows and identified pain points:"/>
                    <Image src="/images/img_work-SciaEngineer-workflow-lightMode.png" alt="workflow" width={600} height={800} className="block dark:hidden"/>
                    <Image src="/images/img_work-SciaEngineer-workflow-darkMode.png" alt="workflow" width={600} height={800} className="hidden dark:block"/>
                </div>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-2 dark:bg-background-dark-2">
                    <SectionTitle title="Outcomes"/>
                    <div className="flex flex-col gap-4">
                        {features.map(item => (
                            <SciaEngineerFeatureCard img={item.img} icon={item.icon} title={item.title} description={item.description}/>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-3 dark:bg-background-dark-3">
                    <SectionTitle title="Releases"/>
                    <div className="flex flex-col sm:flex-row gap-8">
                        {releases.map(item => (
                            <MediaPlayer label={item.label} url={item.url}/>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}