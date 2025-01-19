import React, { useEffect, useState } from 'react'
import axios from '../axios'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Filters from '../components/Filters';

function FindPage() {
    const [user, setUser] = useState();
    const [filters, setFilters] = useState(false)

    useEffect(() => {
        const initData = 'user=%7B%22id%22%3A5056024242%2C%22first_name%22%3A%22%3C%5C%2Fabeke%3E%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22abylaikak%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FAj3hfrbNq8PfLLKvsSp3-WizcXTc3HO8Vynsw3R1a1A5spK3fDmZERABNoOGLEQN.svg%22%7D&chat_instance=-4908992446394523843&chat_type=private&auth_date=1735556539&signature=pgNJfzcxYGAcJCJ_jnsYEsmiTJJxOP2tNKb941-fT7QcsUQ2chSkFcItG8KvjR_r3nH0vem4bxtlltuyX-IwBQ&hash=c0b510163f5b1dea53172644df35e63458216a9d5d9a10413af4f5b0204bb493';
        const userId = localStorage.getItem('userId');
        axios
          .post('/auth/getUserById', { userId })
          .then((res) => {
            console.log(res.data);
            setUser(res.data); // Устанавливаем userId из ответа
          })
          .catch((err) => {
            console.error('Ошибка при отправке initData:', err);
            setUser(null); // Устанавливаем null, если произошла ошибка
          })
      }, []);


  return (
    <div className='w-[90vw] flex flex-col justify-start items-center'>
        {
            filters == true &&
            <Filters closePopup={() => setFilters(false)}></Filters>
        }
        <div className="flex justify-between items-center w-[100%] mt-[30px]">
            <img src="/images/ui/logo.svg" className='w-[125px]' alt="" />
            <img src="/images/icons/filterBtn.svg" onClick={() => setFilters(true)} className='w-[127px]' alt="" />
        </div>

        <div className='w-full max-w-[345px] top-[100px] absolute z-0'>
                {user?.photos?.length > 0 ? (
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={8}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className='rounded-[8px]'
                    >
                        {user.photos.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-[433px] rounded-[8px] overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={photo}
                                        alt={`Фото ${index + 1}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className='w-full h-[403px] flex justify-center items-center rounded-[8px] bg-gray-200'>
                        <p>Фото отсутствуют</p>
                    </div>
                )}
            </div>

            {/* Информация о пользователе */}
            <div className='flex flex-col w-[345px] text-left z-10 ml-3 absolute top-[350px] pointer-events-none'>
                <p className='bg-red-500 text-white rounded-[16px] px-[12px] py-1 font-medium min-w-[100px] max-w-fit flex justify-center items-center'>
                    {user?.goal || 'Цель не указана'}
                </p>
                <h1 className='flex justify-start items-start text-[32px] text-white font-bold mt-[4px]' style={{ fontStyle: "italic" }}>
                    <span className='font-medium' style={{ fontStyle: "normal" }}>{user?.name || 'Имя не указано'}</span>, 
                    {user?.birthYear ? new Date().getFullYear() - user.birthYear : 'Возраст неизвестен'} 
                    <img src="/images/icons/Verifed.png" style={{ width: "28px", marginTop: "14px", marginLeft: "5px" }} alt="" />
                </h1>
                <p className='text-gray-500 mt-[4px] text-white'>
                    {user?.city || 'Местоположение неизвестно'}, {user?.height || 'Рост не указан'} см.
                </p>
                <p
                    style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "125%" }}
                    className='mt-[8px] font-semibold text-[16px]'
                >
                    {user?.about
                        ? user.about.length > 140
                            ? `${user.about.slice(0, 140)}...`
                            : user.about
                        : 'Описание отсутствует'}
                </p>
            </div>

            <div className="flex justify-between items-center absolute bottom-20 w-[90%]" >
                <img src="/images/ui/gobackBtn.svg" className='w-[70px]' alt="" />
                <img src="/images/ui/noBtn.svg" className='w-[100px]' alt="" />
                <img src="/images/ui/goBtn.svg" className='w-[100px]' alt="" />
                <img src="/images/ui/starBtn.svg" className='w-[70px]' alt="" />

            </div>


    </div>
  )
}

export default FindPage
