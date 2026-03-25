import RestrauntCard, { goodRating } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantMenu from "./RestaurantMenu";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [list, setList] = useState([]);
  const [filtredRestraunt, setFiltredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ResCardPrompted = goodRating(RestrauntCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();
    console.log(json);

    console.log(list);
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFiltredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are Offline! Please check internet connection.</h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 p-4 ">
          <input
            type="text"
            className="border"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-1 m-2 bg-amber-300 rounded-2xl cursor-pointer "
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
        <div>
          <label>Username : </label>
          <input
            className="border-black border"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 m-2 bg-amber-300 rounded-2xl cursor-pointer"
            onClick={() => {
              const fliteredList = list.filter(
                (res) => res.info.avgRating > 4.3,
              );
              console.log(fliteredList);
              setFiltredRestraunt(fliteredList);
              // console.log(list);
            }}
          >
            Top rated Restraunt
          </button>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filtredRestraunt.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.avgRating > 4.5 ? (
              <ResCardPrompted resData={res.info} />
            ) : (
              <RestrauntCard key={res.info.id} resData={res.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
