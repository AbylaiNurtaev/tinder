import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function LogoPage() {
    const initData = window.Telegram.WebApp.initData;
    const navigate = useNavigate();

    console.log("initData", initData);

    return (
        <div className='flex flex-col justify-start items-center'>
            {initData ? (
                <>
                    <p>ID пользователя: {initData.id}</p>
                    {/* Вы можете использовать другие данные, например, имя пользователя */}
                    <p>Имя пользователя: {initData.first_name}</p>
                    <img className='mt-[250px]' src="/images/ui/logo.svg" alt="" />
                </>
            ) : (
                "dsa"
            )}
            <Button className="mt-[120px] h-[64px] w-[250px]" onClick={() => navigate('/calculate')}>Найти вторую половинку</Button>
        </div>
    );
}

export default LogoPage;
