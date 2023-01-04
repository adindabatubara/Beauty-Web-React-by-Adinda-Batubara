import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import News from './routes/News';
import Brands from './routes/Brands';
import About from './routes/About';
import Disc from './routes/Disc';
import { LogIn } from './components/LogIn';
import { Register } from './components/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/news' element={<News />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/about' element={<About />} />
        <Route path='/sale' element={<Disc />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;