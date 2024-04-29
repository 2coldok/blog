import { FaReact } from "react-icons/fa"; // 리액트
import { RiJavascriptFill } from "react-icons/ri"; // 자바스크립트
import { BiLogoTypescript } from "react-icons/bi"; // 타입스크립트
import { SiCsswizardry } from "react-icons/si"; // css
import { TbBrandNextjs } from "react-icons/tb"; // nextjs
import { SiJest } from "react-icons/si"; // jset
import { GiFireBottle } from "react-icons/gi"; // 실험실
import { FaNodeJs } from "react-icons/fa"; // express
import { GiHummingbird } from "react-icons/gi"; // 프로그래머스

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
};

interface IArticleData {
  id: number;
  name: string;
  category: string;
  sort: string;
  icon: keyof typeof iconMapping;
}

// 이 순서대로 메뉴바에서 sort 됨.
export const ArticleSortData = ['Frontend', 'Backend', 'Coding Problem'];

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
    name: 'Jest',
    category: 'jest',
    sort: 'Frontend',
    icon: 'jest',
  },
  {
    id: 5,
    name: 'CSS',
    category: 'css',
    sort: 'Frontend',
    icon: 'css',
  },
  {
    id: 6,
    name: 'Next',
    category: 'next',
    sort: 'Frontend',
    icon: 'next',
  },
  {
    id: 7,
    name: '실험실',
    category: 'laboratory',
    sort: 'Frontend',
    icon: 'laboratory',
  },
  {
    id: 8,
    name: 'Express',
    category: 'express',
    sort: 'Backend',
    icon: 'express',
  },
  {
    id: 9,
    name: 'Programmers',
    category: 'programmers',
    sort: 'Coding Problem',
    icon: 'programmers',
  }
];
