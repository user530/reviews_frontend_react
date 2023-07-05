import { useState, useEffect } from 'react';
import { StrapiResponse, StrapiObject } from '../types';


const useFetch = <T extends StrapiObject>(url: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res: Response = await fetch(url);
                const json: StrapiResponse = await res.json();

                const data = json.data.map((item: StrapiObject) => item as T)

                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { loading, error, data };
};

export default useFetch;