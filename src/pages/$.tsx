import { ResponsiveGrid } from '@alifd/next';
import { definePageConfig } from 'ice';
import { injectIntl, useIntl } from 'react-intl';

import Exception from '@/components/Exception';

const { Cell } = ResponsiveGrid;

const FeedbackNotFound = () => {
  const intl = useIntl();

  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Exception
          statusCode={intl.formatMessage({ id: 'com-404' })}
          description={intl.formatMessage({ id: 'com-404-desc' })}
        />
      </Cell>
    </ResponsiveGrid>
  );
};

export const pageConfig = definePageConfig(() => {
  return {
    title: '404',
  };
});

export default injectIntl(FeedbackNotFound);
