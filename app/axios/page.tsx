import Image from "next/image";
import Link from "next/link";

const AxiosPage = () => {
    return (
        <div className="p-5">
            <div className=" rounded-xl h-screen p-5">
                <div className="grid grid-cols-5 items-center justify-center gap-10">
                    {/* Link */}
                    <div>
                        <Link href="/" className="border-2 p-2 rounded-xl border-sky-500">
                            Back Home
                        </Link>
                    </div>
                    <div>
                        <Link href="/axios/get" className="border-2 p-2 rounded-xl border-sky-500">
                            Axios Get
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AxiosPage;