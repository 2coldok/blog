import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Comments = () => {
  const location = useLocation();


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


    scriptParentNode.appendChild(script);
    
    return () => {
      
      if (scriptParentNode.firstChild) {
        scriptParentNode.removeChild(scriptParentNode.firstChild);
      }
    }  
  }, [location]);

  return <div id="comments-section" />;
};

export default Comments;