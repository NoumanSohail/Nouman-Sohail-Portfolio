import reactjs from "@/public/images/reactjs.png";
import reactnative from "@/public/images/reactnative.png";
import nextjs from "@/public/images/nextjs.png";
import tailwind from "@/public/images/tailwind.png";
import nodejs from "@/public/images/nodejs.png";
import spring from "@/public/images/spring.png";
import mongodb from "@/public/images/mongodb.png";
import mysql from "@/public/images/mysql.png";
import sql from "@/public/images/sql.png";
import github from "@/public/images/github.png";
import vercel from "@/public/images/vercel.png";
import aws from "@/public/images/aws.png";

export const navLinks = [
  { name: "Home", id: "/#home" },
  { name: "Skills", id: "/#skills" },
  { name: "Projects", id: "/#projects" },
  { name: "Experience", id: "/#experience" },
  { name: "About", id: "/#about" },
];

export const personaldetails = {
  name: "Mohammad Nouman Sohail",
  role: "Full Stack Mobile & Web Developer",
  tagline: "Building scalable mobile & web experiences",
  statement:
    "with clean architecture and performance in mind. I turn ideas into reliable, user-centric products using modern frontend frameworks and robust backends, crafted to grow, adapt, and last.",
};

export const skillsData = [
  {
    img: reactjs,
    title: "React.js",
    desc: "Building dynamic, component-driven web applications using React.js.",
    width: 120,
  },
  {
    img: reactnative,
    title: "React Native",
    desc: "Building user friendly cross-platform mobile applications using React Native.",
    width: 120,
  },
  {
    img: nextjs,
    title: "Next.js",
    desc: "Building high-performance, SEO-friendly full-stack React applications.",
    width: 120,
  },
  {
    img: tailwind,
    title: "Tailwind CSS",
    desc: "Building modern, responsive, and visually appealing user interfaces using Tailwind CSS.",
    width: 120,
  },
  {
    img: nodejs,
    title: "Node.js",
    desc: "Developing robust backend systems and APIs powered by Node.js.",
    width: 120,
  },
  {
    img: spring,
    title: "Spring Boot",
    desc: "Building robust and scalable backend applications using Spring Boot.",
    width: 120,
  },
  {
    img: mongodb,
    title: "Mongo DB",
    desc: "Creating fast, scalable, and flexible database solutions for modern web applications.",
    width: 120,
  },
  {
    img: mysql,
    title: "MySQL",
    desc: "Designing and managing relational databases with optimized queries.",
    width: 120,
  },
  {
    img: sql,
    title: "SQL",
    desc: "Writing and optimizing database queries to efficiently handle relational data.",
    width: 120,
  },
  {
    img: github,
    title: "Github",
    desc: "Managing and collaborating on code repositories with version control using GitHub.",
    width: 120,
  },
  {
    img: vercel,
    title: "Vercel",
    desc: "Deploying and hosting Next.js applications with CI/CD and edge optimization.",
    width: 120,
  },
  {
    img: aws,
    title: "AWS (EC2)",
    desc: "Deploying, hosting, and scaling applications using AWS EC2 and core cloud services.",
    width: 120,
  },
];

export const projectsData = [
  {
    title: "OnDuty Employee Tracking System",
    stack: "Next.js, React Native, Node.js, MongoDB Atlas, AWS EC2",
    points: [
      "Real-time employee tracking with clock-in/clock-out and client check-in/check-out.",
      "Live location tracking, notifications, and admin dashboard.",
      "Reduced attendance discrepancies by 50%.",
    ],
  },
  {
    title: "Mediji Doctor App",
    stack: "React Native, Spring Boot, MySQL, Git",
    points: [
      "Doctor-facing app with appointment management and schedules.",
      "Video calls, real-time chat, QR scanning, and AI-powered features.",
      "Inpatient and outpatient tracking with push notifications.",
    ],
  },
  {
    title: "Mediji Patient App",
    stack: "React Native, Spring Boot, MySQL, Git",
    points: [
      "Patient-side app for booking appointments and onboarding.",
      "Medical file uploads and secure doctor–patient communication.",
    ],
  },
  {
    title: "Employee Management System",
    stack: "React.js, Spring Boot, MySQL",
    points: [
      "Managed employees, roles, and project timelines.",
      "REST APIs and frontend interfaces.",
      "Reduced manual record management effort by 40%.",
    ],
  },
];
