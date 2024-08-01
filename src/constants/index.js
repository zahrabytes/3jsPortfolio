import {
    mobile,
    machinelearning,
    gamedev,
    embedded,
    fullstack,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    autocad,
    cpp,
    csharp,
    mysql,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    baylor,
    uh,
    synth,
    tesla,
    shopify,
    carrent,
    synthdisplay,
    stellarscholarsdisplay,
    ricedisplay,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning",
      icon: machinelearning,
    },
    {
      title: "Fullstack Development",
      icon: fullstack,
    },
    {
      title: "Embedded Systems",
      icon: embedded,
    },
    {
      title: "Game Development",
      icon: gamedev,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "AutoCAD",
      icon: autocad,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Intern",
      company_name: "Baylor College of Medicine",
      icon: baylor,
      iconBg: "#383E56",
      date: "Jun 2024 - Aug 2024",
      points: [
        "Engineered web applications using C#, ASP.NET, Razor Pages, to streamline data management in medical research, conducting 3 code reviews to maintain high-quality standards.",
        "Constructed a robust SQL database, enhancing retrieval speed by 40% and reducing redundancy by 25%.",
      ],
    },
    {
      title: "Operating Systems Teaching Assistant",
      company_name: "University of Houston",
      icon: uh,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - May 2024",
      points: [
        "Guided a class of 400 students with topics including process and memory management, and concurrency",
        "Critiqued 100s of student C++ program submissions, providing feedback to enhance efficiency.",
      ],
    },
    {
      title: "Fullstack Development Team Lead",
      company_name: "Synth",
      icon: synth,
      iconBg: "#383E56",
      date: "Jan 2024 - Apr 2024",
      points: [
        "Managed a team of 4 on a fullstack project, leading the deployment and scaling of the application on AWS.",
        "Built SQL database for storing user information, utilizing Google Storage API and Multer for the seamless uploading of 100s of tracks.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Synth",
      description:
        "Web-based platform that allows users to search, play, save, and post songs and albums. Contains different user roles such as artist, listener, and admin.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "googlestorageapi",
          color: "pink-text-gradient",
        },
      ],
      image: synthdisplay,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: stellarscholarsdisplay,
      source_code_link: "https://github.com/zahrabytes/Frontend-Synth",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ricedisplay,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };