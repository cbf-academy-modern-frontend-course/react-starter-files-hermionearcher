import React, { useState, useEffect } from "react";

const useFetch = (
  url = "https://www.googleapis.com/books/v1/volumes?q=quilting",
  options = null
) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  }, [url, options]);
  return { data };
};

export default useFetch;
