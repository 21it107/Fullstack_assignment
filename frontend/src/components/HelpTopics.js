import React from 'react';
import TopicCard from './TopicCard';

const HelpTopics = ({ topics }) => (
  <div className="help-topics">
    {topics.map((topic, index) => (
      <TopicCard key={index} title={topic.title} description={topic.description} />
    ))}
  </div>
);

export default HelpTopics;