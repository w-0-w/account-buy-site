import { Card } from '@alifd/next';

import styles from './index.module.css';

const Exception = ({
  statusCode,
  description,
  image,
}: {
  statusCode: string;
  description: string;
  image?: string;
}) => {
  return (
    <Card
      free
      className={styles.exception}
    >
      <div>
        {image ? (
          <img
            src={image}
            className={styles.exceptionImage}
            alt="img"
          />
        ) : null}
        <h1 className={styles.statusCode}>{statusCode}</h1>
        <div className={styles.description}>{description}</div>
      </div>
    </Card>
  );
};

export default Exception;
