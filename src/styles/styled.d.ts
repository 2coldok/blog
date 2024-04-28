import 'styled-components';

// GlobalStyle에서 theme 변수를 사용하기 위해 theme 변수에 대한 타입을 정의해야 함.
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      articletext: string;
      date: string;
      border: string;
      clicked: string;
      block: string;
      subtitle: string;
      tagbackground: string;
      tagtext: string;
      tagborder: string;
      headline: string;
      number: string;
      popper: string;
      bigsearchborder: string;
      bigsearchtext: string;
      bigsearchbackground: string;
      pageindicatorborder: string;
      pageindicatorclicked: string;
      backgroundimage: string;
      navbarbackground: string;
      navbarborder: string;

      categorytagbackground: string;

      articletable: string;
      articlebacktick: string;
      
    };
  }
}
