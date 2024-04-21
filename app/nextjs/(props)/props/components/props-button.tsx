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