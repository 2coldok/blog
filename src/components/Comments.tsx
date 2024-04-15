import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UtterancesSkeletonLoader } from '../util/skeleton/UtterancesSkeletonLoader';

const Comments = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);


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
    script.setAttribute("theme", "github-light"); 
    script.setAttribute("crossorigin", "anonymous");

    const currentUrl = window.location.origin + location.pathname + location.search + location.hash;
    script.setAttribute('issue-term', currentUrl);

    scriptParentNode.appendChild(script);

    script.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    
    return () => {
      if (scriptParentNode.firstChild) {
        scriptParentNode.removeChild(scriptParentNode.firstChild);
      }
    }  
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      {loading && <UtterancesSkeletonLoader />}
      <div id="comments-section" style={{ display: loading ? 'none' : 'block' }} />
    </>
  )
};

export default Comments;
