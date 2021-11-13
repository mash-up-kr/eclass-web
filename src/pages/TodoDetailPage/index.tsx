import { ReactComponent as DarkDeleteIcon } from 'assets/ic_delete_dark.svg';
import { ReactComponent as ShareIcon } from 'assets/ic_share.svg';

import styles from './TodoDetailPage.module.scss';
import LabeledButton from './components/LabeledButton';
import TodoInfoList from './components/TodoInfoList';
import TodoTitleInput from './components/TodoTitleInput';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoDetailPage = () => {
  return (
    <>
      <div className={cx('todo-detail-page')}>
        {/* <TodoTitleInput placeholder="제목" /> */}
        <div>
          <TodoTitleInput value="건강검진" />
          <TodoInfoList />
        </div>

        <div className={cx('todo-detail-page__actions')}>
          <LabeledButton icon={<ShareIcon />} label="공유" />
          <LabeledButton icon={<DarkDeleteIcon />} label="삭제" />
        </div>
      </div>
    </>
  );
};

export default TodoDetailPage;
