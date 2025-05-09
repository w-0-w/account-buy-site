import SvgPayment from '@/assets/svg/goods-anquanzhifu.svg';
import SvgDelivery from '@/assets/svg/goods-jishifahuo.svg';
import SvgOnline from '@/assets/svg/goods-24h-cs.svg';

export const BizGoodsCommonLabelList = [
  {
    key: 'payment',
    i18nKey: 'biz-goods-common-label-anquanzhifu',
    icon: SvgPayment,
  },
  {
    key: 'delivery',
    i18nKey: 'biz-goods-common-label-jishifahuo',
    icon: SvgDelivery,
  },
  {
    key: 'online',
    i18nKey: 'biz-goods-common-label-24-cs',
    icon: SvgOnline,
  },
];

export const getUPrice = ({
  //
  changeItem,
  currency,
}: {
  changeItem: TypeSkuChangeItem;
  currency: TypeCurrency;
}) => {
  return currency === '¥'
    ? Math.floor((changeItem.alonePrice * 100) / 7.2) / 100
    : changeItem.alonePrice;
};
