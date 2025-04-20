import { ResponsiveGrid } from '@alifd/next';
import { injectIntl } from 'react-intl';

import { BizPIndexHot } from '@/components/Biz/BizPIndexHot';
import { BizPIndexTabs } from '@/components/Biz/BizPIndexTabs';

import styles from './index.module.css';

function PageIndex() {
  return (
    <ResponsiveGrid
      className={styles.pageIndexWrap}
      gap={20}
    >
      <ResponsiveGrid.Cell colSpan={24}>
        <BizPIndexHot />
      </ResponsiveGrid.Cell>
      <ResponsiveGrid.Cell colSpan={24}>
        <BizPIndexTabs />
      </ResponsiveGrid.Cell>
    </ResponsiveGrid>
  );
}

export default injectIntl(PageIndex);
