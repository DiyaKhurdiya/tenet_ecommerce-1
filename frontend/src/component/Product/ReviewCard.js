
import React from "react";
import profilePng from "../../images/profile.png";
import { Rating } from "@material-ui/lab";

const ReviewCard = ({ review }) => {
  
  const options = {
    value: review?.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <p>
        <span className="reviewCardComment">{review.comment}</span>
      </p>
    </div>
  );
};

export default ReviewCard;
