import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchData(url, page, limit) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}?offset=${(page - 1) * limit}&limit=${limit}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url, page, limit]);

  return { data, loading, error };
}
