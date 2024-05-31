import Link from "next/link";

export default function Navbar(){
    return(
        <header className="bg-cyan-500 sticky top-0 z-10 ">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-4xl font-medium">
                    NIMANIME
                </Link>
                <nav className="md:flex hidden text-xl space-x-8 cursor-pointer" aria-label="main">
                    <Link href="/" className="hover:text-cyan-700">Home</Link>
                    <Link href="/List" className="hover:text-cyan-700">Anime List</Link>
                    <Link href="/Jadwal" className="hover:text-cyan-700">Jadwal</Link>
                    <input placeholder=" Cari Anime..." type="text" className="text-black rounded-md "/>
                </nav>
            </section>
            
        </header>
    )
}

