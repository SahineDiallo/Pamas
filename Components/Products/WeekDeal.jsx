import React from "react";
import { useSelector } from "react-redux";
import { selectWeekDeal } from "../../store/slices/ProductSlice";

const WeekDeal = () => {
  const weekDeal = useSelector(selectWeekDeal);
  const image = weekDeal.images ? weekDeal.images[0] : "";
  console.log("this is the image", WeekDeal.images);
  return (
    <div className="col pr-lg-2">
      <div className="card card-body week__deal border-0 h-100">
        <h3>This Week's Deal</h3>
        <img src={image} alt="" className="w-100 rounded-2" />
        <p>{weekDeal.title}</p>
        <small>{weekDeal.description}</small>
        <strong>{weekDeal.price}</strong>
      </div>
    </div>
  );
};

export default WeekDeal;
