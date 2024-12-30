import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Step1 from '../steps/Step1';
import Step2 from '../steps/Step2';
import Step3 from '../steps/Step3';
import Step4 from '../steps/Step4';
import Step5 from '../steps/Step5';
import Step6 from '../steps/Step6';
import Step7 from '../steps/Step7';
import Button from '../components/Button';
import { useFilters } from '../context/FiltersContext';
import Step8 from '../steps/Step8';

function CalculatePage() {
  const [step, setStep] = useState(1);
  const { filters } = useFilters(); // Получаем значения из контекста
  

  // Проверка, заполнен ли текущий шаг
  const isStepValid = () => {
    switch (step) {
      case 1:
        return !!filters.name; // Проверяем поле для Step1
      case 2:
        return !!filters.birthday; // Проверяем выбранный гендер
      case 3:
        return !!filters.gender; // Проверяем заполненную дату рождения
      case 4:
        return !!filters.height; // Добавьте проверку для Step4
      case 5:
        return !!filters.location; // Проверяем геопозицию
      case 6:
        return !!filters.preference; // Проверяем, кого хочет найти
      case 7:
        return !!filters.relationshipGoal; // Проверяем цель отношений
      default:
        return true;
    }
  };  
  

  return (
    <div className='flex flex-col justify-start items-center w-[100%]'>
      <div className="flex flex-col justify-start items-start w-[100%] ml-4 mt-[32px]">
        <ProgressBar 
          current={step} 
          max={8} 
          onArrowClick={step >= 2 ? () => setStep((prev) => prev - 1) : () => {}} 
        />
      </div>

      {/* Шаги */}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
      {step === 6 && <Step6 />}
      {step === 7 && <Step7 />}
      {step === 8 && <Step8 />}

      {/* Кнопка Далее */}
      <Button
        className={`w-[360px] h-[64px] rounded-[16px] absolute bottom-4 ${
          !isStepValid() ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
        }`}
        onClick={() => setStep((prev) => prev + 1)}
        disabled={!isStepValid()} // Блокируем кнопку, если шаг не валиден
      >
        Далее
      </Button>
    </div>
  );
}

export default CalculatePage;
