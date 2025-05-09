import { encodeOrder } from '@/utils';

export const buildFlowPageUrl = ({
  //
  pageOrderHref,
  pageParamMap,
  platform,
}: {
  pageOrderHref: string;
  pageParamMap: TypeOrderSkuInfo;
  platform: string;
}) => {
  const fullPathUrl = `${pageOrderHref.split('/order?')?.[0] || ''}/flow`;
  const str = encodeOrder({
    // ...pageParamMap,
    uPrice: pageParamMap.uPrice,
    platform,
  });

  return `${fullPathUrl}?_=${str}`;
};
