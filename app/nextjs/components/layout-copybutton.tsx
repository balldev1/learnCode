import { useState } from 'react';

export const LayoutCopybutton = () => {
    const [isCopied, setIsCopied] = useState(false);

    //code
    const codeChildren = `const LayoutLayout = ({children}:{children:React.ReactNode}) => {
    return (
    <div className="p-5">
        <div className=" rounded-xl h-screen p-5">
                    {children}
        </div>
    </div>
)
}

export default LayoutLayout`;

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
