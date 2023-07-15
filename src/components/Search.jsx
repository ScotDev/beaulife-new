import { useState, useEffect } from "react";
import { searchLocation } from "../utils/searchLocation";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      // Call the API or perform other expensive operations here

      const res = await searchLocation(searchTerm);
      if (res.length < 1)
        return setResults([
          {
            name: "No results found",
            region: "",
            country: "",
            lat: "",
            lon: "",
          },
        ]);
      // console.log(res);
      setResults(res);
      console.log("Search term:", searchTerm);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (selectedResult) => {
    if (selectedResult) {
      console.log(selectedResult.lat, selectedResult.lon, selectedResult.url);
      setResults([]);
    }
  };

  return (
    <div className="w-full rounded-xl relative">
      <form onSubmit={handleSubmit}>
        <div className="relative text-gray-700 dark:text-gray-300 dark:focus-within:text-gray-200 focus-within:text-gray-800 ">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2 z-20">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            className="w-full shadow-sm shadow-slate-300 dark:shadow-none glass-card px-4 h-10 pl-10 pr-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 cursor-text"
            type="search"
            name="q"
            placeholder="Search"
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
      </form>
      <ul className="z-20 absolute w-full rounded-md m-0 glass-card mt-2">
        {results.length > 0 &&
          results.map((result) => {
            if (result.lat && result.lon && result.url) {
              return (
                <Link
                  to={`/search/${result.lat}/${result.lon}/${result.url}`}
                  onClick={() => {
                    handleClick(result);
                  }}
                >
                  <li
                    key={result.id}
                    className=" py-2 px-4 flex flex-col rounded-md gap-1 hover:bg-gray-50 cursor-pointer"
                  >
                    <h3 className="font-medium">{result.name}</h3>
                    <h5 className="text-sm">{result.region}</h5>
                    <h4 className="">{result.country}</h4>
                  </li>
                </Link>
              );
            } else {
              return (
                <li
                  key={result.id}
                  className=" py-2 px-4 flex flex-col rounded-md gap-1 cursor-default"
                >
                  <h3 className="font-medium">{result.name}</h3>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}
