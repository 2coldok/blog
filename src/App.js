import './App.css';
import Category from './components/Category/Category';
import Light from './components/Light/Light';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App;
