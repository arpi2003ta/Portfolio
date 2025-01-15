import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
];
  
const experiences = [
    {
      title: "AI/ML Developer",
      company_name: "CipherByte Technologies",
      icon: meta,
      iconBg: "#383E56",
      date: "December 2024 - January 2025",
      points: [
        "Developing and maintaining AI/ML models and systems using technologies like Python, TensorFlow, and PyTorch.",
        "Collaborating with data scientists, product managers, and other engineers to deliver effective AI/ML solutions.",
        "Implementing and optimizing machine learning algorithms to solve real-world problems.",
        "Participating in model reviews, providing insights, and ensuring models are scalable and efficient.",
      ],
    },
    {
      title: "Data Science",
      company_name: "CipherByte Technologies",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "December 2024 - January 2025",
      points: [
        "Developing and maintaining data pipelines and analytical models using tools like Python, R, and SQL.",
        "Collaborating with cross-functional teams, including business analysts, engineers, and product managers, to derive actionable insights.",
        "Implementing data visualization techniques and ensuring data accuracy and consistency across platforms.",
        "Participating in code reviews and providing constructive feedback on data-driven solutions and model improvements.",
      ],
    },
    {
      title: "UI/UX",
      company_name: "HITK",
      icon: shopify,
      iconBg: "#383E56",
      date: "January 2025 - Present",
      points: [
        "Designing and developing user interfaces with a focus on user experience using tools like Figma, Adobe XD, and HTML/CSS.",
        "Collaborating with product managers, developers, and designers to create intuitive and visually appealing digital experiences.",
        "Implementing responsive design principles and ensuring seamless performance across different devices and browsers.",
        "Participating in design reviews, providing feedback, and iterating on designs to improve usability and user satisfaction.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "HITK",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "February 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Chatbot",
      description:
        "The chatbot project on clean energy aims to provide users with information, resources, and guidance on sustainable energy practices. It interacts with users to educate them about renewable energy sources, energy efficiency tips.",
      tags: [
        {
          name: "NLTK",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/arpi2003ta/chatapp",
    },
    {
      name: "Waste Classifier",
      description:
        "The waste classifier project focuses on developing an AI-powered system that can automatically classify and categorize waste.Using image recognition,the system analyzes images of waste items to provide accurate classifications.",
      tags: [
        {
          name: "Tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/arpi2003ta/class",
    },
    {
      name: "Carbonfootprint",
      description:
        "By collecting data from different sources, the carbon footprint project calculates the total carbon emissions. It tracks carbon footprint, suggest strategies for carbon reduction, promote sustainable practices and fosters eco-friendly behavior.",
      tags: [
        {
          name: "Streamlit",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/arpi2003ta/carbonfootprint",
    },
];
  
export { services, technologies, experiences, testimonials, projects };