import styles from './index.module.css';

export function BizTitle({
  //
  title,
}: {
  title: string;
}) {
  return <div className={styles.bizTitle}>{title}</div>;
}
