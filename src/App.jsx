import { Routes, Route } from 'react-router-dom';
import { FiltersProvider } from './context/FiltersContext';
import LogoPage from './pages/LogoPage'
import CalculatePage from './pages/CalculatePage';
import { useEffect } from 'react';
import ReadyLogin from './pages/ReadyLogin';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;

    // Расширение до полного экрана
    tg.expand();

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
            <Route index path='/' element={<LogoPage/>}/>
            <Route path='/calculate' element={<CalculatePage/>}/>
            <Route path='/readyLogin' element={<ReadyLogin/>}/>
          </Routes>
        </div>
      </FiltersProvider>
  );
}

export default App;
