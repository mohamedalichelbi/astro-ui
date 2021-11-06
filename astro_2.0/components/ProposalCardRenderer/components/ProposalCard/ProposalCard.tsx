import React, { ReactNode, useCallback } from 'react';
import { useAsyncFn } from 'react-use';
import { useRouter } from 'next/router';
import cn from 'classnames';

import {
  ProposalStatus,
  ProposalType,
  ProposalVariant,
  VoteAction,
} from 'types/proposal';
import ProposalControlPanel from 'components/cards/proposal-card/components/proposal-control-panel/ProposalControlPanel';
import { ProgressBar } from 'components/vote-details/components/progress-bar/ProgressBar';
import { VoteDetail } from 'features/types';
import { FieldWrapper } from 'astro_2.0/features/ViewProposal/components/FieldWrapper';
import { ProposalActions } from 'features/proposal/components/proposal-actions';
import { DAO } from 'types/dao';
import ExternalLink from 'components/cards/components/external-link/ExternalLink';
import { Icon, IconName } from 'components/Icon';
import { useGetVotePermissions } from 'components/cards/proposal-card/hooks/useGetVotePermissions';
import { InfoBlockWidget } from 'astro_2.0/components/InfoBlockWidget';
import { SputnikNearService } from 'services/sputnik';
import { getProposalVariantLabel } from 'astro_2.0/features/ViewProposal/helpers';
import { ExplorerLink } from 'components/explorer-link';
import { useCountdown } from 'components/cards/expanded-proposal-card/helpers';

import styles from './ProposalCard.module.scss';

export interface ProposalCardProps {
  id?: string;
  type: ProposalType;
  variant: ProposalVariant;
  status: ProposalStatus;
  proposer: string;
  description: string;
  link: string;
  proposalTxHash: string;
  dao: DAO;
  proposalId: number;
  accountId: string;
  likes: number;
  dislikes: number;
  liked: boolean;
  disliked: boolean;
  voteDetails?: VoteDetail;
  content: ReactNode;
  votePeriodEnd: string;
}

export const ProposalCard: React.FC<ProposalCardProps> = ({
  id,
  type,
  variant,
  proposalTxHash,
  proposer,
  description,
  link,
  status,
  proposalId,
  votePeriodEnd,
  likes,
  dislikes,
  liked,
  disliked,
  voteDetails,
  content,
  accountId,
  dao,
}) => {
  const router = useRouter();
  const permissions = useGetVotePermissions(dao, type, accountId);

  let sealIcon;

  const [{ loading: voteLoading }, voteClickHandler] = useAsyncFn(
    async (vote: VoteAction) => {
      return SputnikNearService.vote(dao.id, proposalId, vote);
    },
    [dao, proposalId]
  );

  const handleCardClick = useCallback(() => {
    if (id) {
      router.push(`/dao/${dao.id}/proposals/${id}`);
    }
  }, [dao.id, id, router]);

  switch (status) {
    case 'Approved': {
      sealIcon = 'sealApproved';
      break;
    }
    case 'Expired':
    case 'Moved':
    case 'Rejected':
    case 'Removed': {
      sealIcon = 'sealFailed';
      break;
    }
    case 'InProgress':
    default: {
      sealIcon = null;
    }
  }

  const timeLeft = useCountdown(votePeriodEnd);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={cn(styles.root, {
        [styles.clickable]: !!id,
      })}
      onClick={handleCardClick}
    >
      {sealIcon && (
        <div className={styles.proposalStatusSeal}>
          <Icon name={sealIcon as IconName} />
        </div>
      )}
      <div className={styles.proposalCell}>
        <InfoBlockWidget
          valueFontSize="L"
          label={`Proposal type: ${type}`}
          value={
            <div className={styles.proposalType}>
              {getProposalVariantLabel(variant)}
              <ExplorerLink
                linkData={proposalTxHash}
                linkType="transaction"
                className={styles.proposalWalletLink}
              />
            </div>
          }
        />
      </div>
      <div className={styles.countdownCell}>
        {timeLeft ? `${timeLeft} left` : 'Voting ended'}
      </div>
      <div className={styles.proposerCell}>
        <InfoBlockWidget label="Proposer" value={proposer} />
      </div>
      <div className={styles.descriptionCell}>
        <FieldWrapper label="Description" fullWidth>
          <div className={styles.proposalDescription}>{description}</div>
        </FieldWrapper>

        <div className={styles.proposalExternalLink}>
          <ExternalLink to={link} />
        </div>
      </div>
      <div className={styles.contentCell}>{content}</div>
      <div className={styles.voteControlCell}>
        <ProposalControlPanel
          status={status}
          onLike={() => voteClickHandler('VoteApprove')}
          onDislike={() => voteClickHandler('VoteReject')}
          disableControls={voteLoading}
          likes={likes}
          liked={liked}
          dislikes={dislikes}
          disliked={disliked}
          permissions={permissions}
        />
      </div>
      <div className={styles.voteProgress}>
        {voteDetails && <ProgressBar detail={voteDetails} />}
      </div>
      <div className={styles.actionBar}>
        <ProposalActions />
      </div>
    </div>
  );
};
