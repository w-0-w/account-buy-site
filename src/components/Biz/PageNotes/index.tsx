import { injectIntl, useIntl } from 'react-intl';

import { useEnsurePageToTop } from '@/hooks';
import { BizNotesHeader } from '@/components/Biz/BizNotesHeader';

import { NoteMap } from './config';

import styles from './index.module.css';

function PageNotes({
  //
  scene,
}: {
  intl: any;
  scene: TypePageNoteEnum;
}) {
  const intl = useIntl();

  useEnsurePageToTop();

  return (
    <div className={styles.bizPageNotesWrap}>
      <BizNotesHeader
        title={intl.formatMessage({ id: NoteMap[scene].i18nKey })}
      />
      <div className={styles.bizPageNotesContent}>
        <div
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: NoteMap[scene].contentI18nKey }),
          }}
        />
      </div>
    </div>
  );
}

export default injectIntl(PageNotes);
