// utils/utils.js
export const handleSubmissionData = (submissionData, setSubmissionDataList) => {
    setSubmissionDataList(prevList => {
      // Check if the submission data is valid
      if (submissionData && submissionData.selectedOption) {
        return [...prevList, submissionData];
      }
      return prevList;
    });
  };
  