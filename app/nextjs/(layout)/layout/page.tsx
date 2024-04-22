"use client";

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import {LayoutCopybutton} from "@/app/nextjs/components/layout-copybutton";
const LayoutPage = () => {

    return (
        <div className="flex flex-col text-center items-center justify-center space-y-5 p-5">
            <div>
                <Link href="/nextjs" className="p-2 border-2 border-sky-500 rounded-xl">Back Nextjs</Link>
            </div>
            <div className="w-[1200px] space-y-5">
                <div className="flex flex-col">
                    <span>LayOut = children:React.ReactNode</span>
                </div>
                {/* Copy Code */}
                <LayoutCopybutton/>
                <div className="w-full h-[700px]  border-2 relative">
                    <Image
                        src="/layout/layout1.png"
                        alt="layout1"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default LayoutPage