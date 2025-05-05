import { useEnsurePageToTop } from '@/hooks';
import PageDetail from '@/components/Biz/PageDetail';

export default function Detail() {
  useEnsurePageToTop();

  return <PageDetail />;
}
