import styles from './PowerOn.module.css'

import ReactMarkdown from 'react-markdown';

const text = `
  # 헤드에용
  **굵게**
  

  일반텍스트

  \`\`\`
    const a = new class();
  \`\`\`
`;

export default function PowerOn() {
  return (
    <div className={styles.on}>
      <p>전원 켜짐</p>
      <ReactMarkdown>{text}</ReactMarkdown>
    
    </div>
  );
}

