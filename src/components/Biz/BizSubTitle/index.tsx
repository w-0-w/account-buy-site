import styles from './index.module.css';

export function BizSubTitle({
  //
  title,
}: {
  title: string;
}) {
  return <div className={styles.bizSubTitle}>{title}</div>;
}
