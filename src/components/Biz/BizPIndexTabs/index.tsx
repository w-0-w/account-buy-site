import { Tab } from '@alifd/next';
// import { FormattedMessage } from 'react-intl';
import {
  //
  useLocale,
  // useNavigate,
} from 'ice';
import { useState, useEffect } from 'react';

import { BizTinyCard } from '@/components/Biz/BizTinyCard';

import { Data } from '@/data';
import { useBiz } from '@/hooks';

import styles from './index.module.css';

export const BizPIndexTabs = () => {
  const INIT_IDX = 1;

  const [locale] = useLocale();
  // const navigate = useNavigate();

  const { currency } = useBiz();
  const [tabList, setTabList] = useState<null | any[]>(null);
  const [tabItemData, setTabItemData] = useState<null | any[]>(null);

  useEffect(() => {
    if (locale) {
      setTabList(Data?.[locale]?.categories || []);
      setTabItemData(Data?.[locale]?.tabItem?.[`accountBuy_${INIT_IDX}`]);
    }
  }, [locale]);

  return (
    <Tab
      shape="pure"
      size="small"
      defaultActiveKey={`${INIT_IDX}`}
      className={styles.bizPIndexTabsWrap}
      onChange={(key) => {
        setTabItemData(Data?.[locale]?.tabItem?.[`accountBuy_${key}`]);
      }}
    >
      {(tabList || []).map((tabItem) => {
        return (
          <Tab.Item
            key={tabItem.id}
            title={tabItem.name}
          >
            {/* <FormattedMessage id="com-ok" /> */}
            {(tabItemData || []).map((tidItem, tidIdx) => {
              return (
                <BizTinyCard
                  key={tidItem.goodsLibraryId}
                  idx={tidIdx}
                  info={tidItem}
                  currencySymbol={currency}
                />
              );
            })}
          </Tab.Item>
        );
      })}
      {/* <Tab.Item
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
      </Tab.Item> */}
    </Tab>
  );
};
