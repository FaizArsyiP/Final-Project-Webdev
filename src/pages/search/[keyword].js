import axios from 'axios';
import AnimeList from '@/components/Animelist/AnimeList';
import Header from '@/components/Animelist/Header';

export const getServerSideProps = async (context) => {
  const { keyword } = context.params;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = response.data.data;

  return {
    props: {
      keyword,
      searchAnime,
    },
  };
};

const SearchResults = ({ keyword, searchAnime }) => {
  return (
    <div>
      <section>
        <Header title={`Pencarian Untuk ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default SearchResults;
