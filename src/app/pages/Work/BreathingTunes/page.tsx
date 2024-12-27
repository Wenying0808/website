import { NavBar } from "@/app/components/NavBar/NavBar";
import { LandingSection } from "@/app/components/LandingSection/LandingSection";
import { Footer } from "@/app/components/Footer/Footer";

export default function BreathingTunesPage() {
    return (
        <div className="flex flex-col dark:bg-background-dark-0">
            <NavBar/>
            <div className="flex flex-col place-items-center w-full justify-center gap-4 mt-[64px] sm:mt-[80px]">
                <LandingSection src="/images/img_work-Somnox.png" product="Sleep Robot App" role="UX Research"/>
            </div>
            <Footer/>
        </div>
    )
}