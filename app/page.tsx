import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="p-5">
          <div className="border-2 rounded-xl h-screen p-5">
              <div className="grid grid-cols-5 items-center justify-center ">
                  {/* Link */}
                  <div>
                      <Link href="/nextjs" className="border-2 p-2 rounded-xl border-sky-500">
                          Nextjs
                      </Link>
                  </div>
                  <div>
                      <Link href="/axios" className="border-2 p-2 rounded-xl border-sky-500">
                          Axios
                      </Link>
                  </div>

                  <div>
                  </div>
              </div>
          </div>
      </div>
  );
}
