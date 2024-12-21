import React from 'react'
import Button from '../components/Button'

function Step5() {
  return (
    <div className='flex flex-col justify-start items-center '>
      <img className='mt-[50px] w-[125px]' src="/images/ui/map.svg" alt="" />
      <p className='text-gray text-[20px] font-medium w-[268px] mt-[23px] text-center'>Откуда ты?</p>
      <input
        type="text"
        className='w-[361px] h-[58px] rounded-[12px] mt-6 px-3 text-[32px] focus:outline-none text-center'
        style={{background: "#f4f4f7"}}
        placeholder='Моя локация'
        disabled={true}
        

        />
        <button
        className="bg-white h-[45px] w-[360px] rounded-[16px] flex justify-center items-center gap-2 font-medium text-gray mt-[13px]"
        style={{ 
          boxShadow: "0 0 1px 0 rgba(201, 201, 201, 0.14), 0 2px 2px 0 rgba(201, 201, 201, 0.12), 0 4px 2px 0 rgba(201, 201, 201, 0.07), 0 7px 3px 0 rgba(201, 201, 201, 0.02), inset 0 -3px 11px 0 #e7e7e7",
          border: "1px solid #f2dddf",

         }}
        >Дать доступ к геопозиции <img src="/images/ui/location.svg" alt="" /></button>
    </div>
  )
}

export default Step5
