'use client';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface Props {
    label: string;
    url: string;
}

export const MediaPlayer = ({ label, url }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Prevent rendering until mounted
    }

    return (
        <div className="flex flex-col place-items-center gap-4">
            <div className="rounded-md overflow-hidden">
                <ReactPlayer url={url} width="240px" height="180px"/>
            </div>
            <p className="text-sm sm:text-base text-primary-light dark:text-primary-dark">{label}</p>
        </div>
    );
};