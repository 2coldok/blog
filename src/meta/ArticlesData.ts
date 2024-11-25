import { FaReact } from "react-icons/fa"; // 리액트
import { RiJavascriptFill } from "react-icons/ri"; // 자바스크립트
import { BiLogoTypescript } from "react-icons/bi"; // 타입스크립트
import { SiCsswizardry } from "react-icons/si"; // css
import { TbBrandNextjs } from "react-icons/tb"; // nextjs
import { SiJest } from "react-icons/si"; // jset
import { GiFireBottle } from "react-icons/gi"; // 실험실
import { FaNodeJs } from "react-icons/fa"; // express
import { GiHummingbird } from "react-icons/gi"; // 프로그래머스
import { IoIosGitNetwork } from "react-icons/io"; // 네트워크
import { FaDatabase } from "react-icons/fa6"; // 자료구조
import { BiErrorCircle } from "react-icons/bi"; // 에러
import { IoLogoHtml5 } from "react-icons/io"; // html
import { PiLockKeyFill } from "react-icons/pi"; // security


export const iconMapping = {
  react: FaReact,
  javascript: RiJavascriptFill,
  typescript: BiLogoTypescript,
  css: SiCsswizardry,
  next: TbBrandNextjs,
  jest: SiJest,
  laboratory: GiFireBottle,
  express: FaNodeJs,
  programmers: GiHummingbird,
  network: IoIosGitNetwork,
  dataStructure: FaDatabase,
  error: BiErrorCircle,
  html: IoLogoHtml5,
  security: PiLockKeyFill
};

// 이 순서대로 메뉴바에서 sort 됨.
// 메뉴바에 보여질 큰 카테고리 이름
export const ArticleSortData = ['Frontend', 'Backend', 'Computer Science', 'Coding Problem'];

interface IArticleData {
  id: number;

  // 메뉴바에 보여질 작은 카테고리 이름
  name: string;

  // github issue와 연동하기 위한 이름.
  // label 이름과 동일해야 연동됨
  category: string;
  
  // 메뉴바에 보여질 큰 카테고리 이름
  sort: string;
  icon: keyof typeof iconMapping;
}

export const ArticlesData: IArticleData[] = [
  {
    id: 1,
    name: 'React',
    category: 'react',
    sort: 'Frontend',
    icon: 'react',
  },
  {
    id: 2,
    name: 'TypeScript',
    category: 'typescript',
    sort: 'Frontend',
    icon: 'typescript',
  },
  {
    id: 3,
    name: 'JavaScript',
    category: 'javascript',
    sort: 'Frontend',
    icon: 'javascript',
  },
  {
    id: 4,
    name: 'Express',
    category: 'express',
    sort: 'Backend',
    icon: 'express'
  },
  // {
  //   id: 4,
  //   name: 'Jest',
  //   category: 'jest',
  //   sort: 'Frontend',
  //   icon: 'jest',
  // },
  // {
  //   id: 5,
  //   name: 'CSS',
  //   category: 'css',
  //   sort: 'Frontend',
  //   icon: 'css',
  // },
  // {
  //   id: 6,
  //   name: 'Next',
  //   category: 'next',
  //   sort: 'Frontend',
  //   icon: 'next',
  // },
  // {
  //   id: 7,
  //   name: '실험실',
  //   category: 'laboratory',
  //   sort: 'Frontend',
  //   icon: 'laboratory',
  // },
  // {
  //   id: 8,
  //   name: 'Express',
  //   category: 'express',
  //   sort: 'Backend',
  //   icon: 'express',
  // },
  {
    id: 9,
    name: 'Programmers',
    category: 'programmers',
    sort: 'Coding Problem',
    icon: 'programmers',
  },
  {
    id: 10,
    name: 'Data Structure',
    category: '자료구조',
    sort: 'Computer Science',
    icon: 'dataStructure',
  },
  {
    id: 11,
    name: 'Network',
    category: 'network',
    sort: 'Computer Science',
    icon: 'network',
  },
  {
    id: 12,
    name: 'Error',
    category: 'error',
    sort: 'Frontend',
    icon: 'error',
  },
  {
    id: 13,
    name: 'Html',
    category: 'html',
    sort: 'Frontend',
    icon: 'html'
  },
  {
    id: 14,
    name: 'Security',
    category: 'security',
    sort: 'Backend',
    icon: 'security'
  }
];
