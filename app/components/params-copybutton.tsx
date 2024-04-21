import { useState } from 'react';

export const ParamsCopybutton = () => {
    const [isCopied, setIsCopied] = useState(false);

    //code
    const codeChildren = `
    // /app/api/test/route.js
export async function GET() {
    return Response.json({
        message: \`GET method called\`,
    });

}export async function POST() {
    return Response.json({
        message: \`POST method called\`,
    });

}export async function PUT() {
    return Response.json({
        message: \`PUT method called\`,
    });

}export async function DELETE() {
    return Response.json({
        message: \`DELETE method called\`,
    });

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
