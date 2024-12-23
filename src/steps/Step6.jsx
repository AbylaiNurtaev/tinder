import React from 'react'
import Button from '../components/Button'

function Step6() {
  return (
    <div className='flex flex-col justify-start items-center '>
      <img className='mt-[50px] w-[125px]' src="/images/ui/MW.svg" alt="" />
      <p className='text-gray text-[20px] font-medium w-[268px] mt-[23px] text-center'>Кого хотите найти?</p>
      <div
        type="text"
        className='w-[361px] h-[58px] rounded-[12px] mt-6 px-3 text-[32px] focus:outline-none flex justify-center'
        style={{background: "#f4f4f7"}}
        >Мужчину</div>
      <div
        type="text"
        className='w-[361px] h-[58px] rounded-[12px] mt-6 px-3 text-[32px] focus:outline-none flex justify-center'
        style={{background: "#f4f4f7"}}
        >Женщину</div>
    </div>
  )
}

export default Step6
