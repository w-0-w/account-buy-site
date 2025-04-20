type T_I18N_LNG = 'en-US' | 'zh-CN';
type T_I18N_Item =
  | 'com-ok'
  | 'com-cancel'
  | 'com-404'
  | 'com-404-desc'
  | 'biz-buy-btn'
  | 'biz-goods-sales';

export const i18n: Record<T_I18N_LNG, Record<T_I18N_Item, string>> = {
  'en-US': {
    'com-ok': 'ok',
    'com-cancel': 'cancel',
    'com-404': '404',
    'com-404-desc': '404',
    'biz-buy-btn': 'Buy',
    'biz-goods-sales': 'Sales',
  },
  'zh-CN': {
    'com-ok': '确认',
    'com-cancel': '取消',
    'com-404': '404',
    'com-404-desc': '404',
    'biz-buy-btn': '购买',
    'biz-goods-sales': '月售',
  },
};
