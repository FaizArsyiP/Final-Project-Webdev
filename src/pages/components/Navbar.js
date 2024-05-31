import Link from "next/link";

export default function Navbar(){
    return(
        <header className="bg-cyan-500 sticky top-0 z-10 ">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-4xl font-medium">
                    NIMANIME
                </Link>
                <nav className="md:flex hidden text-xl space-x-8" aria-label="main">
                    <h1>Home</h1>
                    <h1>Anime List</h1>
                    <h1>Jadwal</h1>
                    <input placeholder=" Cari Anime..." type="text" className="text-black rounded-md"/>
                </nav>
            </section>
            
        </header>
    )
}

