import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import { showCatFact } from "./api/catApi";
import { ModalShowUser } from "./components/modals";
import useToggle from "./hooks/UseToggle";

function App() {
  const [showModalData,handleToggle,closeModal] = useToggle(false)

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
      <button onClick={handleToggle}>
        Show data
      </button>
      <ModalShowUser
        closeModal={closeModal}
        show={showModalData ? "visible_visible" : "visible_hidden"}
      />
      {render}
    </div>
  );
}

export default App;
