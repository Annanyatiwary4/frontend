// config/template1Config.ts

const template1Config = {
  id: "template-simple",
  name: "Creative Grid",
  thumbnail: "src/assets/images/t2.png",

  components: ["navbar", "hero", "about", "experience", "project", "contact", "footer"],

  navbar: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    logoText: "John Doe",
  },

 hero: {
  title: "Hey, I'm John 👋", 
  subtitle: "I design and develop modern web applications.",
  ctaPrimary: "Check My Work", 
  ctaSecondary: "Contact Me",  },

 about: {
  heading: "About Me",
  paragraphs: [
    "I'm a full-stack developer with a passion for crafting scalable solutions and engaging user experiences.",
    "Our vision is to empower developers to build beautiful portfolios effortlessly.",
    "Our mission is to provide the most intuitive and flexible portfolio builder in the industry.",
  ],
},


  experience: [
    {
      company: "TechNova Inc.",
      position: "Frontend Developer",
      duration: "Jan 2023 - Present",
      description: "Built interactive UI components and optimized performance for large-scale web apps.",
    },
    {
      company: "DevSolutions",
      position: "Web Intern",
      duration: "Jun 2022 - Dec 2022",
      description: "Contributed to internal tools and maintained client dashboards.",
    },
  ],

  project: [
    {
      title: "Taskify",
      description: "A task management tool for teams with real-time collaboration.",
      imageUrl: "/images/taskify.png",
      link: "/projects/taskify",
    },
    {
      title: "FitTrack",
      description: "A fitness tracking web app with personalized recommendations.",
      imageUrl: "/images/fittrack.png",
      link: "/projects/fittrack",
    },
  ],

  contact: {
    email: "john@example.com",
    message: "Feel free to reach out for collaborations or project inquiries.",
  },

  footer: {
    copyright: "© 2025 John Doe",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    socialLinks: [
      { label: "GitHub", href: "https://github.com/johndoe", icon: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/johndoe", icon: "linkedin" },
    ],
  },
};

export default template1Config;
