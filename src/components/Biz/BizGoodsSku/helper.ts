export const parseSkuData = (goodsInfo) => {
  const {
    //
    skuCategoryName = '',
    skuMap,
  } = goodsInfo?.goodsDetail?.hasSkuTree || {};

  const skuList = Object.keys(skuMap || {}).map((skuKey) => {
    return {
      skuKey,
      skuName: skuMap[skuKey].skuName,
    };
  });

  return {
    skuCategoryName,
    skuList,
    skuKeyNameMap: skuList.reduce((prev, item) => {
      prev[item.skuKey] = item.skuName;
      return prev;
    }, {}),
  };
};

export const getSubSkuData = (goodsInfo, sku) => {
  const {
    //
    skuCategoryName: subSkuCategoryName = '',
    skuMap: subSkuMap,
  } = goodsInfo?.goodsDetail?.hasSkuTree?.skuMap?.[sku]?.subSku || {};

  const subSkuList = Object.keys(subSkuMap || {}).map((subSkuKey) => {
    return {
      skuKey: subSkuKey,
      skuName: subSkuMap[subSkuKey].skuName,
    };
  });
  return {
    subSkuCategoryName,
    subSkuList,
    subSkuKeyNameMap: subSkuList.reduce((prev, item) => {
      prev[item.skuKey] = item.skuName;
      return prev;
    }, {}),
  };
};
