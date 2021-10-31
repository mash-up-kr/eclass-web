import styles from './Badge.module.scss';

import classNames from 'classnames/bind';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

// TODO(@mango906): 추후에 Badge 테마가 여러개가 될 경우 theme 추가해주기

const Badge = ({ className, children }: BadgeProps) => {
  return <div className={cx('badge', className)}>{children}</div>;
};

export default Badge;
