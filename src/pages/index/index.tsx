import { definePageConfig } from 'ice';

import PageIndex from '@/components/Biz/PageIndex';

export default function Index() {
  return <PageIndex />;
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: '首页',
  };
});
