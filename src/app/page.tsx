"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() { 
    useEffect(() => {
        fetch("/api/send-telegram-visited")
            .catch(err=> console.error("ERROR: Failed to notify Telegram bot - ", err));
    }, []);

    
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="text-3xl font-bold text-center">
                <h1>Welcome to {"Jian Tao's"} Website</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <Image src="/jiantao.JPG" alt="Jian Tao Image" width={200} height={200} priority/>
                <p className="text-xl text-center">
                    This website is still under construction. <br />
                    Please check back later for updates.
                </p>
            </div>
            <div className="text-sm text-center">
                <p>&copy; 2025 JianTao. All rights reserved.</p>
            </div>
        </div>
    );
}
