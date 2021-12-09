import styles from './TodoItem.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoItem = () => {
  return (
    <div className={cx('todo-item')}>
      <div className={cx('todo-item__title')}>건강검진</div>
      <div className={cx('todo-item__description')}>오전 10:00, 냥냥댕댕 동물병원 </div>
    </div>
  );
};

export default TodoItem;
