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
      "Built a real-time employee tracking system with clock-in/clock-out and client check-in/check-out.",
      "Implemented live location tracking, notifications, and a centralized admin dashboard.",
      "Improved workforce monitoring accuracy and reduced attendance discrepancies by 50%.",
    ],
  },
  {
    title: "Mediji Doctor App",
    stack: "React Native, Spring Boot, MySQL, Git",
    points: [
      "Developed a doctor-facing mobile app for appointment management and scheduling.",
      "Integrated video calls, real-time chat, QR scanning, and AI-powered features.",
      "Developed inpatient and outpatient tracking with real-time notifications for appointments.",
    ],
  },
  {
    title: "Mediji Patient App",
    stack: "React Native, Spring Boot, MySQL, Git",
    points: [
      "Built a patient mobile app for appointment booking and seamless onboarding.",
      "Implemented secure medical file uploads and document management.",
      "Enabled secure real-time communication between doctors and patients.",
    ],
  },
  {
    title: "Employee Management System",
    stack: "React.js, Spring Boot, MySQL",
    points: [
      "Developed REST APIs and frontend interfaces for employee and role management.",
      "Implemented project timeline tracking and completion monitoring for timely delivery.",
      "Reduced manual record management effort by 40% through automation.",
    ],
  },
];
