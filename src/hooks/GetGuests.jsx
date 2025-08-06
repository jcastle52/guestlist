import { useEffect, useState } from "react";

export default function GetGuests(url) {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGuests = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        setGuests(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getGuests();
  }, [url]);
  return { guests, loading, error };
}
