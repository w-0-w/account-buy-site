export const parseSkuData = (goodsInfo) => {
  const {
    //
    skuCategoryName = '',
    skuMap,
  } = goodsInfo?.goodsDetail?.hasSkuTree || {};

  const skuList = Object.keys(skuMap || {}) || [];

  return {
    skuCategoryName,
    skuList,
  };
};

export const getSubSkuData = (goodsInfo, sku) => {
  const {
    //
    skuCategoryName: subSkuCategoryName = '',
    skuMap: subSkuMap,
  } = goodsInfo?.goodsDetail?.hasSkuTree?.skuMap?.[sku]?.subSku || {};

  const subSkuList = Object.keys(subSkuMap || {}) || [];
  return {
    subSkuCategoryName,
    subSkuList,
  };
};
