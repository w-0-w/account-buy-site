import { useState, useEffect } from 'react';
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
  // 初始化
  const { skuCategoryName, skuList } = parseSkuData(goodsInfo);
  const defSku = skuList[0];
  const { subSkuCategoryName, subSkuList } = getSubSkuData(goodsInfo, defSku);

  // const [skuArr, setSkuArr] = useState(skuList);
  // const [skuCateName, setSkuCateName] = useState(skuCategoryName);
  const [skuVal, setSkuVal] = useState(defSku);
  //
  const [subSkuArr, setSubSkuArr] = useState(subSkuList);
  const [subSkuCateName, setSubSkuCateName] = useState(subSkuCategoryName);
  const [subSkuVal, setSubSkuVal] = useState(subSkuList[0]);

  const onSkuChangeEvt = (name, checked) => {
    const next = checked ? name : '';

    const { subSkuCategoryName, subSkuList } = getSubSkuData(goodsInfo, name);

    setSkuVal(next);
    setSubSkuCateName(subSkuCategoryName);
    setSubSkuArr(subSkuList);
    setSubSkuVal(subSkuList[0]);
  };
  const onSubSkuChangeEvt = (name, checked) => {
    const next = checked ? name : '';
    setSubSkuVal(next);
  };

  useEffect(() => {
    const firstSku = goodsInfo?.goodsDetail?.hasSkuTree?.skuMap?.[skuVal];
    const secondSku = firstSku.subSku?.skuMap?.[subSkuVal];
    const { alonePrice, originalPrice } = secondSku || {};
    console.log('fff: ', secondSku);
    onSkuChange({ alonePrice, originalPrice });
  }, [skuVal, subSkuVal]);

  return (
    <div className={styles.bizGoodsSku}>
      <BizTitle title="选择商品" />
      <BizSubTitle title={skuCategoryName} />
      <TagGroup>
        {skuList.map((sku) => (
          <SelectableTag
            key={sku}
            size="medium"
            checked={skuVal === sku}
            onChange={(checked) => {
              onSkuChangeEvt(sku, checked);
            }}
          >
            {sku}
          </SelectableTag>
        ))}
      </TagGroup>
      <BizSubTitle title={subSkuCateName} />
      <TagGroup>
        {subSkuArr.map((subSku) => (
          <SelectableTag
            key={subSku}
            size="medium"
            checked={subSkuVal === subSku}
            onChange={(checked) => {
              onSubSkuChangeEvt(subSku, checked);
            }}
          >
            {subSku}
          </SelectableTag>
        ))}
      </TagGroup>
    </div>
  );
}
