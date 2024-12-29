import { NavBar } from "@/app/components/NavBar/NavBar";
import { SectionLanding } from "@/app/components/SectionLanding/SectionLanding";
import { Footer } from "@/app/components/Footer/Footer";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { SectionParagraph } from "@/app/components/SectionParagraph/SectionParagraph";
import { SomnoxEcoSystemCard } from "@/app/components/Somnox/SomnoxEcoSystem/SomnoxEcoSystemCard";
import { SomnoxEcoSystemSleepRobotIcon } from "@/app/components/icons/SomnoxEcoSystemSleepRobot/SomnoxEcoSystemSleepRobot";
import { SomnoxEcoSystemMobileAppIcon } from "@/app/components/icons/SomnoxEcoSystemMobileApp/SomnoxEcoSystemMobileApp";
import { SomnoxEcoSystemSmartWatchIcon } from "@/app/components/icons/SomnoxEcoSystemSmartWatch/SomnoxEcoSystemSmartWatch";
import { SomnoxProposalFeatureCard } from "@/app/components/Somnox/SomnoxProposalFeatureCard/SomnoxProposalFeatureCard";
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import Image from "next/image";
import { SectionButton } from "@/app/components/SectionButton/SectionButton";

export default function BreathingTunesPage() {
    const ecosystem = [
        {
            icon: <SomnoxEcoSystemSleepRobotIcon/>,
            title: "Sleep Robot",
            description: "It detects and matches your breathing rate and rhythm; then, the rhythm gradually slows to a sleep-inducing pace.",

        },
        {
            icon: <SomnoxEcoSystemMobileAppIcon/>,
            title: "Mobile App",
            description: "It customizes the Sleep Robot for relaxation experience, like adjusting the breathing rhythm or selecting relaxation music and sounds.",

        },
        {
            icon: <SomnoxEcoSystemSmartWatchIcon/>,
            title: "Smart Watch",
            description: "Some users use smart watches to capture their sleep data and breathing rate.",

        },
    ];

    const proposal = [
        {
            icon: <StairsOutlinedIcon />,
            label: "Guide users step-by-step to comprehend their sleep problems and goals"
        },
        {
            icon: <AutoFixHighOutlinedIcon />,
            label: "Propose tailored breathing exercises based on their needs"
        },
        {
            icon: <AssessmentOutlinedIcon />,
            label: "Collect both subjective and objective experiences as input to generate a trackable overview of breathing exercise outcomes"
        },
    ]

    return (
        <div className="flex flex-col dark:bg-background-dark-0">
            <NavBar/>
            <main className="flex flex-col place-items-center w-full justify-center mt-page-top-s md:mt-page-top-l">
                <SectionLanding src="/images/img_work-Somnox.png" product="Sleep Robot App" role="UX Research"/>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-2 dark:bg-background-dark-2">
                    <SectionTitle title="Ecosystem"/>
                    <SectionParagraph paragraph="This app serves as the ideal companion to the Sleep Robot, crafting a customized breathing rhythm for ultimate relaxation. Users can tailor personalized breathing rhythm through the app."/>
                    <div className="flex flex-col place-items-center justify-center gap-1 sm:gap-2">
                        {ecosystem.map( item => (
                            <SomnoxEcoSystemCard key={item.title} icon={item.icon} title={item.title} description={item.description}/>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-3 dark:bg-background-dark-3">
                    <SectionTitle title="Challenges"/>
                    <SectionParagraph paragraph="Users lack a feedback loop between breathing programs and user goals."/>
                    <Image src="/images/img_work-Somnox-Challenge.png" alt="challenges" width={300} height={300}/>
                </div>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section-s sm:p-section-l bg-background-light-2 dark:bg-background-dark-2">
                    <SectionTitle title="Research Insights"/>
                    <SectionParagraph paragraph="More explorations and experiments on breathing exercise with sleep robots results in higher satisfaction and more noticeable sleep improvement."/>
                    <Image src="/images/img_work-Somnox-ResearchInsight.png" alt="Research Insights" width={1000} height={300}/>
                </div>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full px-0 py-section-s sm:py-section-l bg-background-light-1 dark:bg-background-dark-3">
                    <SectionTitle title="Outcomes"/>
                    <div className="flex flex-col gap-1 sm:gap-2 p-4">
                        {proposal.map( item => (
                            <SomnoxProposalFeatureCard key={item.label} icon={item.icon} label={item.label}/>
                        ))}
                    </div>
                    <Image src="/images/img_work-Somnox-Proposal.png" alt="Proposal" width={2000} height={300}/>
                    <SectionButton label="Explore App" url="https://somnox.com/app/"/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}