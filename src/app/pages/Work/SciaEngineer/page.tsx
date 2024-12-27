import { NavBar } from "@/app/components/NavBar/NavBar";
import { Footer } from "@/app/components/Footer/Footer";
import { LandingSection } from "@/app/components/LandingSection/LandingSection";

export default function SciaEngineerPage() {
    return(
        <div className="flex flex-col dark:bg-background-dark-0">
            <NavBar/>
            <div className="flex flex-col place-items-center w-full justify-center gap-4 mt-[64px] sm:mt-[80px]">
                <LandingSection src="/images/img_work-SciaEngineer.png" product="Scia Engineer" role="UX/UI Design"/>
            </div>
            <Footer/>
        </div>
    )
}