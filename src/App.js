
import './assets/App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import HomeRouter from './pages/home/HomeRouter';

function App() {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomeRouter />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
