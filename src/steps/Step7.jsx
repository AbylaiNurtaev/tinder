import React from 'react'
import Button from '../components/Button'

function Step7() {
  return (
    <div className='flex flex-col justify-start items-center mb-[30px]'>
      <p className='text-gray text-[28px] font-semibold w-[360px] mt-[50px] text-left'>Зачем ты здесь?</p>
      <p className='text-gray text-[16px] font-medium w-[360px] text-left mt-4'>Какая твоя цель в отношениях бла бла бла бла бла</p>
      <div
        type="text"
        className='w-[361px] h-[54px] rounded-[12px] mt-6 px-3 text-[20px] focus:outline-none flex justify-center items-center'
        style={{background: "#f4f4f7"}}
        >Серьёзные отношения</div>
      <div
        type="text"
        className='w-[361px] h-[54px] rounded-[12px] mt-1 px-3 text-[20px] focus:outline-none flex justify-center items-center'
        style={{background: "#f4f4f7"}}
        >Общение без конкретики</div>
      <div
        type="text"
        className='w-[361px] h-[54px] rounded-[12px] mt-1 px-3 text-[20px] focus:outline-none flex justify-center items-center'
        style={{background: "#f4f4f7"}}
        >Дружба</div>
      <div
        type="text"
        className='w-[361px] h-[54px] rounded-[12px] mt-1 px-3 text-[20px] focus:outline-none flex justify-center items-center'
        style={{background: "#f4f4f7"}}
        >Свидание</div>
    </div>
  )
}

export default Step7
