import styles from './shared-navbar.module.scss';

/* eslint-disable-next-line */
export interface SharedNavbarProps {}

export function SharedNavbar(props: SharedNavbarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedNavbar!</h1>
    </div>
  );
}

export default SharedNavbar;
