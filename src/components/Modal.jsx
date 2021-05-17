const Modal = ({ onCancel }) => {
  const onCancelHandler = () => {
    onCancel();
  };

  const onConfirmHandler = () => {
    onCancel();
  };

  return (
    <div className="modal">
      <p>Are you sure ?</p>
      <button className="btn btn--alt" onClick={onCancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
