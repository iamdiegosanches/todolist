import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCount = new AbortController()

        fetch(url, {signal: abortCount.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError'){
                console.log('fetch aborted');
            } else {
                setError(err.message);
            }
        })
    }, [url]);

    return{data, error};
    
}
 
export default useFetch;