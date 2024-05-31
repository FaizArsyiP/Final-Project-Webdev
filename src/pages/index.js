import axios from "axios"
import { useEffect, useState } from "react"
import TopAnimeList from "./components/TopAnimeList"
import Header from "./components/Header"


export default function Home(){
  const [topAnime,setTopAnime] = useState([])
  
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
    .then((res)=>{
      setTopAnime(res.data.data)
      })
    .catch((err)=>{
      console.log(err)
      });
  },[])

  return(
    <>
      <><Header title="Paling Populer" href="/populer" />
      <TopAnimeList api={topAnime} /></>
    </>
    )
}