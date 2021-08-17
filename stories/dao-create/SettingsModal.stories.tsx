import { Meta, Story } from '@storybook/react';
import { Button } from 'components/button/Button';
import { ModalProvider, useModal } from 'components/modal';
import { Caption } from 'components/Typography';
import { DaoSettingOption } from 'features/create-dao/components/option-card/DaoOptionCard';

import {
  DaoSettingsModal,
  DaoSettingsModalProps
} from 'features/create-dao/components/settings-modal/DaoSettingsModal';
import React, { FC, useCallback, useState } from 'react';

const options: DaoSettingOption[] = [
  {
    value: 'open',
    icon: 'illustrationOpenOrganization',
    subject: 'proposals',
    title: 'Open',
    description: 'Anyone can submit a proposal.'
  },
  {
    value: 'members',
    icon: 'illustrationMembersOnly',
    subject: 'proposals',
    title: 'Members Only',
    description: 'Only members or token-holders can submit a proposal.'
  }
];

export default {
  title: 'Features/DAO Create/Popups/Settings Modal',
  decorators: [story => <ModalProvider>{story()}</ModalProvider>]
} as Meta;

const DemoComponent: FC<{ modalProps: DaoSettingsModalProps }> = ({
  modalProps
}) => {
  const [showModal] = useModal<DaoSettingsModalProps>(DaoSettingsModal, {
    ...modalProps,
    options,
    title: 'Who can create proposals?',
    description: `Proposals aren't like voting on a question, requesting funds or adding new members. Every proposal has to be voted on.`,
    note: 'You can change this setting later'
  });

  const [currentValue, setValue] = useState('');
  const handleClick = useCallback(async () => {
    const response = (await showModal()) as unknown;

    if (response != null) setValue(response as string);
  }, [showModal]);

  return (
    <div>
      <h4>Current Value</h4>
      <Caption>{currentValue}</Caption>
      <Button type="button" onClick={handleClick}>
        Show Modal
      </Button>
    </div>
  );
};

export const Template: Story<DaoSettingsModalProps> = (args): JSX.Element => (
  <DemoComponent modalProps={args} />
);

Template.storyName = 'Settings Modal';