import React, { FC } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import { Button } from 'components/button/Button';
import { Icon, IconName } from 'components/Icon';

import styles from './CategoriesFeedFilter.module.scss';

export type ListItem = {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: IconName;
};

interface Props {
  disabled?: boolean;
  queryName: string;
  className?: string;
  list?: ListItem[];
  hideAllOption?: boolean;
  shallowUpdate?: boolean;
  itemClassName?: string;
}

export const CategoriesFeedFilter: FC<Props> = ({
  list,
  disabled,
  queryName,
  className,
  itemClassName,
  shallowUpdate = false,
}) => {
  const { query, replace } = useRouter();
  const { [queryName]: value } = query;

  function renderFilterItem(item: ListItem) {
    const { value: itemVal, label, disabled: disabledItem, icon } = item;

    const href = {
      query: {
        ...query,
        [queryName]: value === itemVal ? '' : itemVal,
      },
    };

    const hrefClassName = cn(
      styles.itemLink,
      {
        [styles.active]: value === itemVal || (!itemVal && !value),
        [styles.disabled]: disabled || disabledItem,
      },
      itemClassName
    );

    return (
      <Button
        key={item.label}
        className={hrefClassName}
        variant="transparent"
        size="small"
        onClick={async () => {
          await replace(href, undefined, {
            shallow: shallowUpdate,
            scroll: false,
          });
        }}
      >
        {icon && <Icon name={icon} className={styles.icon} />}
        {label}
      </Button>
    );
  }

  return (
    <div className={cn(styles.root, className)}>
      <ul className={styles.items}>{list?.map(renderFilterItem)}</ul>
    </div>
  );
};
