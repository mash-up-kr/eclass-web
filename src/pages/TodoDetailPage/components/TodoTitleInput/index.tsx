import styles from './TodoTitleInput.module.scss';

import classNames from 'classnames/bind';

interface TodoTitleInputProps {
  placeholder?: string;
  value?: string;
}

const cx = classNames.bind(styles);

const TodoTitleInput = ({ placeholder, value }: TodoTitleInputProps) => {
  return (
    <div className={cx('todo-title-input')}>
      <div className={cx('todo-title-input__icon')} />
      <input
        readOnly={value != null}
        type="text"
        placeholder={placeholder}
        value={value}
        className={cx('todo-title-input__label')}
      />
    </div>
  );
};

export default TodoTitleInput;
