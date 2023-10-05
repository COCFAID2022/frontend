import Link from 'next/link';
import { FC, Fragment } from 'react';
import styles from './menu.module.scss';
import { TypeChildren } from '@/widgets/header/navigation/data/items';

interface MenuProps {
  childrenLinks: TypeChildren;
}

export const Menu: FC<MenuProps> = props => {
  const { childrenLinks } = props;

  return (
    <div className={styles.menu}>
      {childrenLinks.map(link => {
        return (
          <Fragment key={link.href}>
            <Link className={styles.menuLink} href={link.href}>
              {link.value}
            </Link>
            {link.children.length > 0 && <Menu childrenLinks={link.children} />}
          </Fragment>
        );
      })}
    </div>
  );
};
