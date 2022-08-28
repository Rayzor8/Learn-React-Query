import React from "react";
import "./ModalShowUser.css";

const ModalShowUser = ({ setShowModalData ,show}) => {
  return (
    <div className={`modal_overlay ${show}`}>
      <main className={`modal_content`} >
        ModalShowUser
        <button onClick={() => setShowModalData(false)}>close</button>
      </main>
    </div>
  );
};

export default ModalShowUser;
