import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

function LogoPage() {
  const [userId, setUserId] = useState(undefined); // Изначально undefined для загрузки
  const navigate = useNavigate();

  useEffect(() => {
    const initData = window.Telegram.WebApp.initData;

    axios
      .post('/api/validate-init-data', { initData }) // Убираем JSON.stringify
      .then((res) => {
        setUserId(res.data?.userId); // Устанавливаем userId из ответа
      })
      .catch((err) => {
        console.error('Ошибка при отправке initData:', err);
        setUserId(null); // Устанавливаем null, если произошла ошибка
      });
  }, []);

  return (
    <div className="flex flex-col justify-start items-center">
      {userId === undefined
        ? 'Загрузка...' // Показать сообщение при загрузке
        : userId || 'Не удалось получить userId'} {/* Показать ошибку или userId */}
      <img className="mt-[250px]" src="/images/ui/logo.svg" alt="" />
      <Button
        className="mt-[120px] h-[64px] w-[250px]"
        onClick={() => navigate('/calculate')}
      >
        Найти вторую половинку
      </Button>
    </div>
  );
}

export default LogoPage;
