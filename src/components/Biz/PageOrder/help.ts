import { encodeOrder } from '@/utils';

export const buildFlowPageUrl = ({
  //
  pageOrderHref,
  pageParamMap,
  platform,
}: {
  pageOrderHref: string;
  pageParamMap: TypeSkuChangeItem;
  platform: string;
}) => {
  const fullPathUrl = `${pageOrderHref.split('/order?')?.[0] || ''}/flow`;
  const str = encodeOrder({
    // ...pageParamMap,
    alonePrice: pageParamMap.alonePrice,
    platform,
  });

  return `${fullPathUrl}?_=${str}`;
};
