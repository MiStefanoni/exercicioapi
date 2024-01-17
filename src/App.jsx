import { useEffect, useState } from "react";
import { WorkTile } from "../components/workTile";
import "./App.css";

const urlBase = "https://jsonplaceholder.typicode.com/photos";

function App() {
  const [toDo, setToDo] = useState([]);
  console.log(toDo);
  async function fetchData() {
    const resp = await fetch(urlBase);
    const respTratada = await resp.json();
    setToDo(respTratada);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
    {toDo.map((workTile) => {
      return (
        <WorkTile 
        key={workTile.id}
        albumId={workTile.albumId} 
        Id={workTile.Id} 
        title={workTile.title} 
        url={workTile.url} 
        thumbnailUrl={workTile.thumbnailUrl} 
        ></WorkTile>
      )
    })}
  </div>
    </>
  );
}

export default App;
