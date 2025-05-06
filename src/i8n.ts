type T_I18N_LNG = 'en-US' | 'zh-CN';
type T_I18N_Item =
  | 'com-ok'
  | 'com-cancel'
  | 'com-404'
  | 'com-404-desc'
  | 'biz-buy-btn'
  | 'biz-goods-sales'
  | 'biz-select-product'
  | 'biz-product-details'
  | 'biz-buy-now'
  | 'biz-order-middle-desc';

export const i18n: Record<T_I18N_LNG, Record<T_I18N_Item, string>> = {
  'en-US': {
    'com-ok': 'ok',
    'com-cancel': 'cancel',
    'com-404': '404',
    'com-404-desc': '404',
    'biz-buy-btn': 'Buy',
    'biz-goods-sales': 'Sales',
    'biz-select-product': 'Select Product',
    'biz-product-details': 'product details',
    'biz-buy-now': '${price} Buy Now',
    'biz-order-middle-desc':
      'Due to third-party recharge risk control restrictions, USDT is currently the only recharge method available. Please transfer recharge to the corresponding wallet and the recharge will be automatically credited after successful recharge.',
  },
  'zh-CN': {
    'com-ok': '确认',
    'com-cancel': '取消',
    'com-404': '404',
    'com-404-desc': '404',
    'biz-buy-btn': '购买',
    'biz-goods-sales': '月售',
    'biz-select-product': '选择商品',
    'biz-product-details': '商品详情',
    'biz-buy-now': '¥{price} 立即购买',
    'biz-order-middle-desc':
      '由于第三方充值风控限制，目前只能USDT充值，请针对相应钱包进行转账充值，充值成功自动到账。',
  },
};
