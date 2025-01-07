// data/projects.ts
import digidawEcommerce from "@/assets/images/digidaw-landingPage.png";
import saasLandingPage from '@/assets/images/saas-landing-page-thumbnail.png';

export const portfolioProjects = [
  {
    month: "September",
    year: "2024",
    title: "Digidaw E-commerce Website",
    slug: "digidaw-ecommerce-website",
    description: "Digidaw is an e-commerce platform built with Next.js, designed to help you seamlessly launch your products into the online marketplace, attracting more customers to your store. The website integrates the Midtrans payment gateway for a smooth and secure transaction experience, and it also implements OAuth authentication via GitHub and Google to provide users with quick and easy access.",
    stack: [
      { title: "NextJs" },
      { title: "Typescript" },
      { title: "Tailwind" },
      { title: "Next Auth" },
      { title: "MongoDB" },
      { title: "Prisma" },
    ],
    link: "https://digidaw-store.vercel.app/",
    image: digidawEcommerce,
  },
  {
    month: "January",
    year: "2025",
    title: "Saas Landing Page",
    slug: "saas-landing-page",
    description: "This landing page is build using next js and typescript. I build this website to improve my skill in building landing page with slightly beautiful animation using framer motion. If you feel interest in build landing page, you can contact me through my email 😁.",
    stack: [
      { title: "NextJs" },
      { title: "Typescript" },
      { title: "Tailwind" },
      { title: "Framer motion" },
    ],
    link: "https://layers-landing-page-naufal.vercel.app/",
    image: saasLandingPage,
  },

];