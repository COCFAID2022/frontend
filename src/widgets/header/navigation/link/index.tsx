import { FC, useRef } from 'react';
import { useHover } from 'usehooks-ts';
import classNames from 'classnames';
import styles from './link.module.scss';
import Link from 'next/link';
import { Menu } from '@/widgets/header/navigation/menu/menu';
import { TypeNavigationItems } from '@/widgets/header/navigation/data/items';

interface NavigationLinkProps {
  link: TypeNavigationItems;
}

export const NavigationLink: FC<NavigationLinkProps> = props => {
  const { link } = props;
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div className={styles.navigationLink} ref={hoverRef}>
      <Link href={link.href} className={styles.link}>
        {link.value}
      </Link>
      <div
        className={classNames(styles.subMenu, {
          [styles.visible]: isHover,
        })}>
        {link.children.length > 0 && <Menu childrenLinks={link.children} />}
      </div>
    </div>
  );
};
