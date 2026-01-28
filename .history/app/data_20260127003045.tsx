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
import { title } from "process";

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

export const experiencedata = [
  {
    title: "Full Stack Mobile & Web Developer",
    heading: "Citrux Information & Technology",
    points: [
      "Working as a Full Stack Developer building scalable mobile and web applications using React Native, React.js, Next.js, and modern backend systems.",
      "Designing and developing RESTful APIs with Spring Boot and Node.js, ensuring performance, security, and maintainability.",
      "Implementing database-driven solutions using MySQL and MongoDB Atlas for real-time and large-scale data handling.",
      "Actively involved in feature planning, development, testing, and deployment across the full Software Development Life Cycle (SDLC).",
      "Collaborating with cross-functional teams in an Agile environment, contributing to production-ready features and continuous improvements.",
      "Deploying applications on AWS EC2, Elastic Beanstalk, and Vercel, with version control using Git.",
    ],
  },
  {
    title: "Software Developer Intern",
    heading: "Citrux Information & Technology",
    points: [
      "Developed responsive web and mobile interfaces using React.js and React Native, focusing on usability and performance.",
      "Built and integrated backend services using Spring Boot and Node.js, consuming and exposing REST APIs.",
      "Worked with MongoDB Atlas and MySQL for cloud-based data storage and management.",
      "Assisted in deploying applications to AWS EC2 and Elastic Beanstalk, gaining hands-on cloud experience.",
      "Contributed to UI/UX improvements, enhancing user engagement and overall experience.",
      "Gained practical exposure to Agile workflows, sprint planning, and team collaboration.",
    ],
  },
  {
    title: "Full Stack Java Developer Certification",
    heading: "iHub Innovative Solutions",
    points: [
      "Comprehensive training in Java, Spring Boot, REST APIs, frontend technologies, and database integration.",
      "Strengthened understanding of full stack architecture, backend design patterns, and real-world application development.",
    ],
  },
];

export const aboutdata = [
  {
    title: "Full Stack Mobile & Web Developer",

    content: [
      "I’m a Full Stack Mobile & Web Developer who enjoys building clean, scalable, and user-focused applications. I like working across the stack — from crafting responsive interfaces to designing reliable backend systems that grow with the product.",
      "I primarily work with React, Next.js, React Native, Node.js, and Spring Boot, along with databases like MongoDB and MySQL. I have experience deploying and managing applications using AWS EC2 and Vercel, and I use Git for version control and collaborative development. I focus on writing maintainable code, improving performance, and paying attention to UI details that make applications feel smooth and intuitive.",
      "Through internships and real-world projects, I’ve worked in Agile environments, built REST APIs, integrated databases, and delivered features used by real users. I’m always looking to learn, improve my craft, and contribute to products that solve meaningful problems.",
    ],
  },
];
