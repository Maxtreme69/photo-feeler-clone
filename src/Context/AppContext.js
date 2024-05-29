import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [myTestsData, setMyTestsData] = useState([]); // Updated variable names

  useEffect(() => {
    console.log('selectedImageContext:', selectedImage);
  }, [selectedImage]);

  useEffect(() => {
    console.log('selectedCategoryContext:', selectedCategory);
  }, [selectedCategory]);

  const addVote = (image, category) => {
    const newVote = { image, category };
    setMyTestsData(prevData => [...prevData, newVote]);
    console.log('myTestsData:', [...myTestsData, newVote]); // Log the updated votes array
  };

  return (
    <AppContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        selectedCategory,
        setSelectedCategory,
        addVote, // Provide addVote function
        myTestsData, // Provide myTestsData to consumers
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
