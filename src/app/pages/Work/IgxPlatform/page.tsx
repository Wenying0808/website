import { NavBar } from "@/app/components/NavBar/NavBar";
import { Footer } from "@/app/components/Footer/Footer";
import { SectionLanding } from "@/app/components/SectionLanding/SectionLanding";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { SectionParagraph } from "@/app/components/SectionParagraph/SectionParagraph";
import Image from "next/image";


export default function IgxPlatformPage() {
    return (
        <div className="flex flex-col dark:bg-background-dark-0">
            <NavBar/>
            <main className="flex flex-col place-items-center w-full justify-center mt-page-top-s md:mt-page-top-l">
                <SectionLanding src="/images/img_work-IgxPlatform.png" product="IGX Platform" role="Front End Development"/>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-2 dark:bg-background-dark-2">
                    <SectionTitle title="IGX Platform"/>
                    <SectionParagraph paragraph="IGX Platform empowers scientists in the field of antibody discovery research. Comprising a suite of applications, it facilitates the analysis of genomics data and provides intuitive visualization tools for interpreting analysis results."/>
                </div>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-3 dark:bg-background-dark-3">
                    <SectionTitle title="Workflows & Challenges "/>
                    <SectionParagraph paragraph="Diving into the realm of antibody discovery involves a sea of sequencing data. Yet, decoding this intricate language poses challenges - supporting diverse repertoires, analyzing massive dataset and navigating complex sequencing information."/>
                    <Image src="/images/img_work-IgxPlatform-Workflow.png" alt="workflow" width={800} height={500}/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}