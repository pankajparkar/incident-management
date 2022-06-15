import styles from './shared-footer.module.scss';

/* eslint-disable-next-line */
export interface SharedFooterProps {}

export function SharedFooter(props: SharedFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedFooter!</h1>
    </div>
  );
}

export default SharedFooter;
