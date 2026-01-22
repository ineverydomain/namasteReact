import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, use } from "react";

const Body = () => {
  const [list, setList] = useState([]);
  const [filtredRestraunt, setFiltredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(json);
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFiltredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              // Fiter the restraunt cards and update the UI
              // console.log(searchText);

              const fr = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFiltredRestraunt(fr);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const fliteredList = list.filter((res) => res.rating > 4.3);
            setList(fliteredList);
            // console.log(list);
          }}
        >
          Top rated Restraunt
        </button>
      </div>

      <div className="res-container">
        {filtredRestraunt.map((res) => (
          <RestrauntCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
