import { useQuery } from "react-query";
import { showCatFact } from "../api/catApi";

const useGetCats = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["fetchCat"],
    showCatFact,
    {
      refetchOnMount: false,
    }
  );

  const handleRefetch = () => {
    if (window.confirm("are you sure to refetch")) {
      refetch();
    }
  };

  let renderCatsFact;
  if (isLoading) renderCatsFact = <h1>Loading</h1>;
  else if (isError) renderCatsFact = <h1>Error fetching</h1>;
  else
    renderCatsFact = (
      <>
        {" "}
        <p>{data?.fact}</p>
        <button onClick={handleRefetch}>refetch</button>
      </>
    );

  return { renderCatsFact };
};

export default useGetCats;
