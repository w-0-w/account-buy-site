import { useLocale } from 'ice';

import styles from './index.module.css';

export function BizLangSwitch() {
  const [locale] = useLocale();
  const switchEvt = () => {
    window.location.href = locale === 'zh-CN' ? '/en-US' : '/';
  };

  return (
    <div className={styles.bizLangSwitchWrap}>
      <div
        className={styles.bizLangSwitchInner}
        onClick={switchEvt}
      >
        {locale === 'zh-CN' ? '简体中文' : 'English'}
        <span className={styles.bizLangSwitchSplit}>/</span>
        {locale === 'zh-CN' ? 'CNY' : 'USD'}
      </div>
    </div>
  );
}
