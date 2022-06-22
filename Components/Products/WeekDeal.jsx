import React from "react";
import { useSelector } from "react-redux";
import { selectWeekDeal } from "../../store/slices/ProductSlice";
import { Star } from "@styled-icons/feather/Star";

const WeekDeal = () => {
  const weekDeal = useSelector(selectWeekDeal);
  const image = weekDeal.images ? weekDeal.images[0] : "";
  return (
    <div className="card card-body week__deal border-0">
      <h3>This Week's Deal</h3>
      <img src={image} alt="" className="w-100 rounded-2" />
      <p>{weekDeal.title}</p>
      <small>{weekDeal.description}</small>
      <strong>{weekDeal.price}</strong>
    </div>
  );
};

export default WeekDeal;
