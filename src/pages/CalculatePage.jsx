import React, { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import Step1 from '../steps/Step1'
import Step2 from '../steps/Step2'
import Step3 from '../steps/Step3'
import Step4 from '../steps/Step4'

import Button from '../components/Button'
import Step5 from '../steps/Step5'
import Step6 from '../steps/Step6'
import Step7 from '../steps/Step7'

function CalculatePage() {
    const [step, setStep] = useState(1)
    
  return (
    <div className='flex flex-col justify-start items-center w-[100%]'>
        <div className="flex flex-col justify-start items-start w-[100%] ml-4 mt-[32px]">
            <ProgressBar current={step} max={8} onArrowClick={step >= 2 ? () => setStep(prev => prev - 1) : () => {}}></ProgressBar>
        </div>
        {
            step == 1 && 
            <Step1/>
        }
        {
            step == 2 && 
            <Step2/>
        }
        {
            step == 3 && 
            <Step3/>
        }
        {
            step == 4 && 
            <Step4/>
        }
        {
            step == 5 && 
            <Step5/>
        }
        {
            step == 6 && 
            <Step6/>
        }
        {
            step == 7 && 
            <Step7/>
        }
        <Button className="w-[360px] h-[64px] rounded-[16px] absolute bottom-4" onClick={() => setStep(prev => prev + 1)}>Далее</Button>
    </div>
  )
}

export default CalculatePage
