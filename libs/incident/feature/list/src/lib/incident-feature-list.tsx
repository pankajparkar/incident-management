import styles from './incident-feature-list.module.scss';

/* eslint-disable-next-line */
export interface IncidentFeatureListProps {}

export function IncidentFeatureList(props: IncidentFeatureListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IncidentFeatureList!</h1>
    </div>
  );
}

export default IncidentFeatureList;
