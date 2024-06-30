import React, { createContext, useState } from 'react';

export const RectanglesContext = createContext();

export const RectanglesProvider = ({ children }) => {
  const [rectangles, setRectangles] = useState([]);

  return (
    <RectanglesContext.Provider value={{ rectangles, setRectangles }}>
      {children}
    </RectanglesContext.Provider>
  );
};