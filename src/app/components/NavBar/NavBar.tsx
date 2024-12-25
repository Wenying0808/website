'use client'; 
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconButton } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


export const NavBar = () => {
    const pathname = usePathname();
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
    const switchMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("darkMode", "true");
            window.document.documentElement.classList.add("dark");
        } else if (darkMode === false){
            localStorage.setItem("darkMode", "false");
            window.document.documentElement.classList.remove("dark");
        } else {
            setDarkMode(localStorage.getItem("darkMode") === "true")
        }
    }, [darkMode])

    return(
        <div className="fixed top-0 left-0 right-0 z-10 bg-background-light-1 dark:bg-background-dark-1 shadow-md w-full">
            <div className="flex items-center w-full place-content-between p-2 md:p-4">
                <Image src="/images/ic_websiteLogo.svg" alt="logo" width={48} height={48}/>
                <div className="flex items-center gap-x-4 md:gap-x-6 pr-2">
                    <Link 
                        href="/" 
                        className={`${pathname === '/' ? 'text-primary-light dark:text-primary-dark font-semibold' : 'text-black dark:text-slate-200'} hover:text-primary-light dark:hover:text-primary-dark`}
                    >
                        About
                    </Link>
                    <Link 
                        href="/pages/Work" 
                        className={`${pathname === '/pages/Work' ? 'text-primary-light dark:text-primary-dark font-semibold' : 'text-black dark:text-slate-200'} hover:text-primary-light dark:hover:text-primary-dark`}
                    >
                        Work
                    </Link>
                    <IconButton onClick={switchMode} className='text-header dark:text-slate-200'>
                        { darkMode === true ? <LightModeIcon/> : <DarkModeIcon/>}
                    </IconButton>
                </div>
            </div> 
        </div>
    )
}