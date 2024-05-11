import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { UtterancesSkeletonLoader } from '../util/skeleton/UtterancesSkeletonLoader';
import styled from 'styled-components';
import { useThemeChange } from '../hook/ThemeHook';

const Comments = () => {
  const location = useLocation();
  // const [loading, setLoading] = useState(true);
  const { themeName } = useThemeChange();
  let utterancesTheme = 'dark-blue';

  switch (themeName) {
    case 'github': 
      utterancesTheme = 'dark-blue';
      break;
    case 'colorweakness':
      utterancesTheme = 'boxy-light';
      break;
    case 'starbucks':
      utterancesTheme = 'gruvbox-dark';
      break;
    case 'starcraft':
      utterancesTheme = 'github-dark-orange';
      break;
  }


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
    script.setAttribute("issue-term", "pathname"); 
    script.setAttribute("id", "utterances");
    script.setAttribute("theme", `${utterancesTheme}`); 
    script.setAttribute("crossorigin", "anonymous");

    const currentUrl = window.location.origin + location.pathname + location.search;
    script.setAttribute('issue-term', currentUrl);

    scriptParentNode.appendChild(script);

    
    return () => {
      if (scriptParentNode.firstChild) {
        scriptParentNode.removeChild(scriptParentNode.firstChild);
      }
    }  
  }, [location.pathname, location.search, utterancesTheme]);

  return (
    <>
      {/* {loading && <UtterancesSkeletonLoader />} */}
      <CommentsContainer id='comments-section' />
    </>
  )
};

export default Comments;


const CommentsContainer = styled.div`
  /* background-color: ${({theme}) => theme.colors.block};*/
  background-color: ${({theme}) => theme.colors.headline};
  min-height: 200px;
  

  border-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.border};
  margin: 1rem 0;
  
`;