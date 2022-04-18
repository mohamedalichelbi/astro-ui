import React, { FC, useCallback, useEffect, useState } from 'react';

import { CreationProgress } from 'astro_2.0/components/CreationProgress';
import { CreateProposal } from 'astro_2.0/features/CreateProposal';
import { ViewStepProposal } from 'astro_2.0/features/pages/nestedDaoPagesContent/DaoVersionPageContent/components/UpgradeVersionWizard/components/ViewStepProposal';

import { DaoContext } from 'types/context';
import { UpgradeStatus, UpgradeSteps } from 'types/settings';
import { ProposalFeedItem, ProposalType } from 'types/proposal';

import { SputnikHttpService } from 'services/sputnik';
import { useAuthContext } from 'context/AuthContext';

import {
  getNextUpgradeStep,
  getStepProposalVariant,
  getVersionUpgradeSteps,
} from 'astro_2.0/features/pages/nestedDaoPagesContent/DaoVersionPageContent/components/UpgradeVersionWizard/helpers';

import styles from './UpgradeVersionWizard.module.scss';

interface Props {
  daoContext: DaoContext;
  upgradeStatus: UpgradeStatus;
  versionHash: string;
  onUpdate: ({
    upgradeStep,
    proposalId,
    versionHash,
  }: {
    upgradeStep: UpgradeSteps | null;
    proposalId: number | null;
    versionHash: string;
  }) => Promise<void>;
}

export const UpgradeVersionWizard: FC<Props> = ({
  daoContext,
  upgradeStatus,
  onUpdate,
  versionHash,
}) => {
  const { accountId } = useAuthContext();
  const [proposal, setProposal] = useState<ProposalFeedItem | null>(null);
  const steps = getVersionUpgradeSteps(upgradeStatus, proposal);
  const stepProposalVariant = getStepProposalVariant(upgradeStatus);
  const proposalId = upgradeStatus?.proposalId;
  const isViewProposal = proposalId !== null;
  const canControlUpgrade =
    daoContext.userPermissions.isCanCreateProposals &&
    daoContext.userPermissions.allowedProposalsToCreate[
      ProposalType.UpgradeSelf
    ];

  const handleProposalCreate = useCallback(
    async (newProposalId: number | null) => {
      if (
        newProposalId !== null &&
        newProposalId !== undefined &&
        canControlUpgrade
      ) {
        await onUpdate({
          upgradeStep: upgradeStatus.upgradeStep,
          proposalId: Number(newProposalId),
          versionHash,
        });
      }
    },
    [canControlUpgrade, onUpdate, upgradeStatus.upgradeStep, versionHash]
  );

  const handleViewProposalApprove = useCallback(async () => {
    if (!canControlUpgrade) {
      return;
    }

    await onUpdate({
      upgradeStep: getNextUpgradeStep(upgradeStatus.upgradeStep),
      proposalId: null,
      versionHash,
    });
  }, [canControlUpgrade, onUpdate, upgradeStatus.upgradeStep, versionHash]);

  const handleViewProposalReject = useCallback(async () => {
    if (!canControlUpgrade) {
      return;
    }

    await onUpdate({
      upgradeStep: null,
      proposalId: null,
      versionHash,
    });
  }, [canControlUpgrade, onUpdate, versionHash]);

  useEffect(() => {
    (async () => {
      if (proposalId !== undefined && proposalId !== null) {
        const res = await SputnikHttpService.getProposalById(
          `${daoContext.dao.id}-${proposalId}`,
          accountId
        );

        setProposal(res);
      } else {
        setProposal(null);
      }
    })();
  }, [accountId, daoContext.dao.id, proposalId]);

  if (!steps || !stepProposalVariant) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.steps}>
        <CreationProgress steps={steps} />
      </div>
      <div className={styles.content}>
        {isViewProposal && proposal && (
          <ViewStepProposal
            isLastStep={
              upgradeStatus.upgradeStep === UpgradeSteps.RemoveUpgradeCode
            }
            canControlUpgrade={canControlUpgrade}
            proposal={proposal}
            onApproved={handleViewProposalApprove}
            onRejected={handleViewProposalReject}
          />
        )}
        {!isViewProposal && (
          <CreateProposal
            {...daoContext}
            onCreate={handleProposalCreate}
            redirectAfterCreation={false}
            onClose={() => null}
            daoTokens={{}}
            showFlag={false}
            showClose={false}
            showInfo={false}
            proposalVariant={stepProposalVariant}
            initialValues={{ versionHash }}
          />
        )}
      </div>
    </div>
  );
};