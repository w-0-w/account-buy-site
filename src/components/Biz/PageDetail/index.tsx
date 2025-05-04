import { useParams } from 'ice';
import { useState, useEffect } from 'react';
import { ResponsiveGrid } from '@alifd/next';
import { injectIntl } from 'react-intl';

import { queryTest } from '@/api';

import { BizGoodsDetail } from '@/components/Biz/BizGoodsDetail';

import styles from './index.module.css';

function PageDetail() {
  const params = useParams();

  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    if (params.goods) {
      console.log('before: ', params.goods);
      queryTest().then((res) => {
        console.log('res: ', res);
        setDetail(res);
      });
    }
  }, [params]);

  return (
    <ResponsiveGrid
      className={styles.pageDetailWrap}
      gap={20}
    >
      <ResponsiveGrid.Cell colSpan={24}>
        {detail ? <BizGoodsDetail goodsInfo={detail} /> : null}
      </ResponsiveGrid.Cell>
      <ResponsiveGrid.Cell colSpan={24}>{params.goods}</ResponsiveGrid.Cell>
    </ResponsiveGrid>
  );
}

export default injectIntl(PageDetail);
