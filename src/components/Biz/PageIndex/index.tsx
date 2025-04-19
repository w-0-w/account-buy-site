import { ResponsiveGrid, Tab } from '@alifd/next';
import { injectIntl, FormattedMessage } from 'react-intl';

import styles from './index.module.css';

function PageIndex() {
  return (
    <ResponsiveGrid
      className={styles.pageIndexWrap}
      gap={20}
    >
      {/* <div style={{ height: '1000px' }}>
        <FormattedMessage id="com-ok" />
      </div> */}
      <ResponsiveGrid.Cell colSpan={24}>
        <Tab
          shape="pure"
          size="small"
          onChange={() => {
            //
          }}
        >
          <Tab.Item
            key="home"
            title="Home name title"
          >
            This is home page - <FormattedMessage id="com-ok" />
          </Tab.Item>
          <Tab.Item
            key="document"
            title="Document name title"
          >
            This is document page
          </Tab.Item>
          <Tab.Item
            key="api"
            title="API name title"
          >
            This is api page
          </Tab.Item>
          <Tab.Item
            key="repo"
            title="Repo name title"
          >
            This is repo link
          </Tab.Item>
        </Tab>
      </ResponsiveGrid.Cell>
    </ResponsiveGrid>
  );
}

export default injectIntl(PageIndex);
