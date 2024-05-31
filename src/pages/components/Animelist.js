import Image from "next/image";
import Link from "next/link";

export default function Animelist({title,image, id}){
    return(
        <Link href={`/${id}`} className="relative cursor-pointer">
            <Image src={image} alt={title} width={300} height={600} className="block w-full object-cover min-h-20 max-h-64"/>
            <h1 className="font-bold text-sm absolute bottom-0 left-0 p-[10px] bg-black/50 text-center w-[100%] max-h-32 h-14 overflow-hidden">{title}</h1> 
        </Link>
    )
}