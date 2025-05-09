import { useNavigate } from 'ice';
import { FormattedMessage } from 'react-intl';

import LogoIcon from '@/assets/images/logo-icon.png';
import { useBiz } from '@/hooks';
import { NoteMap } from '@/components/Biz/PageNotes/config';

import styles from './index.module.css';

export default function Footer() {
  const navigate = useNavigate();
  const { routePrefix } = useBiz();

  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        {Object.keys(NoteMap).map((notesKeyItem) => {
          const { key, i18nKey } = NoteMap[notesKeyItem];
          return (
            <div
              key={key}
              className={styles.footerLinkItem}
              onClick={(evt) => {
                evt.stopPropagation();

                navigate(`${routePrefix}/notes/${key}`);
              }}
            >
              <FormattedMessage id={i18nKey} />
            </div>
          );
        })}
      </div>
      <div className={styles.footerLogoImgWrap}>
        <img
          src={LogoIcon}
          className={styles.footerLogoImg}
          alt="logo"
        />
      </div>
    </div>
  );
}
