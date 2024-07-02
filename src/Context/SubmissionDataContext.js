import React, { createContext, useState, useEffect } from 'react';

export const SubmissionDataContext = createContext();

export const SubmissionDataProvider = ({ children }) => {
  const [submissionDataList, setSubmissionDataList] = useState([]);

  useEffect(() => {
    console.log('Updated submissionDataList:', submissionDataList);
  }, [submissionDataList]);

  return (
    <SubmissionDataContext.Provider value={{ submissionDataList, setSubmissionDataList }}>
      {children}
    </SubmissionDataContext.Provider>
  );
};
