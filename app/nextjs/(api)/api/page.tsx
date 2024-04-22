"use client";

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import {ApiCopybutton} from "@/app/nextjs/components/api-copybutton";
const PropsPage = () => {


    return (
        <div className="flex flex-col text-center items-center justify-center space-y-5 p-5">
            <div>
                <Link href="/nextjs" className="p-2 border-2 border-sky-500 rounded-xl">Back Nextjs</Link>
            </div>
            <div className="w-[1400px]  space-y-5">
                <div className="flex flex-col">
                    <span>API GET,POST,PUT,DELETE</span>
                </div>
                {/* Copy Code */}
                <ApiCopybutton/>
                <div className="w-full h-[800px]  border-2 relative">
                    <Image
                        src="/api/api1.png"
                        alt="layout1"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default PropsPage;