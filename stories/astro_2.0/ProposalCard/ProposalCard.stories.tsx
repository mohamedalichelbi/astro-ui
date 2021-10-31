import React from 'react';

import { Meta, Story } from '@storybook/react';
import {
  ProposalCardRenderer,
  ProposalCardRendererProps,
} from 'astro_2.0/components/ProposalCardRenderer';
import { ProposalStatus, ProposalType, VoteAction } from 'types/proposal';
import { DaoFlagWidget } from 'astro_2.0/components/ProposalCardRenderer/components/DaoFlagWidget';
import { ProposalCard } from 'astro_2.0/components/ProposalCardRenderer/components/ProposalCard';
import { LetterHeadWidget } from 'astro_2.0/components/ProposalCardRenderer/components/LetterHeadWidget';
import { Vote } from 'features/types';
import { CreateProposalWidget } from 'astro_2.0/components/ProposalCardRenderer/components/CreateProposalWidget';

export default {
  title: 'astro_2.0/ProposalCard',
  component: ProposalCardRenderer,
  decorators: [
    story => (
      <div style={{ padding: '1rem', background: '#e5e5e5', maxWidth: 885 }}>
        {story()}
      </div>
    ),
  ],
} as Meta;

export const Template: Story<ProposalCardRendererProps> = ({
  proposalCardNode,
  daoFlagNode,
  letterHeadNode,
  infoPanelNode,
}): JSX.Element => (
  <ProposalCardRenderer
    proposalCardNode={proposalCardNode}
    daoFlagNode={daoFlagNode}
    letterHeadNode={letterHeadNode}
    infoPanelNode={infoPanelNode}
  />
);

Template.storyName = 'ProposalCard';

const cardProps = {
  onVoteClick: (action: VoteAction) => () => {
    // eslint-disable-next-line no-console
    console.log(action);
  },
  type: ProposalType.Transfer,
  status: 'Approved' as ProposalStatus,
  daoName: 'Ref.Finance',
  proposer: 'dkarpov.near',
  proposalTxHash: 'hash',
  flagUrl: '/dummy-flag.png',
  coverUrl: '/cover.png',
  link: 'http://google.com',
  expireTime: '3213213131',
  permissions: {
    canApprove: true,
    canReject: true,
    canDelete: true,
  },
  likes: 32,
  dislikes: 32,
  dismisses: 32,
  liked: false,
  disliked: false,
  dismissed: false,
  voteDetails: {
    limit: '100%',
    label: '',
    data: [
      { vote: 'Yes' as Vote, percent: 50 },
      { vote: 'No' as Vote, percent: 25 },
      { vote: null, percent: 25 },
    ],
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis eleifend habitant laoreet ornare vitae consequat. Potenti ut urna, ultricies elit nam. Feugiat porta elit ultricies eu mollis. Faucibus mauris faucibus aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis eleifend habitant laoreet ornare vitae consequat. Potenti ut urna, ultricies elit nam.',
};

const createProposalProps = {
  onCreate: () => {
    // eslint-disable-next-line no-console
    console.log('proposal created');
  },
  bond: '0.1',
  gas: '0.2',
};

Template.args = {
  daoFlagNode: (
    <DaoFlagWidget daoName="Ref.Finance" flagUrl="/dummy-flag.png" />
  ),
  proposalCardNode: <ProposalCard {...cardProps} />,
  letterHeadNode: (
    <LetterHeadWidget type={ProposalType.Transfer} coverUrl="/cover.png" />
  ),
  infoPanelNode: <CreateProposalWidget {...createProposalProps} />,
};
