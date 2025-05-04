import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BizTitle } from '@/components/Biz/BizTitle';
import { BizGoodsSku } from '@/components/Biz/BizGoodsSku';

import GouwucheSvg from '@/assets/svg/gouwuche.svg';

import styles from './index.module.css';

export function BizGoodsDetail({
  //
  goodsInfo,
}: {
  goodsInfo: any;
}) {
  const [prices, setPrices] = useState<null | TypeSkuChangeItem>(null);
  return (
    <div className={styles.bizGoodsDetail}>
      <div className={styles.bizGoodsDetailTop}>
        <div className={styles.bizGoodsDetailTopLeft}>
          <img
            src={goodsInfo?.goodsDetail?.h5LongPic || ''}
            alt=""
          />
        </div>
        <div className={styles.bizGoodsDetailTopRight}>
          <div>{goodsInfo?.goodsDetail?.product_name || '-'}</div>
          <div>
            {prices?.alonePrice} - {prices?.originalPrice}
          </div>
        </div>
      </div>
      <div className={styles.bizGoodsDetailSku}>
        <BizGoodsSku
          goodsInfo={goodsInfo}
          onSkuChange={(changeItem) => {
            setPrices(changeItem);
          }}
        />
      </div>
      <div className={styles.bizGoodsDesc}>
        <BizTitle
          title={`${goodsInfo?.goodsDetail?.gameLibraryName || '-'}详情`}
        />
        {/* <div className={styles.bizGoodsDescTitle}></div> */}
        <div
          className={styles.bizGoodsDescContent}
          dangerouslySetInnerHTML={{
            __html: goodsInfo?.goodsDetail?.cols?.h5Detail,
          }}
        />
      </div>
      <div className={styles.bizFixedBottom}>
        {/* <div>
          <img
            src={GouwucheSvg}
            className={styles.bizFixedBottomSvg}
            alt=""
          />
        </div> */}
        <div className={styles.bizFixedBottomBtn}>
          <FormattedMessage
            id="biz-buy-now"
            values={{ price: prices?.alonePrice }}
          />
        </div>
      </div>
    </div>
  );
}
