// config/template3Config.ts

const template3Config = {
  id: "template-modern",
  name: "Minimal Modern",
  thumbnail: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  components: ["navbar", "hero", "about", "experience", "project", "contact", "footer"],

  navbar: {
    logoText: "MinimalMe",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    title: "Hi, I'm Alex 👋",
    subtitle: "A creative frontend developer who loves minimal design.",
    
  },

  about: {
  heading: "About Me",
  paragraphs: [
    "I love building scalable products and intuitive UIs.",
    "I focus on frontend development using React and backend APIs with Node.js or Spring Boot.",
  ],
  buttonText: "Download Resume",
}
,

  experience: [
    {
      company: "Minimal Inc.",
      role: "Frontend Developer",
      duration: "2022 - Present",
      description: "Worked on minimalist web applications using React and Tailwind CSS.",
    },
    {
      company: "Sleek Studios",
      role: "UI Intern",
      duration: "2021 - 2022",
      description: "Assisted in building responsive landing pages with modern UI libraries.",
    },
  ],

  project: [
    {
      title: "Cleanfolio",
      description: "A no-fuss portfolio builder with minimalistic design philosophy.",
      imageUrl: "/images/cleanfolio.png",
      link: "/projects/cleanfolio",
    },
    {
      title: "DarkMode.js",
      description: "Lightweight JavaScript library to auto-toggle dark mode.",
      imageUrl: "/images/darkmode.png",
      link: "/projects/darkmode-js",
    },
  ],

  contact: {
    email: "alex@minimalme.dev",
    message: "Let’s build something beautifully simple together.",
  },

  footer: {
    copyright: "© 2025 Alex",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    
    socialLinks: [
        { label: "GitHub", href: "https://github.com/johndoe", icon: "github" },
        { label: "LinkedIn", href: "https://linkedin.com/in/johndoe", icon: "linkedin" },
        { label: "Email", href: "mailto:john@example.com", icon: "mail" },
      ],

   
  },
};

export default template3Config;
