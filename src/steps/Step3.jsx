import React from 'react'


function Step2() {
  return (
    <div className='flex flex-col justify-start items-center '>
      <img className='mt-[50px] w-[125px]' src="/animations/ball.gif" alt="" />
      <p className='text-gray text-[20px] font-medium w-[268px] mt-[23px] text-center'>Какой твой гендер?</p>
      <div
        type="text"
        className='w-[361px] h-[58px] rounded-[12px] mt-6 px-3 text-[32px] focus:outline-none flex justify-center'
        style={{background: "#f4f4f7"}}
        >Мужчина</div>
      <div
        type="text"
        className='w-[361px] h-[58px] rounded-[12px] mt-6 px-3 text-[32px] focus:outline-none flex justify-center'
        style={{background: "#f4f4f7"}}
        >Женщина</div>
      <div
        type="text"
        className='w-[361px] h-[58px] rounded-[12px] mt-6 px-3 text-[32px] focus:outline-none flex justify-center'
        style={{background: "#f4f4f7"}}
        >Другое</div>
    </div>
  )
}

export default Step2
