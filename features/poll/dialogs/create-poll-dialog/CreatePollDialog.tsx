import React, { FC, useCallback } from 'react';

import { Modal } from 'components/modal';

import { CreatePollForm } from 'features/poll/dialogs/create-poll-dialog/components/CreatePollForm';
import styles from 'features/poll/dialogs/poll-dialogs.module.scss';
import { Icon } from 'components/Icon';

export interface CreatePollDialogProps {
  isOpen: boolean;
  onClose: (...args: unknown[]) => void;
}

export const CreatePollDialog: FC<CreatePollDialogProps> = ({
  isOpen,
  onClose
}) => {
  const handleSubmit = useCallback(() => {
    // todo - handle create poll here
    onClose('submitted');
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <header className={styles.header}>
        <Icon name="proposalPoll" width={24} />
        <h2>Create a new poll</h2>
      </header>
      <div className={styles.content}>
        <CreatePollForm onCancel={onClose} onSubmit={handleSubmit} />
      </div>
    </Modal>
  );
};
