import { useSelectedDAO } from 'hooks/useSelectedDao';
import { useBoolean } from 'react-use';
import React from 'react';
import { Collapsable } from 'components/collapsable/Collapsable';

import { DAO } from 'types/dao';

import { DaoItem } from 'components/nav-dao/DaoItem';
import { DaoHeader } from 'components/nav-dao/DaoHeader';

import styles from './dao-list.module.scss';

interface DAOListProps {
  toggle: (newState?: boolean) => void;
  isOpen: boolean;
  items: DAO[];
}

export const DaoList: React.VFC<DAOListProps> = ({ items, ...props }) => {
  const [open, toggleState] = useBoolean(false);
  const { isOpen = open, toggle = toggleState } = props;

  const selectedDao = useSelectedDAO();

  return (
    <div>
      <Collapsable
        className={styles.collapsable}
        isOpen={isOpen}
        toggle={toggle}
        duration={150}
        renderHeading={(toggleHeading, isHeadingOpen) => (
          <DaoHeader
            daoId={selectedDao?.id}
            logo={selectedDao?.logo}
            isOpen={isHeadingOpen}
            label={selectedDao?.name || ''}
            openCloseDropdown={toggleHeading}
          />
        )}
      >
        {items.map(dao => (
          <DaoItem
            onClick={() => toggle(false)}
            dao={dao}
            key={dao.id}
            logo={dao.logo}
            label={dao.name}
            count={dao.members}
          />
        ))}
      </Collapsable>
    </div>
  );
};