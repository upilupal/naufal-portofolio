// data/projects.ts
import digidawEcommerce from "@/assets/images/digidaw-landingPage.png";

export const portfolioProjects = [
  {
    month: "September",
    year: "2024",
    title: "Digidaw E-commerce Website",
    slug: "dark-saas-landing-page",
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
];