import React from 'react'


function Step4() {
  return (
    <div className='flex flex-col justify-start items-center '>
      <img className='mt-[50px] w-[125px]' src="/images/ui/100.svg" alt="" />
      <p className='text-gray text-[20px] font-medium w-[268px] mt-[23px] text-center'>Какой твой рост?</p>
      <input
        type="text"
        className='w-[361px] h-[58px] rounded-[12px] mt-6 px-3 text-[32px] focus:outline-none text-center'
        style={{background: "#f4f4f7"}}
        placeholder='180'
        />
    </div>
  )
}

export default Step4
