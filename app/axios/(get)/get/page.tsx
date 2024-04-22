"use client";

import Image from "next/image";
import Link from "next/link";
import {AxiosApiGet} from "@/app/axios/components/axios-api/axios-api-get";
import {AxiosGetCopybutton} from "@/app/axios/components/axios-copy-button/axiosGet-copybutton";
const AxiosGetPage = () => {

    return (
        <div className="flex flex-col text-center items-center justify-center space-y-5 p-5">
            <div>
                <Link href="/axios" className="p-2 border-2 border-sky-500 rounded-xl">Back Nextjs</Link>
            </div>
            <div className="w-[1200px]  space-y-5">
                <div className="flex flex-col">
                    <span>`https://pokeapi.co/api/v2/pokemon/${"i"}`</span>
                </div>
                {/* Copy Code */}
                <AxiosGetCopybutton/>
                {/* AXIOS GET */}
                <div>
                    <AxiosApiGet/>
                </div>
                <div className="w-full h-[800px]  border-2 relative">
                    <Image
                        src="/axios/axiosget1.png"
                        alt="layout1"
                        fill
                    />
                </div>
                <div className="w-full h-[800px]  border-2 relative">
                    <Image
                        src="/axios/axiosget2.png"
                        alt="layout1"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default AxiosGetPage;