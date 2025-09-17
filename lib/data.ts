
import todoImg from '@/public/todo.png'
import tripImg from '@/public/trip.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name:  "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const about = "Hello I'am front-end developer with 1 years of Experience. I enjoy building sites & apps. my focus is React-(NextJs)"



export const projectsData = [
  {
    title: "Todo",
    description:
      "It’s a todo / task-management board web app: users can sign in / register, create and manage tasks (“todos”) in a board-style layout.",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "AuthJs"],
    imageUrl: todoImg,
    href: 'https://todo-blue-eta.vercel.app/'
  },
  {
    title: "Travel App",
    description:
      "This is a travel planning web app It allows photo uploads and color-coded notes for organizing trips. The app has a clean design and helps users easily manage",
    tags: ["React", "Next.js", "Tailwind", "Uploadthings", "Shadcn-ui"],
    imageUrl: tripImg,
    href: 'https://travel-lovat-sigma.vercel.app/'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Mysql",
  "Zustand",
  "Express",
  "Better Auth",
  "Framer Motion",
] as const;