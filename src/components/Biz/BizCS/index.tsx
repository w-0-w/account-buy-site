import { Message } from '@alifd/next';

import SvgCS from '@/assets/svg/cs.svg';

import styles from './index.module.css';

export const BizCS = () => {
  return (
    <div className={styles.bizCSWrap}>
      <a
        href="https://t.me/accountbuy001"
        target="_blank"
      >
        <img
          src={SvgCS}
          className={styles.bizCSImg}
          alt="cs"
        />
      </a>
    </div>
  );
};
