import Image from "next/image"
import Link from "next/link"

export default function AnimeList({api}){
    return(
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 max-w-4xl m-auto px-4 pb-4">
        {api.map((anime)=>{
            return(
                // eslint-disable-next-line react/jsx-key
                <Link href={`/${anime.mal_id}`} className="relative cursor-pointer hover:scale-[103%] hover:text-cyan-500">
                    <Image src={anime.images.webp.image_url} alt={anime.title} width={300} height={600} className="block w-full object-cover min-h-20 max-h-64"/>
                    <h1 className="font-bold text-sm absolute bottom-0 left-0 p-[10px] bg-black/50 text-center w-[100%] max-h-32 h-14 overflow-hidden ">{anime.title}</h1> 
                </Link>
                )
            })
        }
    </div>
    )
}