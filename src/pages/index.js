import axios from 'axios';
import { useEffect, useState } from 'react';
import AnimeList from '../components/Animelist/AnimeList';
import Header from '../components/Animelist/Header';

export default function Home() {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const fetchTopAnime = async () => {
      const source = axios.CancelToken.source();
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`,
          { cancelToken: source.token }
        );
        setTopAnime(response.data.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log(err.message);
        } else {
          console.error(err);
        }
      } 
    };

    fetchTopAnime();
  }, []);


  return (
    <section>
      <Header title="Paling Populer" href="/populer" />
      <AnimeList api={topAnime} />
    </section>
  );
}
