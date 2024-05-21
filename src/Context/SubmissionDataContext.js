import React, { createContext, useState } from 'react';

export const SubmissionDataContext = createContext();

export const SubmissionDataProvider = ({ children }) => {
  const [submissionDataList, setSubmissionDataList] = useState([]);

  return (
    <SubmissionDataContext.Provider value={{ submissionDataList, setSubmissionDataList }}>
      {children}
    </SubmissionDataContext.Provider>
  );
};
