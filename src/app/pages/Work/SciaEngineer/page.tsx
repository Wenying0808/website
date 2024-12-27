import { NavBar } from "@/app/components/NavBar/NavBar";
import { Footer } from "@/app/components/Footer/Footer";
import { SectionLanding } from "@/app/components/SectionLanding/SectionLanding";

export default function SciaEngineerPage() {
    return(
        <div className="flex flex-col dark:bg-background-dark-0">
            <NavBar/>
            <main className="flex flex-col place-items-center w-full justify-center mt-page-top-s md:mt-page-top-l">
                <SectionLanding src="/images/img_work-SciaEngineer.png" product="Scia Engineer" role="UX/UI Design"/>
            </main>
            <Footer/>
        </div>
    )
}