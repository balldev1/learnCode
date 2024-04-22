import Image from "next/image";
import Link from "next/link";

const NextPage = () => {
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
                        <Link href="/nextjs/layout" className="border-2 p-2 rounded-xl border-sky-500">
                            Layout Nextjs
                        </Link>
                    </div>
                    <div>
                        <Link href="/nextjs/copycode" className="border-2 p-2 rounded-xl border-sky-500">
                            CopyCode
                        </Link>
                    </div>
                    <div>
                        <Link href="/nextjs/props" className="border-2 p-2 rounded-xl border-sky-500">
                            Props type
                        </Link>
                    </div>
                    <div>
                        <Link href="/nextjs/disabled" className="border-2 p-2 rounded-xl border-sky-500">
                            Disabled Input
                        </Link>
                    </div>
                    <div>
                        <Link href="/nextjs/api" className="border-2 p-2 rounded-xl border-sky-500">
                            API
                        </Link>
                    </div>
                    <div>
                        <Link href="/nextjs/params" className="border-2 p-2 rounded-xl border-sky-500">
                            Dynamic Routes Params
                        </Link>
                    </div>
                    <div>
                        <Link href="/nextjs/search" className="border-2 p-2 rounded-xl border-sky-500">
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NextPage;