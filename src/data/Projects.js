import project16 from "../assets/projects/project16.png";

import project27 from "../assets/projects/project27.jpg";
import project28 from "../assets/projects/project28.jpg";
import project29 from "../assets/projects/project-web3.jpg";
import project18 from "../assets/projects/project18.jpg";


import prod6 from "../assets/projects/prod6.jpg";
import prod5 from "../assets/projects/prod5.jpg";
import prod9 from "../assets/projects/prod9.png";
import prod7 from "../assets/projects/prod7.jpg";
import prod8 from "../assets/projects/prod8.png";
import prod10 from "../assets/projects/prod10.png";
import prod1 from "../assets/projects/prod1.jpg";
import prod11 from "../assets/projects/prod11.jpg";
import prod12 from "../assets/projects/prod12.jpg";
import prod13 from "../assets/projects/prod13.jpeg";
import prod14 from "../assets/projects/prod14.jpeg";
import prod15 from "../assets/projects/prod15.jpeg";
import prod17 from "../assets/projects/prod17.jpg";
import prod18 from "../assets/projects/prod18.png";
import prod19 from "../assets/projects/prod19.png";
import prod20 from "../assets/projects/prod20.png";

import signallense1 from "../assets/projects/signallens1.jpeg"
import signallense2 from "../assets/projects/signallens2.jpeg"
import signallense3 from "../assets/projects/signallens3.jpeg"
import signallense4 from "../assets/projects/signallens4.jpeg"
import signallense5 from "../assets/projects/signallens5.jpeg"
import signallense6 from "../assets/projects/signallens6.png"

import thex1 from "../assets/projects/thex1.png"
import thex2 from "../assets/projects/thex2.png"
import thex3 from "../assets/projects/thex3.png"
import thex4 from "../assets/projects/thex4.png"
import thex5 from "../assets/projects/thex5.png"




