import { definePageConfig } from 'ice';

import { PageMeta } from '@/config/page';
import PageIndex from '@/components/Biz/PageIndex';

export default function Index() {
  return <PageIndex />;
}

export const pageConfig = definePageConfig(() => {
  return {
    meta: PageMeta,
    auth: ['admin', 'user'],
    title: '首页',
  };
});
