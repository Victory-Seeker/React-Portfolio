// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Education Section Logo's
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import quizApp from './assets/work_logo/quiz_app.png';
import calLogo from './assets/work_logo/calculator.png';
import chatApp from './assets/work_logo/chat_app.png';
import portfolioLogo from './assets/work_logo/portfolio.png';
import geminiClone from './assets/work_logo/gemini_clone.png';
import DreamPixels from './assets/work_logo/DreamPixels.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo }
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    
    {
      id: 0,
      img: bsaLogo,
      school: "Jalpaiguri Government Enginering College",
      date: "Sept 2023 - Aug 2027",
      grade: "9.39",
      desc: "I am pursuing my Bachelor's degree in Computer Science and Engineering (B.Tech.) from Jalpaiguri Government Enginering College. Throughout my studies, I am immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Technology - BTech (Computer Science and Engineering)"
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Kapsit High School (H.S)",
      date: "Apr 2022 - March 2023",
      grade: "98.69%",
      desc: "I completed my class 12 education from Kapsit High School, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "WBCHSE(XII) - PCM",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Kapsit High School (H.S)",
      date: "Apr 2020 - March 2021",
      grade: "99.14%",
      desc: "I completed my class 10 education from Kapsit High School, under the WBBSE board, where I studied Science.",
      degree: "WBBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "TalkHive",
      description:
        "TalkHive is a real-time messaging platform that allows users to seamlessly chat with each other. Built with a full stack architecture, it features secure user authentication using JWT, real-time communication powered by Socket.IO, and a responsive front-end developed with React. Users can log in, log out, and interact in real-time, with messages updating instantly across clients.",
      image: chatApp,
      tags: ["JavaScript", "React JS", "Node JS", "Express JS", "Socket.io", "JWT", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Victory-Seeker/TalkHive",
      webapp: "https://quick-chat-ecru.vercel.app/login",
    },

    {
      id: 1,
      title: "DreamPixels",
      description:
        "DreamPixels is a full-stack Text-to-Image Generator web application that enables users to create AI-powered images using the ClipDrop API, secured with JWT authentication and credit-based access. The frontend, built with React.js, Tailwind CSS, and Framer Motion, delivers a smooth, animated user experience, while the backend uses Node.js, Express.js, MongoDB, and Razorpay for secure payments and robust API handling.",
      image: DreamPixels,
      tags: ["JavaScript", "React JS", "Node JS", "Express JS", "JWT", "MongoDB", "Tailwind CSS" , "Framer Motion", "Razorpay", "ClipDrop API"],
      github: "https://github.com/Victory-Seeker/DreamPixels",
      webapp: "https://dream-pixels-8rjq.vercel.app/",
    },

    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "A fully responsive and modern portfolio website showcasing my skills, projects, education. Built using React and Tailwind CSS, it reflects my expertise in frontend development and UI/UX design. The site features smooth animations and a clean layout to provide a seamless browsing experience.",
      image: portfolioLogo,
      tags: ["React JS",  "HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/Victory-Seeker/QuickChat",
      webapp: "https://quick-chat-ecru.vercel.app/login",
    },

    {
      id: 3,
      title: "Gemini Clone",
      description:
        "A functional clone of Google’s Gemini chatbot, built using the Gemini free API. This real-time AI assistant mimics conversational capabilities, enabling users to ask questions, get contextual responses, and interact just like a smart AI chatbot. The project demonstrates integration with external APIs and real-time user input handling with a clean, minimal UI.",
      image: geminiClone,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Tailwind CSS"],

      github: "https://github.com/Victory-Seeker/Gemini-Clone",
      webapp: "https://gemini-clone-swart-nu.vercel.app/",
    },
    {
      id: 4,
      title: "Trivia Quiz App",
      description:
        "An interactive quiz application that fetches questions dynamically from the Open Trivia Database API (OpenTDB). Users can test their knowledge across various categories and difficulty levels, receiving immediate feedback for each question. The app ensures a smooth user experience with intuitive design and seamless API integration.",
      image: quizApp,
      tags: ["HTML","CSS","JavaScript","Responsive Design","OpenTDB API"],
      github: "https://github.com/Victory-Seeker/Trivia-Quiz-App",
      webapp: "https://trivia-quiz-app-hazel.vercel.app/",
    },
    {
      id: 5,
      title: "Scientific Calculator",
      description:
        "A powerful and intuitive scientific calculator application designed to perform a wide range of complex mathematical operations beyond basic arithmetic. Users can compute trigonometric functions like sin, cos, tan, logarithmic calculations, exponentials, and more—all in a sleek and responsive interface.",
      image: calLogo,
      tags: ["HTML","CSS","JavaScript"],
      github: "https://github.com/Victory-Seeker/Scientific-Calculator-App",
      webapp: "https://scientific-calculator-app-woad.vercel.app/",
    }
  ];  