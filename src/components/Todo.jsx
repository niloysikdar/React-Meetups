import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ title }) => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const deleteHnadler = () => {
    setModalIsOpen(true);
  };

  const onCancel = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHnadler}>
          Delete
        </button>
      </div>
      {isModalOpen && <Modal onCancel={onCancel} />}
      {isModalOpen && <Backdrop onCancel={onCancel} />}
    </div>
  );
};

export default Todo;
