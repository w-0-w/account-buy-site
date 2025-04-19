import styles from './index.module.css';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>AccountBuy</span>
      <br />
      <span className={styles.copyright}>© 2025 AccountBuy</span>
    </p>
  );
}
