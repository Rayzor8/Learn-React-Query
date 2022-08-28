import "./App.css";
import { ModalShowUser } from "./components/modals";
import useToggle from "./hooks/UseToggle";
import useGetCats from "./hooks/UseGetCats";

function App() {
  const [showModalData, handleToggle, closeModal] = useToggle(false);
  const { renderCatsFact } = useGetCats();

  return (
    <div className="App">
      <ModalShowUser
        closeModal={closeModal}
        show={showModalData ? "visible_visible" : "visible_hidden"}
      />
      <button onClick={handleToggle}>Show data</button>
      {renderCatsFact}
    </div>
  );
}

export default App;
