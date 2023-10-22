import React, { useEffect, useState } from 'react'
import { getCatService } from '../catService';
import { catAdapter } from '../adapters/catAdapter';

const useFetch = () => {
    const [data, setData] = useState({
        id: "",
        url: "url",
      });
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
    
      const getCat = async () => {
        setError(null);
        setIsLoading(true);
    
        try {
          const response = await getCatService();
    
          const adapted = catAdapter(response);
    
          setData(adapted);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        getCat();
      }, []);

      return {
        data, getCat,
      }
}

export default useFetch