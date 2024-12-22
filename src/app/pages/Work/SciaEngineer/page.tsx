import { NavBar } from "@/app/components/NavBar/NavBar";
import { Footer } from "@/app/components/Footer/Footer";

export default function SciaEngineerPage() {
    return(
        <div className="flex flex-col">
            <NavBar/>
            <div className="flex flex-wrap place-items-center w-full justify-center gap-4 mt-[64px] p-8 sm:mt-[80px] sm:gap-8 sm:p-16 ">
                SciaEngineer
            </div>
            <Footer/>
        </div>
    )
}