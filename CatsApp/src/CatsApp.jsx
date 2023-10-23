import { getCatService } from "./catService";
import useFetch from "./hooks/useFetch";



const Cat = () => {

  const {data, getData} = useFetch(getCatService);
  

  return (
    <div>
      <h2 style={{ color: "#F5B7B1" }}>
        Los gatitos más lindos! Cada vez uno nuevo!
      </h2>

      <button onClick={getData} style={{ marginBottom: "1em" }}>
        Ver otro{" "}
      </button>
      <div>
        <img
          src={data.url}
          alt="imagen de gato aleatoria"
          style={{ borderRadius: "20px", maxWidth: "60vw" }}
        />
      </div>
    </div>
  );
};

export default Cat;
