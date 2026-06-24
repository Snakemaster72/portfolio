export interface Project {
  title: string;
  description: string;
  stack: string[];
  links: { label: string; url: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    // TODO: confirm title and description wording
    title: "Turbotyping",
    description:
      "A real-time typing-speed platform where users race, track personal records, and compete on live leaderboards.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux", "JWT", "Socket.io"],
    links: [
      // TODO: confirm — replace # with real URLs
      { label: "GitHub", url: "https://github.com/Snakemaster72/turbotyping-fullstack" },
    ],
    featured: true,
  },
  // {
  //   // TODO: confirm title and description wording
  //   title: "PropBot UAE",
  //   description:
  //     "A WhatsApp AI bot that qualifies and converts real-estate leads, built on a FastAPI + LangGraph + Groq stack sitting in front of an existing .NET backend.",
  //   stack: ["FastAPI", "LangGraph", "Groq", ".NET", "WhatsApp Business API"],
  //   links: [
  //     // TODO: confirm — replace # with real URL or remove if private
  //     { label: "GitHub", url: "https://github.com/snakemaster72/propbot-uae" },
  //   ],
  //   featured: true,
  // },
  // {
  //   // TODO: confirm title and description wording
  //   title: "Productivity Web App",
  //   description:
  //     "A task and habit tracker with a React + Vite frontend and an Express API backed by Turso (libSQL), deployed on Railway.",
  //   stack: ["React", "Vite", "Express", "Turso", "Railway"],
  //   links: [
  //     // TODO: confirm — replace # with real URLs
  //     { label: "GitHub", url: "https://github.com/snakemaster72/productivity-app" },
  //   ],
  //   featured: false,
  // },
];
