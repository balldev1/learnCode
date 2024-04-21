import {useState} from 'react';

export const CopycodeCopybutton = () => {
    const [isCopied, setIsCopied] = useState(false);

    // code
    const codeChildren = `
        "use client";
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import {CopyCodeButton} from "@/app/components/copyCode-Button";
const CopyCode = () => {

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
                <CopyCodeButton/>
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

export default CopyCode;
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
