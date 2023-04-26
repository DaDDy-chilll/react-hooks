import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const respond = await fetch(url);
    const getData = await respond.json();
    setData(getData);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { loading, data };
};
export default useFetch;
