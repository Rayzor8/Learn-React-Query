import React from "react";
import "./ModalShowUser.css";

const ModalShowUser = ({ closeModal ,show}) => {
  return (
    <div className={`modal_overlay ${show}`}>
      <main className={`modal_content`} >
        ModalShowUser
        <button onClick={closeModal}>close</button>
      </main>
    </div>
  );
};

export default ModalShowUser;
