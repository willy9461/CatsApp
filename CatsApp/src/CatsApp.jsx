import { useState, useEffect } from "react"
import axios from "axios"


const catAdapter = (response) => {
  return {
    id: response[0].id,
    url: response[0].url,
  };
};




const Cat = () => {
  const [data, setData] = useState({
    id: '',
    url: 'url',
  });
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getCat =  async () => {
    setError(null);
    setIsLoading(true);
       
  try {
      const response = await axios ('https://api.thecatapi.com/v1/images/search');

      const adapted = catAdapter(response.data);

      setData(adapted);

      } catch (error) {

        setError(error);

      } finally { setIsLoading(false);
      }
    };

  useEffect(() =>{

    
      getCat();
    },[]);

   

  return (
    <div>
      <h2 style={{color:'#F5B7B1'}}>Los gatitos más lindos! Cada vez uno nuevo!</h2>

        <button onClick={getCat} style={{marginBottom:'1em'}}>Ver otro </button>
    <div>
        <img src={data.url} alt="imagen de gato aleatoria" style={{borderRadius:'20px', maxWidth:'60vw'} } />
    </div>    
    </div>
  );
  
};

export default Cat;