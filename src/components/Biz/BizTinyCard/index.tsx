import { useNavigate } from 'ice';
import { FormattedMessage } from 'react-intl';

import { useBiz } from '@/hooks';

import styles from './index.module.css';

export const BizTinyCard = ({
  //
  idx,
  info,
  currencySymbol,
}: {
  idx: number;
  info: TypeTabItem;
  currencySymbol: string;
}) => {
  const { routePrefix } = useBiz();
  const navigate = useNavigate();
  return (
    <div
      className={styles.bizTinyCardWrap}
      style={
        idx > 0
          ? {
              marginTop: 'var(--g-normal-padding)',
            }
          : {}
      }
      onClick={(evt) => {
        evt.stopPropagation();
        navigate(`${routePrefix}/detail/${info?.shortEn}`);
      }}
    >
      <div className={styles.bizTinyCardInner}>
        <div className={styles.bizTinyCardLeft}>
          <img
            className={styles.bizTinyCardIcon}
            src={info?.image || ''}
            alt="icon"
          />
        </div>
        <div className={styles.bizTinyCardRight}>
          <div className={styles.bizTinyCardLabel}>{info?.name}</div>
          <div className={styles.bizTinyCardInfo}>
            <div className={styles.bizTinyCardInfoPrice}>
              {currencySymbol} {info?.price}
            </div>
            <div className={styles.bizTinyCardInfoSales}>
              <FormattedMessage id="biz-goods-sales" /> {info?.sales}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
