import { ProposalCategories } from 'types/proposal';
import { ListItem } from 'astro_3.0/features/ProposalsFeed/components/CategoriesFeedFilter';

export const FEED_CATEGORIES = [
  {
    value: ProposalCategories.FunctionCalls,
    label: 'Function Calls',
    icon: 'filterFunction',
  },
  {
    value: ProposalCategories.Governance,
    label: 'Governance',
    icon: 'filterGovernance',
  },
  {
    value: ProposalCategories.Financial,
    label: 'Transfers',
    icon: 'filterTransfer',
  },
  {
    value: ProposalCategories.Bounties,
    label: 'Bounties',
    icon: 'filterBounty',
  },
  {
    value: ProposalCategories.Members,
    label: 'Members',
    icon: 'filterMembers',
  },
] as ListItem[];

export const STAKING_CONTRACT_PREFIX = '-staking';

export const MAX_MULTI_VOTES = 20;
