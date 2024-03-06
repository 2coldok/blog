import styles from './Category.module.css'
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from 'react-markdown';



export default function Category() {
  // const {isLoading, error, data} = useQuery({
  //   queryKey: ['dogs'],
  //   queryFn: async () => {
  //     return axios
  //       .get('https://raw.githubusercontent.com/2coldok/blog-posts/main/css/css2.md')
  //       .then((res) => res.data)
  //   }
  // })
  
  
  return (
    <div className={styles.category}>
      
      
      <ReactMarkdown></ReactMarkdown>
    </div>
  );
}
// headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }