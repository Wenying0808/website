import { NavBar } from "@/app/components/NavBar/NavBar";

export default function About() {
    
    return(
        <div className="flex">
            <NavBar/>
            <div className="flex flex-wrap place-items-center w-full justify-center gap-4 mt-[64px] p-8 sm:mt-[80px] sm:gap-8 sm:p-16 ">
                About
            </div>
        </div>
    )
}