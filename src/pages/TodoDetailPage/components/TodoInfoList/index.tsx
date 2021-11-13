import { ReactComponent as ClockIcon } from 'assets/ic_clock.svg';
import { ReactComponent as MapPinIcon } from 'assets/ic_map_pin.svg';
import { ReactComponent as RepeatIcon } from 'assets/ic_repeat.svg';

import TodoInfoItem from '../TodoInfoItem';

import styles from './TodoInfoList.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInfoList = () => {
  return (
    <div className={cx('todo-info-list')}>
      <TodoInfoItem icon={<ClockIcon />} value="8월 3일(수) 오전 10:00" />
      <TodoInfoItem icon={<MapPinIcon />} placeholder="장소" value="냥냥댕댕 동물병원" />
      <TodoInfoItem icon={<RepeatIcon />} value="반복 없음" />
    </div>
  );
};

export default TodoInfoList;
