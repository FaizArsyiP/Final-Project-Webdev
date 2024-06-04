"use client"

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SearchBar() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        placeholder="Cari Anime..."
        className="text-black rounded-md p-1"
        ref={searchRef}
      />
      <button className="absolute top-1 end-3 text-black" onClick={handleSearch}>
        &#x2315;
      </button>
    </form>
  );
}
