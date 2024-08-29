import React from 'react';

const TopicCard = ({ title, description }) => (
  <div className="topic-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default TopicCard;