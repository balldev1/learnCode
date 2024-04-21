const DisabledLayout = ({children}:{children:React.ReactNode}) => {
    return (
    <div className="p-5">
        <div className=" rounded-xl h-screen p-5">
                    {children}
        </div>
    </div>
)
}

export default DisabledLayout;