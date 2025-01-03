import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../axios'

function EditPage() {
    const [user, setUser] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        axios.post('/auth/getUserById', {
            userId,
        })
            .then((res) => res.data)
            .then((data) => {
                if (data) {
                    console.log(data);
                    setUser(data);
                }
            });
    }, []);

  return (
    <div className='flex flex-col justify-center items-start w-[360px]'>
      <h3 className='text-gray font-semibold text-[28px] flex justify-center items-center'><img className='w-[50px]' src="/images/icons/back arrow.png" alt="goback" />Твоя карточка</h3>
    </div>
  )
}

export default EditPage
