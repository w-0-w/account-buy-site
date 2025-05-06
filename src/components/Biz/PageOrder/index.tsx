import { useSearchParams } from 'ice';
import { useState, useEffect, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { useBiz } from '@/hooks';
import { decodeOrder } from '@/utils';

import { PayWayList4Render } from './config';

import styles from './index.module.css';

export function PageOrder() {
  const { comma, currency } = useBiz();
  const [searchParams] = useSearchParams();

  const [
    //
    pageParamMap,
    setPageParamMap,
  ] = useState<null | TypeSkuChangeItem>(null);

  useEffect(() => {
    const encodeStr = searchParams.get('_');
    const decoded = decodeOrder(encodeStr || '') as any;

    console.log('decoded::: ', decoded);
    setPageParamMap(decoded);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.pageOrderInfos} gl-cls-block`}>
        {pageParamMap ? (
          <>
            <div className={styles.pageOrderInfosLeft}>
              {pageParamMap.goodsImg ? (
                <img
                  className={styles.pageOrderInfosLeftImg}
                  src={pageParamMap.goodsImg}
                  alt="img"
                />
              ) : null}
            </div>
            <div className={styles.pageOrderInfosRight}>
              <div className={styles.pageOrderInfosRightGoodsName}>
                {pageParamMap.goodsName}
              </div>
              <div className={styles.pageOrderInfosRightGoodsSku}>
                {pageParamMap.sku}
                {pageParamMap.subSku ? `${comma}${pageParamMap.subSku}` : ''}
              </div>
              <div className={styles.pageOrderInfosRightGoodsPrices}>
                <span className={styles.pageOrderInfosRightGoodsPricesUSDT}>
                  {(pageParamMap.alonePrice / 7.2).toFixed(2)} USDT
                </span>
                <span className={styles.pageOrderInfosRightGoodsPricesSp}>
                  /
                </span>
                <span className={styles.pageOrderInfosRightGoodsPricesCurrency}>
                  {currency}
                </span>
                <span className={styles.pageOrderInfosRightGoodsPricesReal}>
                  {pageParamMap.alonePrice}
                </span>
                <span className={styles.pageOrderInfosRightGoodsPricesOriginal}>
                  {currency}
                  {pageParamMap.originalPrice}
                </span>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className={`${styles.pageOrderDesc} gl-cls-block`}>
        <div className={styles.pageOrderDescTxt}>
          <FormattedMessage id="biz-order-middle-desc" />
        </div>
      </div>
      <div className={`${styles.pagePayWays} gl-cls-block`}>
        <div className={styles.payWayList}>
          {PayWayList4Render.map((pw, pwIdx) => {
            return (
              <Fragment key={pw.key}>
                <div
                  className={styles.payWayItem}
                  onClick={(evt) => {
                    evt.stopPropagation();
                    pw.fn({
                      item: pw.oriItem,
                      index: pwIdx,
                      pageParamMap: pageParamMap as any,
                    });
                  }}
                >
                  <img
                    src={pw.icon}
                    alt={pw.displayName}
                    className={styles.payWayIcon}
                  />
                  <div className={styles.payWayItemRight}>
                    <div
                      className={styles.payWayItemRightText}
                      style={
                        pw.displayName?.length < 35
                          ? {}
                          : {
                              fontSize: '14px',
                            }
                      }
                    >
                      {pw.displayName}
                    </div>
                    <div
                      className={styles.payWayItemRightDesc}
                      style={
                        pw.subDesc
                          ? {
                              color: 'red',
                            }
                          : {}
                      }
                    >
                      <span
                        style={
                          pw.subDesc
                            ? {
                                fontWeight: 'bold',
                              }
                            : {}
                        }
                      >
                        {pw.desc}
                      </span>
                      {pw.subDesc ? <span> - {pw.subDesc}</span> : null}
                    </div>
                  </div>
                </div>
                {pw.isLast ? null : (
                  <div className={styles.payWayItemDivider} />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
