import { useNavigate } from "react-router-dom";

export default function Videos() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/hello')
  }  
  return (
    <div>
      videos 페이지에용
      <button onClick={handleClick}>world로 이동하기</button>
    </div>
  );
}

