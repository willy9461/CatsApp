import { useEffect, useState } from 'react'

const useFetch = (service) => {
    const [data, setData] = useState({
        id: "",
        url: "url",
      });
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
    
      const getData = async () => {
        setError(null);
        setIsLoading(true);
    
        try {
          const response = await service();
    
          setData(response);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

      return {
        data, getData, isLoading, error 
      }
}

export default useFetch