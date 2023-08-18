import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Calculator from './pages/Calculator';
import TodoList from './pages/TodoList';
import Homepage from './pages/Homepage';
// import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
    {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/todolist' element={<TodoList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
