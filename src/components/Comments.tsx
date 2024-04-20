import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { UtterancesSkeletonLoader } from '../util/skeleton/UtterancesSkeletonLoader';
import styled from 'styled-components';

const Comments = () => {
  const location = useLocation();
  // const [loading, setLoading] = useState(true);


  useEffect(() => {
    const scriptParentNode = document.getElementById('comments-section');
    if (!scriptParentNode) return;

    while (scriptParentNode.firstChild) {
      scriptParentNode.removeChild(scriptParentNode.firstChild);
    }

    const script = document.createElement('script');
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "2coldok/blog-comments");
    script.setAttribute("issue-term", "url"); 
    script.setAttribute("id", "utterances");
    script.setAttribute("theme", "github-dark"); 
    script.setAttribute("crossorigin", "anonymous");

    const currentUrl = window.location.origin + location.pathname + location.search + location.hash;
    script.setAttribute('issue-term', currentUrl);

    scriptParentNode.appendChild(script);

    
    return () => {
      if (scriptParentNode.firstChild) {
        scriptParentNode.removeChild(scriptParentNode.firstChild);
      }
    }  
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      {/* {loading && <UtterancesSkeletonLoader />} */}
      <CommentsContainer id='comments-section' />
    </>
  )
};

export default Comments;


const CommentsContainer = styled.div`
  /* background-color: #999494; */
  min-height: 200px;

  border-radius: 1rem;
  border: 1px solid ${({theme}) => theme.colors.border};
  margin: 1rem 0;
  
`;