export const projects = [

{
  id: "signallens",
  title: "Cryptocurrency Intelligence Platform",
  cover: signallense4,
  images: [signallense1, signallense2, signallense3, signallense4, signallense5, signallense6],
  stack: [
    "React (Vite)",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "JWT",
    "Anthropic API",
    "CoinGecko API"
  ],
  description:
    "A production-ready cryptocurrency intelligence platform that provides real-time market data, AI-powered analysis, automated price alerts, portfolio tracking, and sentiment insights in one unified dashboard.",
  whatIDid:
    "Architected and built the full-stack system from scratch, including JWT authentication, REST API design, smart API caching with fallback logic, background price-check scheduler, AI market analysis integration, portfolio P&L engine, and fully responsive UI with optimized state management.",
  challenges: [
    "Handling CoinGecko API rate limits with smart caching and stale fallback strategy",
    "Designing a background job to monitor price alerts without external cron services",
    "Securing authentication with JWT and protected routes across the SPA",
    "Optimizing live portfolio calculations and minimizing unnecessary re-renders",
    "Deploying and managing environment variables securely across Vercel and Render"
  ],
  github: "https://github.com/elemidedaniel/signallens",
  live: "https://signallens-virid.vercel.app"
},

  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    cover: project16,
    images: [project16, prod8],
    stack: ["React", "Chart.js", "Tailwind", "Firebase"],
    description:
      "A scalable admin dashboard designed for monitoring analytics, managing users, and visualizing business performance metrics in real-time.",
    whatIDid:
      "Designed the UI system, built reusable components, implemented dynamic charts, created authentication flow, and optimized rendering performance for large datasets.",
    challenges: [
      "Handling dynamic data visualization efficiently",
      "Preventing unnecessary re-renders in chart components",
      "Creating a responsive layout for complex dashboards",
      "Improving load performance with lazy loading"
    ],
    github: "https://github.com/yourrepo/admin-dashboard",
    live: "https://admindashboard-rose-ten.vercel.app/",
  },

  {
  id: "thex",
  title: "Open Source React Component Library",
  cover: thex1,
  images: [thex1, thex2, thex3, thex4, thex5],
  stack: [
    "React (Vite)",
    "TypeScript",
    "Tailwind CSS v4",
    "Framer Motion",
    "Class Variance Authority",
    "Radix UI",
    "Storybook 10",
    "Node.js"
  ],
  description:
    "A production-grade React component library featuring 20 fully animated, accessible components built from scratch. Includes a complete design token system, WCAG 2.2 compliance, spring animations on every interaction, and live Storybook documentation with interactive playgrounds.",
  whatIDid:
    "Designed and engineered the entire library solo — from the design token system and variant architecture using CVA, to every component's animation logic with Framer Motion, TypeScript interfaces, accessibility implementation, and Storybook documentation. Built and deployed both the showcase site and the interactive docs site.",
  challenges: [
    "Architecting a scalable variant system using CVA that supports flat, glass, and neumorphic styles across all components",
    "Implementing smooth height animations for Accordion and AnimatePresence transitions without layout shift",
    "Building a smart Tooltip with dynamic positioning that adapts to viewport edges across all four placements",
    "Resolving Storybook 10 and peer dependency conflicts across the monorepo build pipeline",
    "Ensuring full WCAG 2.2 compliance with keyboard navigation, ARIA attributes, and focus management across all 20 components"
  ],
  github: "https://github.com/elemidedaniel/thex",
  live: "https://thex-uw4j.vercel.app"
},

  {
    id: "e-commerce-website",
    title: "E-Commerce Website",
    cover: prod6,
    images: [prod5, prod1, prod9, prod10],
    stack: ["React", "Context API", "Stripe", "Tailwind"],
    description:
      "A modern e-commerce platform with product browsing, cart system, and checkout integration.",
    whatIDid:
      "Developed the product filtering logic, implemented cart state management, integrated payment gateway, and optimized mobile responsiveness.",
    challenges: [
      "Managing global cart state efficiently",
      "Handling payment integration securely",
      "Optimizing image-heavy product pages",
      "Ensuring smooth checkout flow"
    ],
    github: "https://github.com/yourrepo/e-commerce-website",
    live: "https://nextek-frontend-g1j4.vercel.app/",
  },
  {
  id: "home-care-landing",
  title: "Home Care Services Website",
  cover: prod18,
  images: [ prod19,prod20, prod17],
  stack: ["React", "TailwindCSS", "Framer Motion"],
  description:
    "A modern and responsive landing page for a home care service, designed to build trust, present services clearly, and encourage families to make contact easily.",
  whatIDid:
    "Designed and developed the full landing page UI, built reusable sections such as Services, Why Choose Us, Contact, and CTA, implemented smooth animations with Framer Motion, embedded a Google Map, and structured the layout for strong conversion and readability.",
  challenges: [
    "Creating a calm and professional visual style suitable for healthcare services",
    "Structuring sections to guide users naturally toward contacting the business",
    "Balancing animations and performance for a smooth experience"
  ],
  github: "",
  live: "https://your-live-site-link.com",
},

  {
    id: "expense-tracker",
    title: "Expense Tracker",
    cover: prod15,
    images: [prod14, prod13],
    stack: ["React", "LocalStorage", "Chart.js"],
    description:
      "A personal finance tracking application that allows users to log, categorize, and visualize expenses.",
    whatIDid:
      "Built the transaction logic, implemented persistent local storage, created analytics charts, and structured a clean UI for quick data input, also a currency change button.",
    challenges: [
      "Ensuring accurate state persistence",
      "Optimizing real-time data updates",
      "Designing intuitive financial charts"
    ],
    github: "https://github.com/yourrepo/expense-tracker",
    live: "https://expense-tracker-fawn-one.vercel.app/",
  },

  {
    id: "appointment-booking-website",
    title: "Appointment Booking Website",
    cover: project28,
    images: [prod7, project28, project27],
    stack: ["React", "Calendar API", "Tailwind"],
    description:
      "A booking system allowing users to schedule appointments with real-time availability and confirmation flow.",
    whatIDid:
      "Implemented time-slot logic, handled booking conflicts, built calendar integration, and optimized user confirmation flow.",
    challenges: [
      "Preventing double bookings",
      "Handling timezone logic",
      "Building an intuitive scheduling interface"
    ],
    github: "https://github.com/yourrepo/appointment-booking",
    live: "https://expense-tracker-fawn-one.vercel.app/",
  },

  {
    id: "3D-implementation-landing-page",
    title: "3D Implementation Landing Page",
    cover: prod12,
    images: [prod12, project18],
    stack: ["React", "Three.js", "Framer Motion"],
    description:
      "A visually immersive landing page integrating interactive 3D elements with smooth animations.",
    whatIDid:
      "Integrated Three.js scenes, optimized render performance, created scroll-triggered animation flow, and structured immersive storytelling sections.",
    challenges: [
      "Optimizing WebGL performance",
      "Balancing animation smoothness with load speed",
      "Maintaining responsiveness across devices"
    ],
    github: "https://github.com/yourrepo/3d-landing",
    live: "https://admindashboard-rose-ten.vercel.app/",
  },

  {
    id: "project-management",
    title: "Project Management WebApp",
    cover: project29,
    images: [project29, prod11],
    stack: ["React", "Firebase", "Drag & Drop API"],
    description:
      "A collaborative project management tool with task assignment and progress tracking.",
    whatIDid:
      "Built drag-and-drop task system, implemented real-time updates, structured modular component architecture, and optimized task filtering logic.",
    challenges: [
      "Managing real-time updates",
      "Handling drag-and-drop edge cases",
      "Ensuring performance with large task lists"
    ],
    github: "https://github.com/yourrepo/project-management",
    live: "https://expense-tracker-fawn-one.vercel.app/",
  },
];