import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function LogoPage() {
  const [telegramId, setTelegramId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Получение initData из Telegram WebApp
    const initData = window.Telegram.WebApp.initData;
    if (!initData) {
      console.error('initData is not available.');
      return;
    }

    // Парсинг initData
    const params = new URLSearchParams(initData);
    const id = params.get('id'); // Извлекаем Telegram ID
    setTelegramId(id);

    // Проверка ID (можно добавить запрос к серверу здесь)
    if (id) {
      console.log('Telegram ID:', id);
      // Логика проверки ID в базе может быть добавлена здесь
      // Например, navigate('/dashboard') если ID уже зарегистрирован
    }
  }, []);

  return (
    <div className="flex flex-col justify-start items-center">
      {initData ? initData : "dsadsa"}
      {telegramId ? (
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
