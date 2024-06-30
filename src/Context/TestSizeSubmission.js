import React, { createContext, useState, useContext } from 'react';

const TestSizeSubmissionContext = createContext();

export const useTestSizeSubmission = () => useContext(TestSizeSubmissionContext);

export const TestSizeSubmissionProvider = ({ children }) => {
  const [testData, setTestData] = useState([]);

  const addTestSizeData = (data) => {
    setTestData(prevData => [...prevData, data]);
  };

  return (
    <TestSizeSubmissionContext.Provider value={{ testData, addTestSizeData }}>
      {children}
    </TestSizeSubmissionContext.Provider>
  );
};
