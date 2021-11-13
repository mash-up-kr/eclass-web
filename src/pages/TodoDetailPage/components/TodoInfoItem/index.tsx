import styles from './TodoInfoItem.module.scss';

import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(styles);

interface TodoInfoItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement<
    React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >
  >;
  placeholder?: string;
  value?: string;
}

const TodoInfoItem = ({ icon, placeholder, value }: TodoInfoItemProps) => {
  return (
    <div className={cx('todo-info-item')}>
      {icon}
      <input
        readOnly={value != null}
        type="text"
        placeholder={placeholder}
        value={value}
        className={cx('todo-info-item__label')}
      />
    </div>
  );
};

export default TodoInfoItem;
