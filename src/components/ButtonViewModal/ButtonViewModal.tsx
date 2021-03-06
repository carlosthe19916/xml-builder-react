import * as React from "react";
import { Text, Button, TextVariants, Modal } from "@patternfly/react-core";
import { ApplicationsIcon } from "@patternfly/react-icons";

export interface ButtonViewModalProps {
  buttonLabel: string;
  modalTitle: string;
  modalContent: string;
}

export const ButtonViewModal: React.FC<ButtonViewModalProps> = ({
  modalTitle,
  buttonLabel,
  modalContent
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button
        variant="link"
        icon={<ApplicationsIcon />}
        onClick={handleModalToggle}
      >
        {buttonLabel}
      </Button>
      <Modal
        isSmall
        title={modalTitle}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        actions={[
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Close
          </Button>
        ]}
        isFooterLeftAligned
      >
        <Text component={TextVariants.blockquote}>{modalContent}</Text>
      </Modal>
    </React.Fragment>
  );
};
