import { useState } from 'react';

export const DisabledCopybutton = () => {
    const [isCopied, setIsCopied] = useState(false);

    //code
    const codeChildren = `
    "use client";

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import {PropsButton} from "@/app/nextjs/(props)/props/components/props-button";
import {PropsCopybutton} from "@/app/components/props-copybutton";
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
                    <span>type Props</span>
                </div>
                {/* Copy Code */}
                <PropsCopybutton/>
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
    `;

    // void copyCode
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeChildren);
            setIsCopied(true);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCopy}
        >
            {isCopied ? 'Copied!' : 'Copy'}
        </button>
    );
};
