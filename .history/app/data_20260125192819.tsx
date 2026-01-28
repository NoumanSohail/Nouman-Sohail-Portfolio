import reactjs from "@/public/images/reactjs.png";
import reactnative from "@/public/images/reactnative.png"
import tailwind from "@/public/images/tailwind.png";
import node from "@/public/images/node.png";
import spring from "@/public/images/spring.png";
import mongodb from "@/public/images/mongodb.png";
import mysql from "@/public/images/mysql.png";
import sql from "@/public/images/sql.png";
import github from "@/public/images/github.png";
import nextjs from "@/public/images/nextjs.png";
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
    width: 110,
  },
  {
    img: reactnative,
    title: "React Native",
    desc: "Building user friendly cross-platform mobile applications using React Native.",
    width: 110,
  },
  {
    img: tailwind,
    title: "Tailwind CSS",
    desc: "Building modern, responsive, and visually appealing user interfaces using Tailwind CSS.",
    height: 0,
    width: 120,
  },
  {
    img: node,
    title: "Node.js",
    desc: "Developing robust backend systems and APIs powered by Node.js.",
    height: 0,
    width: 120,
  },
  {
    img: spring,
    title: "Spring Boot",
    desc: "Building robust and scalable backend applications using Spring Boot.",
    height: 0,
    width: 120,
  },
  {
    img: mongodb,
    title: "Mongo DB",
    desc: "Creating fast, scalable, and flexible database solutions for modern web applications.",
    height: 0,
    width: 120,
  },
  {
    img: mysql,
    title: "MySQL",
    desc: "Designing and managing relational databases with optimized queries and structures.",
    height: 0,
    width: 160,
  },
  {
    img: sql,
    title: "SQL",
    desc: "Writing and optimizing database queries to efficiently handle relational data.",
    height: 0,
    width: 120,
  },
  {
    img: github,
    title: "Github",
    desc: "Managing and collaborating on code repositories with version control using GitHub.",
    height: 0,
    width: 120,
  },

  // 🔹 NEW SKILLS BELOW

  {
    img: nextjs,
    title: "Next.js",
    desc: "Building high-performance, SEO-friendly full-stack React applications.",
    height: 0,
    width: 120,
  },
  {
    img: aws,
    title: "AWS (EC2)",
    desc: "Deploying, hosting, and scaling applications using AWS EC2 and core cloud services.",
    width: 120,
  },

  {
    img: vercel,
    title: "Vercel",
    desc: "Deploying and hosting Next.js applications with CI/CD and edge optimization.",
    height: 0,
    width: 120,
  },
];
