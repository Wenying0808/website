import { NavBar } from "@/app/components/NavBar/NavBar";
import { SectionLanding } from "@/app/components/SectionLanding/SectionLanding";
import { Footer } from "@/app/components/Footer/Footer";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { SectionParagraph } from "@/app/components/SectionParagraph/SectionParagraph";
import { ProductCard } from "@/app/components/ProductCard/Somnox/ProductCard";
import { SomnoxEcoSystemMobileAppIcon } from "@/app/components/icons/SomnoxEcoSystemMobileApp/SomnoxEcoSystemMobileApp";

export default function BreathingTunesPage() {
    const ecosystem = [
        {
            icon: <SomnoxEcoSystemMobileAppIcon/>,
            title: "Sleep Robot",
            description: "It detects and matches your breathing rate and rhythm; then, the rhythm gradually slows to a sleep-inducing pace.",

        },
        {
            icon: <SomnoxEcoSystemMobileAppIcon/>,
            title: "Mobile App",
            description: "It customizes the Sleep Robot for relaxation experience, like adjusting the breathing rhythm or selecting relaxation music and sounds.",

        },
        {
            icon: <SomnoxEcoSystemMobileAppIcon/>,
            title: "Smart Watch",
            description: "Some users use smart watches to capture their sleep data and breathing rate.",

        },
    ];

    return (
        <div className="flex flex-col dark:bg-background-dark-0">
            <NavBar/>
            <main className="flex flex-col place-items-center w-full justify-center mt-page-top-s md:mt-page-top-l">
                <SectionLanding src="/images/img_work-Somnox.png" product="Sleep Robot App" role="UX Research"/>
                <div className="flex flex-col gap-section-s sm:gap-section-l place-items-center w-full p-section bg-background-light-2 dark:bg-background-dark-2">
                    <SectionTitle title="Ecosystem"/>
                    <SectionParagraph paragraph="This app serves as the ideal companion to the Sleep Robot, crafting a customized breathing rhythm for ultimate relaxation. Users can tailor personalized breathing rhythm through the app."/>
                    <div className="flex flex-col place-items-center justify-center gap-1 sm:gap-2">
                        {ecosystem.map( item => (
                            <ProductCard key={item.title} icon={item.icon} title={item.title} description={item.description}/>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}