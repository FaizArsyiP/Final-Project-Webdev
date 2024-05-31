import axios from "axios"
import { useEffect, useState } from "react"
import Animelist from "./components/Animelist"
import Navbar from "./components/Navbar"

export default function Home(){
  const [anime,setAnime] = useState([])
  useEffect(()=>{
    axios.get("https://api.jikan.moe/v4/top/anime?limit=12")
    .then((res)=>{
      console.log(res.data)
      setAnime(res.data.data)
      })
    .catch((err)=>{
      console.log(err)
      });
  },[])

  return(
    <>
    <Navbar/>
    <h1 className="text-3xl m-auto max-w-4xl p-4 font-bold ">Paling Populer</h1>
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 max-w-4xl m-auto px-4 pb-4">
      {anime.map(data => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div key={data.mal_id} className="shadow-xl">
            <Animelist title={data.title} image={data.images.webp.image_url} id={data.mal_id} />
          </div>
        
      )
      })}
    </div>
    </>
    )
}