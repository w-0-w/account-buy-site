import { useNavigate } from 'ice';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { useBiz } from '@/hooks';

import { BizTitle } from '@/components/Biz/BizTitle';
import { BizGoodsSku } from '@/components/Biz/BizGoodsSku';
import { encodeOrder } from '@/utils';

import { BizGoodsCommonLabelList, getUPrice } from './config';

import styles from './index.module.css';

export function BizGoodsDetail({
  //
  goodsInfo,
}: // goodsSlug,
{
  goodsInfo: any;
  goodsSlug: string;
}) {
  const intl = useIntl();
  const { routePrefix, currency } = useBiz();
  const navigate = useNavigate();

  const [skus, setSkus] = useState<null | TypeOrderSkuInfo>(null);

  const onBuyEvt = () => {
    if (skus === null) {
      alert('Error-0');
    } else {
      navigate(`${routePrefix}/order?_=${encodeOrder(skus)}`);
    }
  };

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
          <div className={styles.bizGoodsDetailTopRightName}>
            {goodsInfo?.goodsDetail?.product_name || '-'}
          </div>
          <div className={styles.bizGoodsDetailTopRightPrice}>
            <div className={styles.bizGoodsDetailTopRightPriceCurrency}>
              {currency}
            </div>
            <div className={styles.bizGoodsDetailTopRightPriceReal}>
              {skus?.alonePrice}
            </div>
            <div className={styles.bizGoodsDetailTopRightPriceOriginal}>
              {currency}
              {skus?.originalPrice}
            </div>
          </div>
          <div className={styles.bizGoodsCommonLabelWrap}>
            {BizGoodsCommonLabelList.map(({ key, icon, i18nKey }) => {
              return (
                <div
                  key={key}
                  className={styles.bizGoodsCommonLabelItem}
                >
                  <div className={styles.bizGoodsCommonLabelIcon}>
                    <img
                      src={icon}
                      className={styles.bizGoodsCommonLabelIconImg}
                      alt="cs"
                    />
                  </div>
                  <div className={styles.bizGoodsCommonLabelText}>
                    <FormattedMessage id={i18nKey} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.bizGoodsDetailSku}>
        <BizGoodsSku
          goodsInfo={goodsInfo}
          onSkuChange={(changeItem) => {
            setSkus({
              ...changeItem,
              uPrice: getUPrice({ changeItem, currency }),
            });
          }}
        />
      </div>
      <div className={styles.bizGoodsDesc}>
        <BizTitle
          title={`${
            goodsInfo?.goodsDetail?.gameLibraryName || '-'
          } ${intl.formatMessage({ id: 'biz-product-details' })}`}
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
        <div
          className={styles.bizFixedBottomBtn}
          onClick={(evt) => {
            evt.stopPropagation();
            onBuyEvt();
          }}
        >
          <FormattedMessage
            id="biz-buy-now"
            values={{ price: skus?.alonePrice }}
          />
        </div>
      </div>
    </div>
  );
}
