import styles from './StepTwo.module.scss';

interface StepTwoProps {
  name: string;
  role: string;
  onChangeRole: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo = ({ name, role, onChangeRole }: StepTwoProps) => {
  const isEndWithConsonant = () => {
    const finalChrCode = name.charCodeAt(name.length - 1);
    // 0 = 받침 없음, 그 외 = 받침 있음
    const finalConsonantCode = (finalChrCode - 44032) % 28;
    return finalConsonantCode !== 0;
  };

  return (
    <div className={styles['step-two']}>
      <div className={styles['step-two__content']}>
        <p className={styles['step-two__title']}>
          {name}
          {isEndWithConsonant() ? '은' : '는'} 당신을 뭐라고 부를까요?
        </p>
        <div>
          <input
            className={styles['step-two__input']}
            value={role}
            onChange={onChangeRole}
            placeholder="언니?오빠?엄마?"
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
