import { useEnsurePageToTop } from '@/hooks';
import { PageOrder } from '@/components/Biz/PageOrder';

export default function Order() {
  useEnsurePageToTop();

  return <PageOrder />;
}
