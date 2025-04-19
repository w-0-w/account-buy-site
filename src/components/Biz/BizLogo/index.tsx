import LogoIcon from '@/assets/images/logo-icon.png';

import styles from './index.module.css';

export const BizLogo = () => {
  return (
    <div className={styles.bizLogoWrap}>
      <img
        src={LogoIcon}
        className={styles.bizLogoImg}
        alt="logo"
      />
    </div>
  );
};
