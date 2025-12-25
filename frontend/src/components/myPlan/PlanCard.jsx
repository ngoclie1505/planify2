import React from 'react';
import { Link } from "react-router-dom";
import LikeButton from './LikeButton';
import './PlanCard.css';

const PlanCard = ({ item }) => {
  return (
    <div className="plan-card">
      {/* Use Link for navigation to ViewPlan */}
      <Link to={`/plans/${item.id}`} className="plan-card-link">
        <div className="card-image" />
        <div className="card-info">
          <h3 className="plan-title">{item.title}</h3>
          <p className="plan-duration">{item.duration}</p>
        </div>
      </Link>

      {/* LikeButton positioned at bottom or corner */}
      <div className="like-button-wrapper">
        <LikeButton itemId={item.id} />
      </div>
    </div>
  );
};

export default PlanCard;