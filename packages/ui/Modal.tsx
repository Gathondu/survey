import { FC, ReactElement } from "react";
import Modal from "@mui/material/Modal";

interface MProps {
  children: ReactElement;
  isModalOpen: boolean;
  closeModal: () => void;
}

const AppModal: FC<MProps> = ({ children, isModalOpen, closeModal }) => {
  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      {children}
    </Modal>
  );
};

export default AppModal;
