import { FC } from 'react';
import cn from 'classnames';

import { Badge } from 'components/badge/Badge';
import ExternalLink from 'components/cards/proposal-card/components/external-link/ExternalLink';
import { Icon } from 'components/Icon';

import styles from './proposal-content.module.scss';

interface ProposalContentProps {
  link: string;
  linkTitle: string;
}

interface AddRemoveMemberProps extends ProposalContentProps {
  name: string;
  groupName: string;
}

export const AddMemberToGroup: FC<AddRemoveMemberProps> = ({
  name,
  groupName,
  link,
  linkTitle
}) => (
  <>
    <div className={styles.row}>
      <span className={cn('paragraph1', styles.text)}>
        Add <b>{name}</b> as member to
      </span>
      &nbsp;&nbsp;
      <Badge size="medium">{groupName}</Badge>
    </div>
    <div className={styles.sub}>
      <ExternalLink to={link}>{linkTitle}</ExternalLink>
    </div>
  </>
);

export const RemoveMemberFromGroup: FC<AddRemoveMemberProps> = ({
  name,
  groupName,
  link,
  linkTitle
}) => (
  <>
    <div className={styles.row}>
      <span className={cn('paragraph1', styles.text)}>
        Remove <b>{name}</b> from
      </span>
      &nbsp;&nbsp;
      <Badge size="small">{groupName}</Badge>
    </div>
    <div className={styles.sub}>
      <ExternalLink to={link}>{linkTitle}</ExternalLink>
    </div>
  </>
);

interface NewGroupProps extends ProposalContentProps {
  groupName: string;
}

export const CreateNewGroup: FC<NewGroupProps> = ({
  groupName,
  link,
  linkTitle
}) => (
  <>
    <div className={styles.row}>
      <span className={cn('paragraph1', styles.text)}>Create new group</span>
      &nbsp;&nbsp;
      <Badge size="small">{groupName}</Badge>
    </div>
    <div className={styles.sub}>
      <ExternalLink to={link}>{linkTitle}</ExternalLink>
    </div>
  </>
);

interface RequestPayoutProps extends ProposalContentProps {
  amount: number;
  tokens: string;
  recipient: string;
  reason: string;
}

export const RequestPayout: FC<RequestPayoutProps> = ({
  amount,
  tokens,
  recipient,
  reason,
  link,
  linkTitle
}) => (
  <>
    <div className={styles.row}>
      <span className={cn('paragraph1', styles.text)}>
        I would like to request a payment for {reason}
      </span>
      &nbsp;&nbsp;
    </div>
    <div className={styles.sub}>
      <ExternalLink to={link}>{linkTitle}</ExternalLink>
    </div>
    <div className={styles['sub-row']}>
      <span className={cn('title1', styles.value)}>{amount}</span>
      &nbsp;
      <span className={cn('title1', styles['value-desc'])}>{tokens}</span>
      <Icon name="buttonArrowRight" className={styles.icon} />
      <span>{recipient}</span>
    </div>
  </>
);

interface TextWithLinkProps extends ProposalContentProps {
  text: string;
}

export const TextWithLink: FC<TextWithLinkProps> = ({
  text,
  link,
  linkTitle
}) => (
  <>
    <div className={styles.row}>
      <span className={cn('paragraph1', styles.text)}>{text}</span>
      &nbsp;&nbsp;
    </div>
    <div className={styles.sub}>
      <ExternalLink to={link}>{linkTitle}</ExternalLink>
    </div>
  </>
);
