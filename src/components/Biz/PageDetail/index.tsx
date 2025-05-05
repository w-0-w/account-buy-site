import { useLocale, useParams } from 'ice';
import { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';

import { queryGoodsDetail } from '@/api';

import { Loading } from '@/components/Loading';
import { BizGoodsDetail } from '@/components/Biz/BizGoodsDetail';

import styles from './index.module.css';

function PageDetail() {
  const [locale] = useLocale();
  const params = useParams();

  const [pageLoading, setPageLoading] = useState(true);
  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    if (params.goods) {
      console.log('before: ', params.goods);
      queryGoodsDetail({ lang: locale, slug: params.goods })
        .then((res) => {
          console.log('res: ', res);
          setDetail(res);
        })
        .catch(console.error)
        .finally(() => {
          setPageLoading(false);
        });
    }
  }, [params]);

  return (
    <div className={styles.pageDetailContainer}>
      {pageLoading ? <Loading /> : null}
      {!pageLoading && detail ? (
        <BizGoodsDetail
          //
          goodsInfo={detail}
          goodsSlug={params.goods || ''}
        />
      ) : null}
    </div>
  );
}

export default injectIntl(PageDetail);
