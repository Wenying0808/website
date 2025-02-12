'use client'

import { Button } from "@mui/material";

interface Props {
    label: string,
    url: string,
}

export const SectionButton = ({ label, url }: Props) => {
    const handleClick = () => {
        window.open(url, '_blank');
    };

    return(
        <Button 
            onClick={handleClick} 
            variant="contained" 
            size="small" 
            sx={{ textTransform: 'none' }} 
            className="rounded-full px-4 bg-primary-light dark:bg-primary-dark  hover:scale-105"
        >
            {label}
        </Button>
    )
}