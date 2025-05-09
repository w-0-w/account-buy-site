export const NoteMap: Record<
  TypePageNoteEnum,
  {
    key: TypePageNoteEnum;
    i18nKey: string;
    contentI18nKey: string;
  }
> = {
  security: {
    key: 'security',
    i18nKey: 'biz-footer-notes-title-security',
    contentI18nKey: 'biz-footer-notes-content-security',
  },
  payment: {
    key: 'payment',
    i18nKey: 'biz-footer-notes-title-payment',
    contentI18nKey: 'biz-footer-notes-content-payment',
  },
  freight: {
    key: 'freight',
    i18nKey: 'biz-footer-notes-title-freight',
    contentI18nKey: 'biz-footer-notes-content-freight',
  },
  returns: {
    key: 'returns',
    i18nKey: 'biz-footer-notes-title-returns',
    contentI18nKey: 'biz-footer-notes-content-returns',
  },
  'privacy-policy': {
    key: 'privacy-policy',
    i18nKey: 'biz-footer-notes-title-privacy-policy',
    contentI18nKey: 'biz-footer-notes-content-privacy-policy',
  },
  help: {
    key: 'help',
    i18nKey: 'biz-footer-notes-title-help',
    contentI18nKey: 'biz-footer-notes-content-help',
  },
};
