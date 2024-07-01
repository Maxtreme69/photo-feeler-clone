import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [myTestsData, setMyTestsData] = useState([]);
  const [votes, setVotes] = useState({});
  const [testSizeData, setTestSizeData] = useState([]); // New state for storing test size data

  useEffect(() => {
    console.log('selectedImageContext:', selectedImage);
  }, [selectedImage]);

  useEffect(() => {
    console.log('selectedCategoryContext:', selectedCategory);
  }, [selectedCategory]);

  const addVote = (image, category) => {
    const newVote = { image, category };
    setMyTestsData(prevData => [...prevData, newVote]);
    setVotes(prevVotes => ({
      ...prevVotes,
      [image]: (prevVotes[image] || 0) + 1
    }));
    console.log('myTestsData:', [...myTestsData, newVote]); // Log the updated votes array
    console.log('votes:', { ...votes, [image]: (votes[image] || 0) + 1 });
  };

  const addTestSizeData = (newEntry) => {
    const updatedEntry = {
      ...newEntry,
      originalFileName: newEntry.selectedImage.name, // Store original file name
    };
    console.log('New entry in AppContext:', updatedEntry);
    setTestSizeData(prevData => [...prevData, updatedEntry]);
  };

  return (
    <AppContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        selectedCategory,
        setSelectedCategory,
        addVote,
        myTestsData,
        votes,
        addTestSizeData,
        testSizeData // Provide testSizeData to consumers
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
