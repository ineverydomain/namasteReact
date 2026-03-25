import { IMG_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    price,
    sla,
    costForTwo,
    deliveryTime,
    areaName,
    cloudinaryImageId,
  } = resData;
  // console.log(props);
  return (
    <div className="m-4 p-4 w-62.5 bg-gray-200 rounded-2xl hover:w-63.75 hover:bg-gray-300">
      <img
        className="mx-1 p-1 rounded-2xl"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <div className="">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="price-and-rating">
          <p>{avgRating}star</p>
          <p>{costForTwo}</p>
          <p>{sla.deliveryTime}mins</p>
        </div>
        <div>{areaName}</div>
      </div>
    </div>
  );
};

// Higher Order component

export const goodRating = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">
          {" "}
          Promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
