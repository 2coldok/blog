import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/cat');
  }
  return (
    <div>
      Home page
      <button onClick={handleClick}>클릭해봐</button>
    </div>
  );
}

