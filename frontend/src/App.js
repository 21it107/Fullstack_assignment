import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HelpTopics from './components/HelpTopics';
import Footer from './components/Footer';

const App = () => {
  const [helpTopics, setHelpTopics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/help-topics')
      .then(response => response.json())
      .then(data => setHelpTopics(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <HelpTopics topics={helpTopics} />
      <Footer />
    </div>
  );
};

export default App;