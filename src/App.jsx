import { Routes, Route } from 'react-router-dom';
import { FiltersProvider } from './context/FiltersContext';
import LogoPage from './pages/LogoPage'
import CalculatePage from './pages/CalculatePage';
import { useEffect } from 'react';
import ReadyLogin from './pages/ReadyLogin';
import EditPage from './pages/EditPage';
import LikesPage from './pages/LikesPage';
import Layout from './components/Layout';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    

    // Расширение до полного экрана
    tg.expand();
    tg.requestFullscreen();

    const userId = tg.initDataUnsafe.user?.id;
    console.log('userId', userId);
    // Установка события завершения инициализации
    tg.ready();

    

    return () => {
      tg.close(); // Закрытие веб-приложения (при необходимости)
    };
  }, []);
  return (
    <FiltersProvider>
      <div className="App flex justify-center items-center">
        <Routes>
          {/* Главные страницы без навигации */}
          <Route path="/" element={<LogoPage />} />
          <Route path="/calculate" element={<CalculatePage />} />

          {/* Страницы с навигацией */}
          <Route path="/" element={<Layout />}>
            <Route path="/readyLogin" element={<ReadyLogin />} />
            <Route path="/editProfile" element={<EditPage />} />
            <Route path="/likes" element={<LikesPage />} />
          </Route>
        </Routes>
      </div>
    </FiltersProvider>
  );
}

export default App;
