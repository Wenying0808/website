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
            sx={{ textTransform: 'none', borderRadius: '9999px', padding: '4px 16px', backgroundColor:'#4758DC'}} 
            className="rounded-full bg-primary-light px-4 dark:bg-primary-dark  hover:scale-105"
        >
            {label}
        </Button>
    )
}