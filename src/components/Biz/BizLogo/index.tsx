import { useNavigate } from 'ice';

import LogoIcon from '@/assets/images/logo-icon.png';

import { useBiz } from '@/hooks';

import styles from './index.module.css';

export const BizLogo = () => {
  const { routePrefix } = useBiz();
  const navigate = useNavigate();
  return (
    <div
      className={styles.bizLogoWrap}
      onClick={(evt) => {
        evt.stopPropagation();
        navigate(routePrefix || '/');
      }}
    >
      <img
        src={LogoIcon}
        className={styles.bizLogoImg}
        alt="logo"
      />
    </div>
  );
};
