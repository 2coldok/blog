import './App.css';
import Category from './components/Category/Category';
import Light from './components/Light/Light';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <div className='left'>
        <Category />
      </div>
      <div className='middle'>
        <Outlet />
        <NavBar />
      </div>
      <div className='right'>
        <Light />
      </div>
    </div>
  )
}

export default App;
