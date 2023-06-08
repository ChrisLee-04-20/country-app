import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    async function fetchAPI() {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw Error("Failed to fetch the data");
            }
            const jObject = await res.json();
            setData(jObject);
            setIsPending(false);
        } catch (e) {
            setIsPending(false);
            setError(e);
        }
    }

    useEffect(() => {
        fetchAPI();
    },[]);
  
    return {data, isPending, error};
}

export default useFetch;
