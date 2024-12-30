import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import axios from '../axios';

function ReadyLogin() {
    const [user, setUser] = useState();

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
        <div className='flex flex-col justify-center items-center w-full p-[16px]'>
            <div className='flex justify-between items-center w-full max-w-[361px] mt-[5px]'>
                <h3 className='text-gray font-semibold text-[28px]'>Твоя карточка</h3>
                <button
                    className='rounded-[16px] w-[45px] h-[45px] flex justify-center items-center'
                    style={{
                        border: '1px solid #f2dddf',
                        boxShadow: '0 0 1px 0 rgba(201, 201, 201, 0.14), 0 2px 2px 0 rgba(201, 201, 201, 0.12), 0 4px 2px 0 rgba(201, 201, 201, 0.07), 0 7px 3px 0 rgba(201, 201, 201, 0.02), inset 0 -3px 11px 0 #e7e7e7',
                    }}
                >
                    <img src='/images/icons/notification.svg' alt='Уведомления' />
                </button>
            </div>

            {/* Слайдер фотографий */}
            <div className='w-full max-w-[345px] mt-[-90px] absolute z-0'>
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
                                <img
                                    className='w-full h-[403px] object-cover rounded-[8px]'
                                    src={photo}
                                    alt={`Фото ${index + 1}`}
                                />
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
            <div className='mt-[20px] w-full max-w-[345px] text-left z-10'>
                <p className='bg-red-500 text-white rounded-[16px] px-[12px] py-1 font-medium w-auto'>{user?.goal || 'Цель не указана'}</p>
                <h1 className='text-[24px] text-white font-bold mt-[4px]'>{user?.name || 'Имя не указано'}, {user?.birthYear ? new Date().getFullYear() - user.birthYear : 'Возраст неизвестен'}</h1>
                <p className='text-gray-500 mt-[4px]'>
                    {user?.location || 'Местоположение неизвестно'}, {user?.height || 'Рост не указан'} см.
                </p>
                <p className='text-gray-700 mt-[8px]'>{user?.about || 'Описание отсутствует'}</p>
            </div>

            {/* Кнопки */}
            <Button className='mt-[224px] gap-[10px] h-[64px] w-[345px]'>
                Редактировать
                <img src='/images/icons/edit.svg' className='w-[32px]' alt='Редактировать' />
            </Button>
            <button
                className='rounded-[16px] w-[345px] h-[45px] mt-[11px] flex justify-center items-center'
                style={{
                    boxShadow: '0 0 1px 0 rgba(201, 201, 201, 0.14), 0 2px 2px 0 rgba(201, 201, 201, 0.12), 0 4px 2px 0 rgba(201, 201, 201, 0.07), 0 7px 3px 0 rgba(201, 201, 201, 0.02), inset 0 -3px 11px 0 #e7e7e7',
                    border: '1px solid #f2dddf',
                }}
            >
                Скрыть аккаунт из ленты
                <img src='/images/icons/Trash_1.svg' className='ml-[8px]' alt='Удалить' />
            </button>

            <Navigation />
        </div>
    );
}

export default ReadyLogin;