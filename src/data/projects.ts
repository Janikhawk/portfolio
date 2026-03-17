import { Project } from "@/types";
import nddaImg from "@/assets/1_NDDA.png";
import lsegImg from "@/assets/3_lseg.png";
import spirentImg from "@/assets/4_spirent.png";
import solventumImg from "@/assets/6_solventum.png";
import lidomaImg from "@/assets/7_lidoma.png";

export const projects: Project[] = [
  {
    id: "ndda",
    title: "NDDA",
    company: "National Center for Expertise",
    fullCompany:
      "National Center for Expertise of Medicines and Medical Devices (NDDA)",
    description:
      "Developed a comprehensive digital platform for the national regulatory authority overseeing medicines and medical devices in Kazakhstan. Built complex multi-step form workflows, data management dashboards, and certification pipelines handling thousands of product registrations annually.",
    stack: ["Angular", ".NET Core", "TypeScript", "RxJS", "REST APIs"],
    website: "https://www.ndda.kz/",
    industry: "Healthcare / Regulatory",
    accentColor: "#4F46E5",
    panelBg: "bg-gradient-to-br from-indigo-50 to-blue-50",
    screenshotUrl: nddaImg.src,
  },
  {
    id: "berkut",
    title: 'EIS "BERKUT"',
    company: "Government Border Control",
    fullCompany:
      'Electronic Information System "BERKUT" — Government Border Security',
    description:
      "Built an internal information system for government border control agencies. Developed data-intensive dashboards and operational interfaces for border officers managing cross-border monitoring, reporting workflows, and incident tracking at a national scale.",
    stack: ["Angular 8+", "TypeScript", "RxJS", "NgRx", "REST APIs"],
    website: null,
    industry: "Government / Security",
    accentColor: "#374151",
    panelBg: "bg-gradient-to-br from-slate-100 to-gray-100",
    screenshotUrl: null,
  },
  {
    id: "lseg",
    title: "LSEG",
    company: "London Stock Exchange Group",
    fullCompany: "London Stock Exchange Group (LSEG) — Global Financial Markets",
    description:
      "Contributed to high-performance financial data interfaces and trading tools for one of the world's largest financial infrastructure companies. Built real-time dashboards, data grids, and analytics components used by financial professionals and institutions across the globe.",
    stack: ["Angular", "Java", "TypeScript", "RxJS", "WebSockets"],
    website: "https://www.lseg.com/en",
    industry: "Finance / FinTech",
    accentColor: "#0D9488",
    panelBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    screenshotUrl: lsegImg.src,
  },
  {
    id: "spirent",
    title: "Spirent",
    company: "Spirent Communications",
    fullCompany: "Spirent Communications — Network Testing & Assurance",
    description:
      "Developed advanced web applications for network testing and performance assurance solutions. Built complex data visualization components for network analytics, test orchestration interfaces, and results management dashboards for enterprise telecoms clients.",
    stack: ["Angular", "TypeScript", "RxJS", "D3.js", "REST APIs"],
    website: "https://www.spirent.com/",
    industry: "Telecommunications",
    accentColor: "#0284C7",
    panelBg: "bg-gradient-to-br from-sky-50 to-cyan-50",
    screenshotUrl: spirentImg.src,
  },
  {
    id: "pokerstars",
    title: "PokerStars",
    company: "PokerStars / Flutter Entertainment",
    fullCompany: "PokerStars — World's Largest Online Poker Platform",
    description:
      "Worked on one of the world's largest online gaming platforms, migrating and modernizing legacy AngularJS applications to modern Angular and React. Delivered player-facing features and internal tools for millions of users across desktop and mobile platforms worldwide.",
    stack: ["AngularJS", "Angular", "React", "TypeScript", "Redux"],
    website: "https://www.pokerstars.com/",
    industry: "Gaming / Entertainment",
    accentColor: "#DC2626",
    panelBg: "bg-gradient-to-br from-red-50 to-rose-50",
    screenshotUrl: null,
  },
  {
    id: "solventum",
    title: "Solventum",
    company: "Solventum (formerly 3M Health Care)",
    fullCompany: "Solventum — Advanced Healthcare Solutions",
    description:
      "Developed cutting-edge healthcare applications for Solventum, formerly part of 3M Health Care. Built modern Angular interfaces for medical device workflows, clinical data management, and healthcare professional portals leveraging the latest Angular features and patterns.",
    stack: ["Angular 21+", "TypeScript", "RxJS", "NgRx", "REST APIs"],
    website: "https://www.solventum.com/en-us/home/",
    industry: "Healthcare Technology",
    accentColor: "#7C3AED",
    panelBg: "bg-gradient-to-br from-violet-50 to-purple-50",
    screenshotUrl: solventumImg.src,
  },
  {
    id: "lidoma",
    title: "Lidoma",
    company: "Lidoma",
    fullCompany: "Lidoma — Digital Solutions",
    description:
      "Built modern, performant web applications using the latest Angular framework. Implemented complex reusable UI component libraries, advanced state management patterns, lazy-loading strategies, and performance optimizations for a polished production experience.",
    stack: ["Angular 19+", "TypeScript", "TailwindCSS", "RxJS", "REST APIs"],
    website: "https://lidoma.com/",
    industry: "Technology",
    accentColor: "#D97706",
    panelBg: "bg-gradient-to-br from-amber-50 to-orange-50",
    screenshotUrl: lidomaImg.src,
  },
];
