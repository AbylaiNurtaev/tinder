import React from 'react'
import cn from 'classnames'

function Button({ children, className, onClick }) {
  return (
    <div 
        className={cn('flex justify-center items-center bg-primary shadow-custom text-white rounded-[16px] font-semibold cursor-pointer', className)}
        // style={{ boxShadow: "" }}
        onClick={onClick}
    >   
    {children}
    </div>
  )
}

export default Button
