import logo from "./logo.svg";
import "./App.css";
import { useQuery, useQueryClient } from "react-query";
import { showCatFact } from "./components/api/catApi";

function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, refetch } = useQuery(
    ["fetchCat"],
    showCatFact
  );

  console.log(data);

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
      {render}
    </div>
  );
}

export default App;
