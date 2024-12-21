import { Routes, Route } from 'react-router-dom';
import { FiltersProvider } from './context/FiltersContext';
import LogoPage from './pages/LogoPage'
import CalculatePage from './pages/CalculatePage';

function App() {
  return (
      <FiltersProvider>
        <div className="App flex justify-center items-center">
          <Routes>
            <Route index path='/' element={<LogoPage/>}/>
            <Route path='/calculate' element={<CalculatePage/>}/>
          </Routes>
        </div>
      </FiltersProvider>
  );
}

export default App;
