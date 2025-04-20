import { useParams } from 'ice';
import { ResponsiveGrid } from '@alifd/next';
import { injectIntl } from 'react-intl';

import styles from './index.module.css';

function PageDetail() {
  const params = useParams();
  return (
    <ResponsiveGrid
      className={styles.pageDetailWrap}
      gap={20}
    >
      <ResponsiveGrid.Cell colSpan={24}>{params.goods}</ResponsiveGrid.Cell>
    </ResponsiveGrid>
  );
}

export default injectIntl(PageDetail);
