import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import axios from '../axios'

function LogoPage() {
  const [userId, setUserId] = useState()
  useEffect(() => {
    const initData = window.Telegram.WebApp.initData;
    axios.post('/api/validate-init-data', {
      initData
    })
    .then(res => res.data)
    .then(data => {
      if(data){
        setUserId(data?.userId)
      }
    })
  }, [])
    
    
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-start items-center'>
      {userId ? userId : "userId"}
        <img className='mt-[250px]' src="/images/ui/logo.svg" alt="" />
        
        <Button className="mt-[120px] h-[64px] w-[250px]" onClick={() => navigate('/calculate')}>Найти вторую половинку</Button>
    </div>
  )
}

export default LogoPage
