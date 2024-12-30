import React, { useState } from 'react';

function Navigation() {
    const [currentPage, setCurrentPage] = useState(null); // Текущее состояние страницы

    return (
        <div className='w-full h-[60px] flex justify-between items-center absolute bottom-0 bg-white z-10' style={{ borderTop: "1px solid #f2dddf" }}>
            {/* Heart */}
            <div className='flex justify-center items-center w-[100%]'>
                <img
                    className='w-[28px]'
                    src={currentPage === 'heart' ? '/images/icons/heart_red.png' : '/images/icons/heart.png'}
                    onClick={() => setCurrentPage('heart')}
                    alt="Heart Icon"
                />
            </div>
            
            {/* Tinder */}
            <div className='flex justify-center items-center w-[100%]'>
                <img
                    className='w-[28px]'
                    src={currentPage === 'tinder' ? '/images/icons/tinder_red.svg' : '/images/icons/tinder.png'}
                    onClick={() => setCurrentPage('tinder')}
                    alt="Tinder Icon"
                />
            </div>
            
            {/* Chat */}
            <div className='flex justify-center items-center w-[100%]'>
                <img
                    className='w-[28px]'
                    src={currentPage === 'chat' ? '/images/icons/chat_red.png' : '/images/icons/chat.png'}
                    onClick={() => setCurrentPage('chat')}
                    alt="Chat Icon"
                />
            </div>
            
            {/* User */}
            <div className='flex justify-center items-center w-[100%]'>
                <img
                    className='w-[28px]'
                    src={currentPage === 'user' ? '/images/icons/user_red.png' : '/images/icons/user.png'}
                    onClick={() => setCurrentPage('user')}
                    alt="User Icon"
                />
            </div>
        </div>
    );
}

export default Navigation;
