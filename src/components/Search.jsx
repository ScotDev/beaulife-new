import { useState, useEffect } from "react";
import { searchLocation } from "../utils/searchLocation";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

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
      // console.log(selectedResult.lat, selectedResult.lon, selectedResult.url);
      navigate(
        `/search/${selectedResult.lat}/${selectedResult.lon}/${selectedResult.url}`
      );
      setResults([]);
    }
  };

  return (
    <div className="w-full rounded-xl relative  ">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full rounded-xl px-4 py-2 bg-white bg-opacity-25 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
          type="text"
          onChange={handleInputChange}
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <ul className="z-20 absolute w-full rounded-md m-0 glass-card mt-2">
        {results.length > 0 &&
          results.map((result) => (
            <li
              key={result.id}
              className=" py-2 px-4 flex flex-col rounded-md gap-1 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                handleClick(result);
              }}
            >
              <h3 className="font-medium">{result.name}</h3>
              <h5 className="text-sm">{result.region}</h5>
              <h4 className="">{result.country}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
}
