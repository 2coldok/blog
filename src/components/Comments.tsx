import { useEffect } from 'react';

const Comments = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "2coldok/blog-comments"); // 사용할 GitHub 리포지토리
    script.setAttribute("issue-term", "pathname"); // 댓글을 매칭할 기준
    script.setAttribute("id", "utterances");
    script.setAttribute("theme", "github-light"); // 테마 설정
    script.setAttribute("crossorigin", "anonymous");

    const commentsSection = document.getElementById('comments-section');
    if (commentsSection) {
      commentsSection.appendChild(script);
    }

    return () => {
      const commentsSection = document.getElementById('comments-section');
      if (commentsSection) {
        commentsSection.innerHTML = '';
      }
    };
  }, []);

  return <div id="comments-section" />;
};

export default Comments;