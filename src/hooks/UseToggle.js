import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const handleToggle = () => setState((prev) => !prev);
  const closeModal = () => setState(false)
  
  return [state, handleToggle,closeModal];
};

export default useToggle;
