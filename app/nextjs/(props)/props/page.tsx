"use client";

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import {PropsButton} from "@/app/nextjs/(props)/props/components/props-button";
import {PropsCopybutton} from "@/app/components/props-copybutton";
const PropsPage = () => {


    return (
        <div className="flex flex-col text-center items-center justify-center space-y-5 p-5">
            <div>
                <Link href="/nextjs" className="p-2 border-2 border-sky-500 rounded-xl">Back Nextjs</Link>
            </div>
            <div className="w-[1400px]  space-y-5">
                <div className="flex flex-col">
                    <span>type Props</span>
                </div>
                {/* Copy Code */}
                <PropsCopybutton/>
                <div className="w-full h-[800px]  border-2 relative">
                    <Image
                        src="/props/props1.png"
                        alt="layout1"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default PropsPage;