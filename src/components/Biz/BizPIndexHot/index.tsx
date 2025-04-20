import { useLocale, useNavigate } from 'ice';
import { useState, useEffect } from 'react';
import { Button } from '@alifd/next';
import { FormattedMessage } from 'react-intl';

import { Data } from '@/data';
import HomeHotBg from '@/assets/images/home-hot/bg.png';

import styles from './index.module.css';

export const BizPIndexHot = () => {
  const [locale] = useLocale();
  const navigate = useNavigate();

  const [currencySymbol, setCurrencySymbol] = useState('');
  const [hotList, setHotList] = useState<null | any[]>(null);

  useEffect(() => {
    if (locale) {
      setCurrencySymbol(locale === 'zh-CN' ? '¥' : '$');
      setHotList(Data?.[locale]?.hotTop?.goodsList || []);
    }
  }, [locale]);

  return (
    <div className={styles.bizPIndexHotWrap}>
      <div className={styles.bizPIndexHotGoodsList}>
        {(hotList || []).map((goods, idx) => {
          return (
            <>
              <div
                key={goods}
                className={styles.bizPIndexHotGoodsItem}
              >
                <img
                  src={HomeHotBg}
                  className={styles.bizPIndexHotGoodsItemBg}
                  alt="bg"
                />
                <div className={styles.bizPIndexHotGoodsItemBg2} />
                <div className={styles.bizPIndexHotGoodsItemReal}>
                  {/* 商品图标 */}
                  <div className={styles.bizPIndexHotGoodsItemIcon}>
                    <img
                      src={goods?.goodsIcon}
                      className={styles.bizPIndexHotGoodsItemIconImg}
                      alt=""
                    />
                  </div>
                  {/* 商品名 */}
                  <div className={styles.bizPIndexHotGoodsItemLabel}>
                    {goods?.goodsCategoryName}
                  </div>
                  {/* 价格 */}
                  <div className={styles.bizPIndexHotGoodsItemPrice}>
                    <span className={styles.bizPIndexHotGoodsItemPriceSymbol}>
                      {currencySymbol}
                    </span>{' '}
                    {goods?.price}
                  </div>
                  {/* 购买按钮 */}
                  <div className={styles.bizPIndexHotGoodsItemBuy}>
                    <Button
                      type="primary"
                      size="small"
                      className={styles.bizPIndexHotGoodsItemBuyBtn}
                      onClick={(evt) => {
                        evt.stopPropagation();
                        navigate(`/detail/${goods?.shortEn}`);
                      }}
                    >
                      {/* 购买 */}
                      <FormattedMessage id="biz-buy-btn" />
                    </Button>
                  </div>
                </div>
              </div>
              {idx === (hotList || []).length - 1 ? (
                <div className={styles.bizPIndexHotGoodsItemLastFake} />
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};
