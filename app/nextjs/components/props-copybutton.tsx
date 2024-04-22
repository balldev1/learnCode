import { useState } from 'react';

export const PropsCopybutton = () => {
    const [isCopied, setIsCopied] = useState(false);

    //code
    const codeChildren = `
    type Props = {
    children: React.ReactNode; // รับ children ที่เป็น React Node
    onClick: () => void;
};


export const PropsButton = ({children,onClick}:Props) => {
    return (
        <button onClick={onClick}
        className="bg-sky-500 hover:bg-sky-600 p-2 w-20 rounded-xl  mx-5"
        >
            {children}
        </button>
    )
}
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
