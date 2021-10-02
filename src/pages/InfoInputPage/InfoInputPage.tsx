import { ReactComponent as LeftArrowIcon } from 'assets/ic_arrow_left.svg';

import styles from './InfoInputPage.module.scss';
import StepOne from './components/Steps/StepOne';
import StepTwo from './components/Steps/StepTwo';
import useInfoInput from './hooks/useInfoInput';

import classNames from 'classnames/bind';
import { useMemo, useState } from 'react';
import { useSetRecoilState, atom } from 'recoil';

const cx = classNames.bind(styles);

export const NAME_INFO = atom({
  key: 'NameInfo',
  default: '',
});

export const ROLE_INFO = atom({
  key: 'RoleInfo',
  default: '',
});

const InfoInputPage = () => {
  const { currentStep, buttonText, handleNext, handlePrev } = useInfoInput();
  const [name, setName] = useState('');
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [role, setRole] = useState('');
  const onChangeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };
  const setNameInfo = useSetRecoilState(NAME_INFO);
  const setRoleInfo = useSetRecoilState(ROLE_INFO);
  const handleNextButton = () => {
    setNameInfo(name);
    setRoleInfo(role);
    handleNext();
  };

  const stepContent = useMemo(() => {
    switch (currentStep) {
      case 0:
        return <StepOne name={name} onChangeName={onChangeName} />;
      default:
        return <StepTwo name={name} role={role} onChangeRole={onChangeRole} />;
    }
  }, [currentStep, name, role]);

  return (
    <div className={styles['input-form']}>
      <header className={styles['input-form__header']}>
        {currentStep === 1 && <LeftArrowIcon onClick={handlePrev} />}
      </header>

      <div className={styles['input-form__content']}>{stepContent}</div>

      {/* button */}
      <button
        type="button"
        disabled={name === ''}
        className={cx('input-form__button', { 'input-form__button--disabled': name === '' })}
        onClick={handleNextButton}
      >
        {buttonText}
      </button>
      {/* button */}
    </div>
  );
};

export default InfoInputPage;
