import React, { useEffect, useState, useReducer, FC } from "react";
import axios from "axios";

interface PropsData {
  isLoading: boolean;
  isError: boolean;
  data: any;
}

interface Data<T> {
  initialData: T;
}

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        isLoading: true,
        isError: false,
        ...state,
      };
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        isError: false,
        ...state,
      };
    case "FETCH_FAILURE":
      return {
        isLoading: false,
        isError: true,
        ...state,
      };
    default:
      throw new Error();
  }
};

const useDataApi = <T extends PropsData>(
  initialUrl: string,
  initialData: Data<T>
) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  useEffect(() => {
    let didCancel = false as boolean;
    (async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        // const result = await axios(url);
        // dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_INIT" });
      }
    })();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};
export default useDataApi;
