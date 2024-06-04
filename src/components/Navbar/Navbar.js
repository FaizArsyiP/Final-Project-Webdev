import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar(){
    return(
        <header className="bg-cyan-500 sticky top-0 z-10 ">
            <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-4xl font-medium">
                    NIMANIME
                </Link>
                <div className="md:flex hidden space-x-8 cursor-pointer">
                    <Link href="/" className="hover:text-cyan-700 text-2xl">Home</Link>
                    <Link href="/list" className="hover:text-cyan-700 text-2xl">Anime List</Link>
                    <Link href="/jadwal" className="hover:text-cyan-700 text-2xl">Jadwal</Link>
                    <SearchBar/>
                </div>
            </div>
        </header>
    )
}

