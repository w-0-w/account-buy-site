import { definePageConfig } from 'ice';

import PageDetail from '@/components/Biz/PageDetail';

export default function Detail() {
  return <PageDetail />;
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: '详情',
  };
});
