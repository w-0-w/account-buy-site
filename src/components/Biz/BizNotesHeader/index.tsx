import { useNavigate } from 'ice';

import SvgLeftArrow from '@/assets/svg/left-arrow.svg';

import { useBiz } from '@/hooks';

import styles from './index.module.css';

export const BizNotesHeader = ({
  //
  title,
}: {
  title: string;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.bizNotesHeaderWrap}>
        <div
          className={styles.bizNotesHeaderLeft}
          onClick={(evt) => {
            evt.stopPropagation();

            navigate(-1);
          }}
        >
          <img
            src={SvgLeftArrow}
            className={styles.bizNotesHeaderLeftIcon}
            alt="logo"
          />
        </div>
        <div className={styles.bizNotesHeaderMiddleTitle}>{title}</div>
      </div>
      <div className={styles.bizNotesHeaderPlaceholder} />
    </>
  );
};
