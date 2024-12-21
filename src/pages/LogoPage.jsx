import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function LogoPage() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-start items-center'>
        <img className='mt-[250px]' src="/images/ui/logo.svg" alt="" />
        
        <Button className="mt-[120px] h-[64px] w-[250px]" onClick={() => navigate('/calculate')}>Найти вторую половинку</Button>
    </div>
  )
}

export default LogoPage
