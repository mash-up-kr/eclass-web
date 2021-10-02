import { useCallback, useState } from 'react';

const MIN_STEP = 0;
const MAX_STEP = 1;

const useInfoInput = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const buttonText = currentStep === MAX_STEP ? '완료' : '다음';

  const handlePrev = useCallback(() => {
    if (currentStep === MIN_STEP) {
      return;
    }

    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const handleNext = useCallback(() => {
    if (currentStep === MAX_STEP) {
      return;
    }

    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  return {
    currentStep,
    buttonText,
    handlePrev,
    handleNext,
  };
};

export default useInfoInput;
