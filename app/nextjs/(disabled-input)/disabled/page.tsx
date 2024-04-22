"use client";

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import {PropsButton} from "@/app/nextjs/(props)/props/components/props-button";
import {DisabledCopybutton} from "@/app/nextjs/components/disabled-copybutton";
const DisabledPage = () => {

    // ACTIVE , DISABLED
    const [inputDisabled, setInputDisabled] = useState(false);
    // VALUE
    const [inputValue, setInputValue] = useState("");

    const handleResetInput = () => {
        setInputValue("");
    };
    const handleDisable = () => {
        setInputDisabled(true);
    };

    const handleActive = () => {
        setInputDisabled(false);
    };


    return (
        <div className="flex flex-col text-center items-center justify-center space-y-5 p-5">
            <div>
                <Link href="/nextjs" className="p-2 border-2 border-sky-500 rounded-xl">Back Nextjs</Link>
            </div>
            <div className="w-[1400px]  space-y-5">
                <div className="flex flex-col">
                    <span>Input, Disabled , Active , Reset</span>
                </div>
                {/* Copy Code */}
                <DisabledCopybutton/>
                {/* input */}
                <div>
                    <input
                        value={inputValue}
                        disabled={inputDisabled}
                        onChange={(e) => setInputValue(e.target.value)}/>
                </div>
                {/* button */}
                <div>
                    <PropsButton onClick={handleDisable}>
                        CLOSE
                    </PropsButton>
                    <PropsButton onClick={handleActive}>
                        OPEN
                    </PropsButton>
                    <PropsButton onClick={handleResetInput}>
                        RESET
                    </PropsButton>
                </div>
                <div className="w-full h-[800px]  border-2 relative">
                    <Image
                        src="/disabled/disabled1.png"
                        alt="disabled"
                        fill
                    />
                </div>
                <div className="w-full h-[800px]  border-2 relative">
                    <Image
                        src="/disabled/disabled2.png"
                        alt="disabled"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default DisabledPage;