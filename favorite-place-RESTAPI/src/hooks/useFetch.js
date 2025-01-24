import { useState, useEffect } from 'react';

export const useFetch = (fetchFn, initialData) => {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState();
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const fetchedData = await fetchFn();
                setData(fetchedData);
            } catch (error) {
                setError(error);
                setIsFetching(false);
            }
        }

        fetchData();
        setIsFetching(false)

    }, [fetchFn]);

    return [data, error, isFetching, setData];

}