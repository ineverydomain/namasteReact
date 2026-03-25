import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";
import { useState } from "react";
import { VscSettingsGear } from "react-icons/vsc";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" w-[60%] rounded-lg shadow-lg m-auto mb-5 bg-white p-4">
        <div className="flex justify-between items-center w-full pt-2 pb-3 cursor-pointer">
          <div
            onClick={handleClick}
            className="ml-2 font-bold text-lg font-sans size-3 w-full"
          >
            {data.title} ({data.itemCards.length})
          </div>

          <IoIosArrowDown className="size-5" />
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
