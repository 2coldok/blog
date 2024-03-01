import { useEffect, useState } from 'react';
import styles from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate();
  const [power, setPower] = useState(false);
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('네이비게이트 되었습니다(검색되었습니다)')
  }
  
  const handlePower = () => {
    setPower((prev) => !prev);
  }
  const handleBack = () => {
    navigate(-1);
  }
  const handleForward = () => {
    navigate(1);
  }
  const handleHome = () => {
    navigate('/')
  }

  useEffect(() => {
    power ? navigate('/on') : navigate('off');
  }, [power])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search Anything..' value={text} onChange={handleChange}/>
        <button>검색</button>
      </form>
      <button onClick={handlePower}>전원버튼</button>
      <button onClick={handleBack}>뒤로가기</button>
      <button onClick={handleForward}>앞으로가기</button>
      <button onClick={handleHome}>홈버튼</button>
    </div>
  );
}

