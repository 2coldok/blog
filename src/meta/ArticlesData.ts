import { FaReact } from "react-icons/fa"; // 리액트
import { RiJavascriptFill } from "react-icons/ri"; // 자바스크립트
import { BiLogoTypescript } from "react-icons/bi"; // 타입스크립트
import { SiCsswizardry } from "react-icons/si"; // css
import { TbBrandNextjs } from "react-icons/tb"; // nextjs
import { SiJest } from "react-icons/si"; // jset
import { GiFireBottle } from "react-icons/gi"; // 실험실
import { FaNodeJs } from "react-icons/fa"; // express

export const iconMapping = {
  react: FaReact,
  javascript: RiJavascriptFill,
  typescript: BiLogoTypescript,
  css: SiCsswizardry,
  next: TbBrandNextjs,
  jest: SiJest,
  laboratory: GiFireBottle,
  express: FaNodeJs,
};

interface IArticleData {
  id: number;
  name: string;
  category: string;
  sort: string;
  icon: keyof typeof iconMapping;
}

// 이 순서대로 메뉴바에서 sort 됨.
export const ArticleSortData = ['frontend', 'backend'];

export const ArticlesData: IArticleData[] = [
  {
    id: 1,
    name: 'React',
    category: 'react',
    sort: 'frontend',
    icon: 'react',
  },
  {
    id: 2,
    name: 'TypeScript',
    category: 'typescript',
    sort: 'frontend',
    icon: 'typescript',
  },
  {
    id: 3,
    name: 'JavaScript',
    category: 'javascript',
    sort: 'frontend',
    icon: 'javascript',
  },
  {
    id: 4,
    name: 'Jest',
    category: 'jest',
    sort: 'frontend',
    icon: 'jest',
  },
  {
    id: 5,
    name: 'CSS',
    category: 'css',
    sort: 'frontend',
    icon: 'css',
  },
  {
    id: 6,
    name: 'Next',
    category: 'next',
    sort: 'frontend',
    icon: 'next',
  },
  {
    id: 7,
    name: '실험실',
    category: 'laboratory',
    sort: 'frontend',
    icon: 'laboratory',
  },
  {
    id: 8,
    name: 'Express',
    category: 'express',
    sort: 'backend',
    icon: 'express',
  }
];
