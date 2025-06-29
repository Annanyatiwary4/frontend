const template2Config = {
  id: "template-minimal",
  name: "Elegant Dark",
  thumbnail:
    "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  components: ["navbar", "hero", "about", "project", "contact", "footer"],

  navbar: {
    logoText: "Jane Doe",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    title: "Hi, I'm Jane 🚀",
    subtitle: "A passionate developer turning ideas into interactive web apps.",
    ctaPrimary: {
      label: "See Projects",
      href: "#projects",
    },
    ctaSecondary: {
      label: "Contact Me",
      href: "#contact",
    },
  },

  about: {
    heading: "About Me",
    content: [
      "I am a passionate web developer with a knack for building beautiful and functional user experiences.",
      "With experience in React, Node.js, and design tools, I strive to craft impactful digital products.",
    ],
  },

  project: {
    heading: "Projects",
    items: [
      {
        title: "Notedly",
        description: "A note-taking app with markdown support and cloud sync.",
        imageUrl: "/images/notedly.png",
        link: "/projects/notedly",
      },
      {
        title: "DevJobs",
        description: "A job board for developers with skill-based search.",
        imageUrl: "/images/devjobs.png",
        link: "/projects/devjobs",
      },
    ],
  },

  contact: {
    heading: "Contact",
    message: "Looking to collaborate on something exciting? Drop a message!",
    email: "jane@example.com",
  },

  footer: {
    copyright: "© 2025 Jane",
    links: [
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/janedoe",
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/janedoe",
        icon: "linkedin",
      },
    ],
  },
};

export default template2Config;
