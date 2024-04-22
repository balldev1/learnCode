"use client";

import Image from "next/image";
import Link from "next/link";
import {ParamsCopybutton} from "@/app/nextjs/components/params-copybutton";
const ParamsPage = () => {

    return (
        <div className="flex flex-col text-center items-center justify-center space-y-5 p-5">
            <div>
                <Link href="/nextjs" className="p-2 border-2 border-sky-500 rounded-xl">Back Nextjs</Link>
            </div>
            <div className="w-[1200px] space-y-5">
                <div className="flex flex-col">
                    <span>get.parmas = axios = [id] = page</span>
                </div>
                {/* Copy Code */}
                <ParamsCopybutton/>
                <div className="w-full h-[700px]  border-2 relative">
                    <Image
                        src="/params/params1.png"
                        alt="layout1"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default ParamsPage;