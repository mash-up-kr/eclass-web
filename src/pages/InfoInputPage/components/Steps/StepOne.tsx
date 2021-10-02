import styles from './StepOne.module.scss';

interface StepOneProps {
  name: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const StepOne = ({ name, onChangeName }: StepOneProps) => {
  return (
    <div className={styles['step-one']}>
      <div className={styles['step-one__content']}>
        <p className={styles['step-one__title']}>반려동물의 이름은 무엇인가요?</p>
        <div>
          <input className={styles['step-one__input']} value={name} onChange={onChangeName} />
        </div>
        {/* Date Set button */}
        <p className={styles['step-one__label']}>태어난 날짜</p> {/* margin 설정 label */}
        <button
          type="button"
          className={styles['step-one__date-button']}
          onClick={() => {
            console.log('날짜 버튼 눌림');
          }}
        >
          2020 년 09월 15일
        </button>
        {/* Date Set button */}
      </div>
    </div>
  );
};

export default StepOne;
