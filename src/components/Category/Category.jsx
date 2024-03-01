import styles from './Category.module.css'
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';


export default function Category() {
  const {isLoading, error, data} = useQuery({
    queryKey: ['dogs'],
    queryFn: async () => {
      return axios
        .get('https://raw.githubusercontent.com/2coldok/blog/main/public/cat/dog.json')
        .then((res) => res.data.price)
    }
  })
  
  return (
    <div className={styles.category}>
      <p>카테고리</p>
      {`로딩 상태 : ${isLoading}`}
      {`에러 상태 : ${error}`}
      {`데이터 : ${data}`}
    </div>
  );
}
// headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }