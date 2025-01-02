import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import { useFilters } from '../context/FiltersContext';

function LogoPage() {
  const [user, setUser] = useState(undefined); // Изначально undefined для загрузки
  const navigate = useNavigate();
  const { filters, updateFilter } = useFilters();

  useEffect(() => {
    const initData = window.Telegram.WebApp.initData;
    // const initData = 'user=%7B%22id%22%3A5056024242%2C%22first_name%22%3A%22%3C%5C%2Fabeke%3E%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22abylaikak%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FAj3hfrbNq8PfLLKvsSp3-WizcXTc3HO8Vynsw3R1a1A5spK3fDmZERABNoOGLEQN.svg%22%7D&chat_instance=-4908992446394523843&chat_type=private&auth_date=1735556539&signature=pgNJfzcxYGAcJCJ_jnsYEsmiTJJxOP2tNKb941-fT7QcsUQ2chSkFcItG8KvjR_r3nH0vem4bxtlltuyX-IwBQ&hash=c0b510163f5b1dea53172644df35e63458216a9d5d9a10413af4f5b0204bb493';

    axios
      .post('/api/validate-init-data', { initData }) // Убираем JSON.stringify
      .then((res) => {
        console.log(res.data.user);

        localStorage.setItem('userId', res.data.user._id)
        setUser(res.data.user); // Устанавливаем userId из ответа
        updateFilter("telegramId", res.data.telegramId)
        
      })
      .catch((err) => {
        console.error('Ошибка при отправке initData:', err);
        setUser(null); // Устанавливаем null, если произошла ошибка
      });
  }, []);

  return (
    <div className="flex flex-col justify-start items-center">
      <img className="mt-[250px]" loading='eager' src="/images/ui/logo.svg" alt="" />
      <Button
        className="mt-[120px] h-[64px] w-[250px]"
        onClick={() => {
          if (user === undefined || user === null) {
            navigate('/calculate');
          } else {
            navigate('/readyLogin');
          }
        }}
        
      >
        Найти вторую половинку
      </Button>
    </div>
  );
}

export default LogoPage;
