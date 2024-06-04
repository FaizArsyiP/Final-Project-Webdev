import Link from "next/link";

export default function Header({title,href}){
    return(
        <div className="flex justify-between max-w-4xl m-auto items-center p-4">
            <h1 className="md:text-3xl text-2xl   font-bold ">{title}</h1>
            {href && title ? 
             <Link href={href} className="text-sm md:text-xl underline hover:text-cyan-500 transition-all translate-y-1">
                Lihat semua
             </Link>
             : null
            }
           
        </div>
    ) 
}