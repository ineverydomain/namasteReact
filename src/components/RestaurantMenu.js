import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/constants";
import { FaStar, FaShop } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const [showIndex, setShowIndex] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU + resId);

    try {
      const json = await data.json();

      setResInfo(json.data);
    } catch (e) {
      console.log("Eror is" + e);
    }
    // console.log("parsed data", json);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    multiOutlet,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  let multi = "Outlet";
  if (multiOutlet == false) {
    multi = "Cloud";
  }

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="p-2 m-2 ">
      <div className="bg-green-600 w-[60%] rounded-lg m-2 p-2 justify-self-center">
        <h1 className="text-2xl font-bold text-center text-white "> {name}</h1>
      </div>
      <div className="text-center m-2 p-1 flex justify-self-center  w-[60%] rounded-lg   bg-gray-400  ">
        <div className="bg-white m-4 p-4 w-full rounded-md ">
          <div className="flex m-1 ">
            <FaStar className="flex m-1 items-center " />
            <div className="flex pl-1 font-medium pr-2">{avgRating}</div>
            <div className="flex font-medium">
              {"(" + totalRatingsString + ")"}
            </div>
            <div className="ml-3 font-medium">{costForTwoMessage} </div>
          </div>
          <div className="flex pl-2 font-medium mb-2 text-[18px] text-orange-600">
            {cuisines.join(", ")}
          </div>
          <div className="flex mb-2 font-medium">
            <FaShop className="flex m-1 items-center" />
            <div className="flex ml-1">{multi}</div>
          </div>
          <div className="flex">
            <FaRegClock className="flex m-1 items-center" />
            <div className=" ml-1 flex font-medium mb-2 ">{sla.slaString}</div>
          </div>
          <hr></hr>
          <div className="flex mt-3">
            <MdDeliveryDining className="size-6.25  " />
            <p className="font-normal ml-2 ">
              {sla.lastMileTravelString + " | "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center  "></div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
