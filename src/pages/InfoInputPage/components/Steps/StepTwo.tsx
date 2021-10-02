import styles from './StepTwo.module.scss';

interface StepTwoProps {
  name: string;
  role: string;
  onChangeRole: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo = ({ name, role, onChangeRole }: StepTwoProps) => {
  return (
    <div className={styles['step-two']}>
      <div className={styles['step-two__content']}>
        <p className={styles['step-two__title']}>{name}는 당신을 뭐라고 부를까요?</p>
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
