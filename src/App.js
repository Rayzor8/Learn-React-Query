import logo from "./logo.svg";
import "./App.css";
import { useQuery, useQueryClient } from "react-query";
import { showCatFact } from "./components/api/catApi";
import { useState,useEffect } from "react";
import { ModalShowUser } from "./components/modals";

function App() {
  const [showModalData, setShowModalData] = useState(false);
  
  const { data, isLoading, isError, refetch } = useQuery(
    ["fetchCat"],
    showCatFact,{
      refetchOnMount:false
    }
  );



  let render;
  if (isLoading) render = <h1>Loading</h1>;
  else if (isError) render = <h1>Error fetching</h1>;
  else
    render = (
      <>
        {" "}
        <p>{data?.fact}</p>
        <button onClick={refetch}>refetch</button>
      </>
    );

  return (
    <div className="App">
      <button onClick={() => setShowModalData((prev) => !prev)}>
        Show data
      </button>
      <ModalShowUser
        setShowModalData={setShowModalData}
        show={showModalData ? "visible_visible" : "visible_hidden"}
      />
      {render}
    </div>
  );
}

export default App;
