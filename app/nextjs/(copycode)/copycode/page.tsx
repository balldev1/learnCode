"use client";

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import {CopycodeCopybutton} from "@/app/nextjs/components/copycode-copybutton";
const CopyCodePage = () => {

    return (
        <div className="flex flex-col text-center items-center justify-center space-y-5 p-5">
            <div>
                <Link href="/nextjs" className="p-2 border-2 border-sky-500 rounded-xl">Back Nextjs</Link>
            </div>
            <div className="w-[1200px]  space-y-5">
                <div className="flex flex-col">
                    <span>Copy Code = navigator.clipboard.writeText(codeChildren);</span>
                </div>
                {/* Copy Code */}
                <CopycodeCopybutton/>
                <div className="w-full h-[700px]  border-2 relative">
                    <Image
                        src="/copycode/copycode1.png"
                        alt="layout1"
                        fill
                    />
                </div>
                <div className="w-full h-[700px] border-2 relative">
                    <Image
                        src="/copycode/copycode2.png"
                        alt="layout1"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default CopyCodePage;