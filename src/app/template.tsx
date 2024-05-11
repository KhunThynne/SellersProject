"use client";

import HomeDetail from "@/components/Home/HomeDetail";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@material-tailwind/react";

import { Suspense } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const customTheme = "light" 
    return  <ThemeProvider value={customTheme}>
        <Suspense fallback={<>Load..</>}>
        <Navbar />


        <div className="border min-h-[85vh] py-5 my-5 flex justify-center">
            {children}
            

        </div>



    </Suspense>
    </ThemeProvider>
}