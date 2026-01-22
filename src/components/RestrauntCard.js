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
    <div className="res-card">
      <img className="food-img" src={IMG_URL + cloudinaryImageId}></img>
      <div className="card-content">
        <h3>{name}</h3>
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

export default RestrauntCard;
