import {
  logo,
  machinelearning,
  synthdisplay,
  stellarscholarsdisplay,
  ricedisplay,
  gamedev,
  embedded,
  fullstack,
  github,
  menu,
  close,
  css,
  autocad,
  cpp,
  csharp,
  mysql,
  python,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  threejs,
  baylor,
  synth,
  uh,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "work",
      title: "Projects",
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
        "I've seen how hard Zahra works, and if she sets a goal, she'll always find a way to accomplish it. She's very adaptive and works well with whatever situation she's in. Also, she's a great friend and a wonderful person to have around.",
      name: "John Cruz",
      designation: "Project lead and close friend",
      company: "UH",
      image: "https://i.postimg.cc/NG3G5CgL/john.jpg",
    },
    {
      testimonial:
        "If dedication had a name, it would be Zahra. Her passion for coding is unmatched – you'll find her at her computer until 4 AM. Ask her what she’s doing and the answer will always be the same: 'I'm coding.' When she’s not coding, she’s sleeping, but she's dreaming in code. In all my years in computer science, I've never met anyone more committed to the craft. Zahra quite literally breathes code.",
      name: "Jean Peanso",
      designation: "Project partner and close friend",
      company: "UH",
      image: "https://i.postimg.cc/85rQGDf4/jean.jpg",
    },
    {
      testimonial:
        "During our internship, Zahra showed exceptional teamwork and problem-solving skills. Her dedication and eagerness to learn, along with her positive attitude, made her an outstanding colleague.",
      name: "Mustafa Sahin",
      designation: "Colleague",
      company: "Baylor College of Medicine",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHrGNt8S3x1pw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680758529127?e=1727913600&v=beta&t=ESaIdanLe4LPVuTCNcy5rayNCN1bzr3n-wTAGoaYjvU",
    },
    {
      testimonial:
        "Zahra is determined and hardworking. She has patience to teach others.",
      name: "Maximillian Chalitsios",
      designation: "Data Engineer",
      company: "EOG",
      image: "https://media.licdn.com/dms/image/C4E03AQF4wTTEmBWWFg/profile-displayphoto-shrink_800_800/0/1642799575832?e=1728518400&v=beta&t=j2CyuTjdv4tygZBZkeJHAJeMpjDA24QPlQ9l8lIdp3o",
    },
  ];
  
  const projects = [
    {
      name: "Synth",
      description:
        "Web-based music library platform that allows users to search, play, save, and post songs and albums. Contains different user roles such as artist, listener, and admin.",
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
      source_code_link: "https://github.com/zahrabytes/Frontend-Synth/",
    },
    {
      name: "Stellar Scholars",
      description:
        "Web-based gamified educational platform about the solar system, won 4 awards at TAMU X HACK. Uses Pixi.js to create rocket exploration of 8 planets, as well as an educational AI chatbot.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "pixijs",
          color: "green-text-gradient",
        },
        {
          name: "cloudflare",
          color: "pink-text-gradient",
        },
      ],
      image: stellarscholarsdisplay,
      source_code_link: "https://github.com/brohudev/stellar-scholar/",
    },
    {
      name: "Peak Oil Rate Prediction Model",
      description:
        "Peak oil rate prediction model using Python and machine learning, won an award at Rice Datathon.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "starknet",
          color: "green-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
      ],
      image: ricedisplay,
      source_code_link: "https://github.com/zahrabytes/Rice-Datathon-2024",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };