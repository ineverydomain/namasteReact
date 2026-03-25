import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="flex m-3 border-gray-300 border-b-2 justify-between items-center relative"
        >
          <div className="">
            <h1 className="font-bold font-sans text-left ml-2">
              {item.card?.info?.name}
              <span
                onClick={() => handleAddItem(item)}
                className="ml-2 px-2 py-2  font-semibold border border-black rounded-md hover:pointer hover:bg-black hover:text-white text-green-700"
              >
                Add
              </span>
            </h1>
            <span className="pl-1">
              ₹
              {item.card?.info?.price / 100 ||
                item.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-sm ml-2 mb-2">{item.card?.info?.description}</p>
          </div>

          <img
            src={IMG_URL + item.card.info.imageId}
            className="border-2 border-gray-300 w-2/12 h-32 object-cover rounded-md "
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
