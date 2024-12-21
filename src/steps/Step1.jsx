import React from 'react'

function Step1() {
  return (
    <div className='flex flex-col justify-start items-center '>
      <p className='text-gray text-[20px] font-medium mt-[200px]'>Как тебя зовут?</p>
      <input
        type="text"
        className='w-[361px] h-[58px] rounded-[12px] mt-6 px-3 text-[32px] focus:outline-none text-center'
        style={{background: "#f4f4f7"}}
        />
    </div>
  )
}

export default Step1
