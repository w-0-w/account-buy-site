import { Message } from '@alifd/next';

import SvgCS from '@/assets/svg/cs.svg';

import styles from './index.module.css';

export const BizCS = () => {
  return (
    <div
      className={styles.bizCSWrap}
      onClick={(evt) => {
        evt.stopPropagation();

        Message.show({
          type: 'notice',
          align: 'cc cc',
          content: '客服，逻辑待完善～',
        });
      }}
    >
      <img
        src={SvgCS}
        className={styles.bizCSImg}
        alt="cs"
      />
    </div>
  );
};
