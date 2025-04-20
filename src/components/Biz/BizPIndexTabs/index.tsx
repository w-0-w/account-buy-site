import { Tab } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import { useLocale, useNavigate } from 'ice';
import { useState, useEffect } from 'react';

import { BizTinyCard } from '@/components/Biz/BizTinyCard';

import { Data, TabItem } from '@/data';

import styles from './index.module.css';

export const BizPIndexTabs = () => {
  const [locale] = useLocale();
  const navigate = useNavigate();

  const [currencySymbol, setCurrencySymbol] = useState('');
  const [tabList, setTabList] = useState<null | any[]>(null);
  const [tabItemData, setTabItemData] = useState<null | any[]>(null);

  useEffect(() => {
    if (locale) {
      setCurrencySymbol(locale === 'zh-CN' ? '¥' : '$');
      setTabList(Data?.[locale]?.categories || []);
      setTabItemData(TabItem.accountBuy_2);
    }
  }, [locale]);

  return (
    <Tab
      shape="pure"
      size="small"
      defaultActiveKey="2"
      className={styles.bizPIndexTabsWrap}
      onChange={(key) => {
        setTabItemData(TabItem[`accountBuy_${key}`]);
      }}
    >
      {(tabList || []).map((tabItem, tabIdx) => {
        return (
          <Tab.Item
            key={tabItem.id}
            title={tabItem.name}
          >
            {/* This is home page - {tabIdx} */}
            {/* <FormattedMessage id="com-ok" /> */}
            {(tabItemData || []).map((tidItem, tidIdx) => {
              return (
                <BizTinyCard
                  key={tidItem.goodsLibraryId}
                  idx={tidIdx}
                  info={tidItem}
                  currencySymbol={currencySymbol}
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
