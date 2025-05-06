import { useState, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import { Tag } from '@alifd/next';

import { BizTitle } from '@/components/Biz/BizTitle';
import { BizSubTitle } from '@/components/Biz/BizSubTitle';

import { parseSkuData, getSubSkuData } from './helper';

import styles from './index.module.css';

const { Group: TagGroup, Selectable: SelectableTag } = Tag;

export function BizGoodsSku({
  //
  goodsInfo,
  onSkuChange,
}: {
  goodsInfo: any;
  onSkuChange: (props: TypeSkuChangeItem) => void;
}) {
  const intl = useIntl();

  // 初始化
  const { skuCategoryName, skuList, skuKeyNameMap } = parseSkuData(goodsInfo);
  const skuKeyNameMapRef = useRef<any>(skuKeyNameMap);

  const defSku = skuList[0];
  const {
    //
    subSkuCategoryName,
    subSkuList,
    subSkuKeyNameMap,
  } = getSubSkuData(goodsInfo, defSku.skuKey);

  // const [skuArr, setSkuArr] = useState(skuList);
  // const [skuCateName, setSkuCateName] = useState(skuCategoryName);
  const [skuVal, setSkuVal] = useState(defSku.skuKey);
  //
  const [subSkuArr, setSubSkuArr] = useState(subSkuList);
  const [subSkuCateName, setSubSkuCateName] = useState(subSkuCategoryName);
  const [subSkuVal, setSubSkuVal] = useState(subSkuList[0]?.skuKey || '');
  const subSkuKeyNameMapRef = useRef<any>(subSkuKeyNameMap);

  const onSkuChangeEvt = ({
    skuKey,
    checked,
  }: {
    skuKey: string;
    checked: boolean;
  }) => {
    const next = checked ? skuKey : '';

    const {
      //
      subSkuCategoryName,
      subSkuList,
      subSkuKeyNameMap,
    } = getSubSkuData(goodsInfo, skuKey);
    subSkuKeyNameMapRef.current = subSkuKeyNameMap;

    setSkuVal(next);
    setSubSkuCateName(subSkuCategoryName);
    setSubSkuArr(subSkuList);
    setSubSkuVal(subSkuList[0]?.skuKey || '');
  };
  const onSubSkuChangeEvt = ({
    skuKey,
    checked,
  }: {
    skuKey: string;
    checked: boolean;
  }) => {
    const next = checked ? skuKey : '';
    setSubSkuVal(next);
  };

  useEffect(() => {
    const firstSku = goodsInfo?.goodsDetail?.hasSkuTree?.skuMap?.[skuVal];
    const secondSku = firstSku?.subSku?.skuMap?.[subSkuVal];

    const { alonePrice, originalPrice } = secondSku || firstSku || {};
    onSkuChange({
      //
      goodsImg: goodsInfo?.goodsDetail?.cols?.goodsIcon || '',
      goodsName: goodsInfo?.goodsDetail?.product_name || '',
      sku: skuKeyNameMapRef.current[skuVal] || '',
      subSku: subSkuKeyNameMapRef.current[subSkuVal] || '',
      alonePrice,
      originalPrice,
    });
  }, [skuVal, subSkuVal]);

  return (
    <div className={styles.bizGoodsSku}>
      <BizTitle title={intl.formatMessage({ id: 'biz-select-product' })} />
      <BizSubTitle title={skuCategoryName} />
      <TagGroup>
        {skuList.map(({ skuKey, skuName }) => (
          <SelectableTag
            key={skuKey}
            size="medium"
            checked={skuVal === skuKey}
            onChange={(checked) => {
              onSkuChangeEvt({ skuKey, checked });
            }}
          >
            {skuName}
          </SelectableTag>
        ))}
      </TagGroup>
      {subSkuCateName ? <BizSubTitle title={subSkuCateName} /> : null}
      <TagGroup>
        {subSkuArr.map(({ skuKey, skuName }) => (
          <SelectableTag
            key={skuKey}
            size="medium"
            checked={subSkuVal === skuKey}
            onChange={(checked) => {
              onSubSkuChangeEvt({ skuKey, checked });
            }}
          >
            {skuName}
          </SelectableTag>
        ))}
      </TagGroup>
    </div>
  );
}
