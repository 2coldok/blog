const templete = {
  kind: 'blogPosts',
  writer: '2coldok',
  items: [],
}

const unit = {
  category: '카테고리',
  id: '라이브러리 이용해서 고유 아이디 부여',
  date: '날짜 수동기입 글 순서 정하는데도 쓸꺼임',
  title: '포스터 제목',
  tag: ['핵심키워드만','배열형태로 나열'],
  content: `본문내용 마크업 형태로 작성. 백틱으로 감싸줘야 됨`
}

const basic = {
  kind: 'blogPosts',
  writer: '2coldok',
  items: [
    {
      category: 'css',
      id: '12bv35l1',
      date: '2024.02.31',
      title: 'absolute 사용방법',
      tag: ['position', 'flex'],
      content: `#안녕하세용 **Hello**`,
    },
    {
      category: 'react',
      id: 'vfdr214m123mr',
      date: '2024.03.31',
      title: 'useContext 완전 정복하기',
      tag: ['react hook'],
      content: `컨텍스트 사용방법 쉬워용`,
    }
  ],
}