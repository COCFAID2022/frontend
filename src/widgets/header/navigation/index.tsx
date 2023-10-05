'use client';
import styles from './navigation.module.scss';
import { useMatchMedia } from '@/shared/hooks/use-match-media';
import { NavigationLink } from '@/widgets/header/navigation/link';
import { navigationItems } from '@/widgets/header/navigation/data/items';

export const Navigation = () => {
  const { isDesktop } = useMatchMedia();

  return (
    isDesktop && (
      <nav className={styles.nav}>
        {navigationItems.map(link => (
          <NavigationLink key={link.href} link={link} />
        ))}
      </nav>
    )
  );
};
