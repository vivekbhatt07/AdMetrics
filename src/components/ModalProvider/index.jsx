import { Modal } from "@mui/material";

const ModalProvider = (props) => {
  const { children, isOpen, closeModal, modalTitle } = props;
  return (
    <div>
      <Modal open={isOpen} onClose={closeModal}>
        <div className="text-stone-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[180px] bg-stone-200 p-4 flex flex-col gap-4 rounded ">
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
