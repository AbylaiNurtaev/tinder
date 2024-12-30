import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function LogoPage() {
  const [telegramId, setTelegramId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      // Проверяем, доступен ли объект Telegram
      if (!window.Telegram || !window.Telegram.WebApp) {
        setError('Telegram WebApp объект недоступен.');
        return;
      }

      const initData = window.Telegram.WebApp.initData;

      if (!initData) {
        setError('initData отсутствует.');
        return;
      }

      // Парсинг initData
      const params = new URLSearchParams(initData);
      const id = params.get('id');

      if (id) {
        setTelegramId(id);
        console.log('Telegram ID:', id);
      } else {
        setError('ID не найден в initData.');
      }
    } catch (e) {
      console.error('Ошибка получения Telegram ID:', e);
      setError('Произошла ошибка.');
    }
  }, []);

  return (
    <div className="flex flex-col justify-start items-center">
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : telegramId ? (
        <p>Ваш Telegram ID: {telegramId}</p>
      ) : (
        <p>Загрузка...</p>
      )}
      <img className="mt-[250px]" src="/images/ui/logo.svg" alt="Logo" />
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
