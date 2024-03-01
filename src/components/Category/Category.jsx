import { useEffect, useState } from 'react';
import styles from './Category.module.css'

import axios from 'axios';


export default function Category() {
  const [state, setState] = useState(false);
  const [show, setShow] = useState('');
  const handleClick = () => {
    setState((prev) => !prev);
  }

  useEffect(() => {
    axios.get('/cat/dog.json')
      .then((res) => setShow(res.data.price))
  }, [state])
  
  // fetch('/cat/dog.json', {
  //   headers: {
  //     'Accept': 'application/json'
  //   }
  // })
  // .then(res => res.json())
  // .then(data => console.log(data))
 
  return (
    <div className={styles.category}>
      <p>카테고리</p>
      <button onClick={handleClick}>눌러봐용</button>
      {state ? show : ''}
    </div>
  );
}
// headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }