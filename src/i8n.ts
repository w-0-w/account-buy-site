type T_I18N_LNG = 'en-US' | 'zh-CN';
type T_I18N_Item =
  | 'com-ok'
  | 'com-cancel'
  | 'com-404'
  | 'com-404-desc'
  | 'biz-title';

export const i18n: Record<T_I18N_LNG, Record<T_I18N_Item, string>> = {
  'en-US': {
    'com-ok': 'ok',
    'com-cancel': 'cancel',
    'com-404': '404',
    'com-404-desc': '404',
    'biz-title': 'title',
  },
  'zh-CN': {
    'com-ok': '确认',
    'com-cancel': '取消',
    'com-404': '404',
    'com-404-desc': '404',
    'biz-title': '标题',
  },
};
