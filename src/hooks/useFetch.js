import { useCallback, useEffect, useState } from "react";
import { handleErrors } from "../helpers/api";

const useFetch = (path) => {
  // Declare state variables to hold the fetched data and any errors
  const [data, setData] = useState();
  const [error, setError] = useState();

  // Define a function to fetch the data from the server
  const fetchData = useCallback(() => {
    // Create a variable to keep track of whether the component is still mounted
    let isCurrent = true;

    // Make a fetch request to the API endpoint
    fetch(`${process.env.REACT_APP_API_URL}${path}`)
      // Handle any errors that may occur in the response
      .then(handleErrors)
      // If there are no errors, set the data state variable
      .then((data) => isCurrent && setData(data))
      // If there is an error, set the error state variable
      .catch((error) => isCurrent && setError(String(error)));

    // Return a cleanup function that sets isCurrent to false when the component is unmounted
    return () => (isCurrent = false);
  }, [path]);

  // Call the fetchData function when the component mounts or when path changes
  useEffect(() => {
    return fetchData();
  }, [fetchData]);

  // Define a function to manually refresh the data
  const invalidate = () => {
    fetchData();
  };

  // Determine whether the data is still loading
  const isLoading = !error && !data;

  // Return an object with the data, error, isLoading, and invalidate function
  return {
    isLoading,
    data,
    error,
    invalidate,
  };
};

// Export the useFetch hook
export default useFetch;
