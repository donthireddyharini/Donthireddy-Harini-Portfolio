export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
  featured: boolean;
  period: string;
  status?: string;
  imageUrl?: string;
  imagePosition?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
  certificate?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  cgpa: string;
  honors?: string;
  focus?: string;
}

export const PORTFOLIO_DATA = {
  name: "Harini Donthireddy",
  handle: "@donthireddyharini",
  title: "Software Engineer & Problem Solver",
  bio: "Software Engineer specializing in full-stack web applications, interactive algorithms visualizers, and multimodal AI architectures.",
  summary: "Computer Science student focused on Software Engineering, AI, and problem-solving, with hands-on experience building interactive DSA and multimodal AI applications. Strong foundation in DSA, OOP, Java, JavaScript, Node.js, databases, and modern web technologies, backed by real-world software engineering internship experience. A builder-oriented learner who combines technical curiosity, disciplined execution, and competitive excellence to create practical and impactful solutions.",
  email: "donthireddyharini@gmail.com",
  mobile: "+91 9390599084",
  github: "https://github.com/donthireddyharini",
  linkedin: "https://www.linkedin.com/in/harini-donthireddy",
  skills: [
    { category: "Languages", items: ["C++", "Java", "HTML5", "CSS3", "JavaScript"] },
    { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "NumPy", "Pandas", "Matplotlib"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "SQLite"] },
    { category: "Cloud & DevOps", items: ["Vercel", "Railway", "Render", "AWS concepts"] },
    { category: "Developer Tools", items: ["VS Code", "Git", "GitHub", "Antigravity"] },
    { category: "AI & LLMs", items: ["Claude", "ChatGPT", "Gemini", "Groq API", "Llama 3.3"] },
    { category: "Core Subjects", items: ["Computer Networks", "Operating Systems", "Data Structures & Algorithms", "OOP"] },
    { category: "Soft Skills", items: ["Problem-Solving", "Team Collaboration", "Intellectual Curiosity"] }
  ],
  educationList: [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology in Computer Science",
      period: "Aug 2025 – Present",
      cgpa: "CGPA: 7.95"
    },
    {
      institution: "Loyola Polytechnic College",
      location: "Andhra Pradesh, India",
      degree: "Diploma (Computer Science and Engineering)",
      period: "Aug 2022 – May 2025",
      cgpa: "CGPA: 8.81"
    }
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University",
    honors: "CGPA: 7.95",
    focus: "Data Structures, Algorithms, Computer Networks, Operating Systems, OOP"
  },
  internship: [
    {
      role: "Software Engineering Intern",
      company: "GND Solutions Pvt Limited",
      period: "Nov 2024 – May 2025",
      achievements: [
        "Engineered software solutions using JavaScript, applying core programming principles and structured problem-solving practices to strengthen development proficiency in real-world engineering workflows.",
        "Developed and refined web application components with React.js, translating software requirements into modular, maintainable interfaces while building practical experience with modern frontend engineering.",
        "Applied AWS concepts alongside JavaScript and React.js development, strengthening end-to-end understanding of cloud-enabled software engineering and preparing solutions for scalable application environments."
      ]
    }
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      company: "GND Solutions Pvt Limited",
      period: "Nov 2024 – May 2025",
      location: "Bengaluru, India",
      achievements: [
        "Engineered software solutions using JavaScript, applying core programming principles and structured problem-solving practices.",
        "Developed and refined web application components with React.js into modular, maintainable interfaces.",
        "Applied AWS concepts alongside JavaScript and React.js development for scalable cloud environments."
      ]
    }
  ],
  projects: [
    {
      id: "dsa-legends",
      title: "DSA Legends – DSA Learning Game",
      category: "Gamified EdTech & Algorithm Visualizer",
      period: "Jun 2026 – Jul 2026",
      status: "Live on Vercel",
      description: "A browser-based DSA learning game making algorithmic concepts engaging across 7 progressive worlds (Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs) featuring interactive step-by-step canvas visualizations and verified Java implementations.",
      highlights: [
        "Structured 7 progressive worlds with Roadmap → Missions → Boss → Quiz learning loops.",
        "Implemented step-by-step Canvas visualizations alongside independently compiled Java reference implementations for core operations (searching, sorting, traversal, BFS, DFS, Dijkstra, postfix evaluation, pointer-based linked-list).",
        "Integrated gamification and persistent progress through timed boss battles, scenario-based quizzes, XP/coins, powers, ~24 achievements, leaderboard, learning journal, and browser localStorage.",
        "Zero-build web application deployed on Vercel."
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Java", "HTML Canvas API", "Web Audio API", "LocalStorage", "Vercel"],
      repoUrl: "https://github.com/donthireddyharini/DSA-Learning-Game.git",
      demoUrl: "https://dsa-legends.vercel.app/",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      imagePosition: "center center"
    },
    {
      id: "litmind",
      title: "LitMind – AI-Powered Literature Tutor",
      category: "Multimodal AI & Full-Stack Application",
      period: "Jan 2026 – May 2026",
      status: "Live on Render",
      description: "An AI literature tutor that analyses themes, symbolism, narrative techniques, poetry, and literary concepts through conversational, context-aware assistance powered by Llama 3.3 models via Groq.",
      highlights: [
        "Built a full-stack conversational system with Node.js, Express.js, SQLite, and session management with persistent chat histories and Google OAuth authentication.",
        "Integrated multimodal interactions: voice input, image uploads, Markdown-rendered responses, topic-driven prompts, and adaptive model selection.",
        "Deployed on Render with responsive real-time streaming AI assistance."
      ],
      techStack: ["Node.js", "Express.js", "JavaScript", "SQLite", "Groq API", "Llama 3.3", "Passport.js", "Render"],
      repoUrl: "https://github.com/donthireddyharini/AI-Literature-Tutor.git",
      demoUrl: "https://ai-literature-tutor.onrender.com",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
      imagePosition: "center center"
    },
    {
      id: "agro-price",
      title: "Agro Price Predictor – ML Agricultural Intelligence",
      category: "Machine Learning & Predictive Modeling",
      period: "2025",
      status: "ML v1.0",
      description: "ML-powered modal price prediction platform across 205 agricultural commodities and 26 Indian states, leveraging Random Forest regression to provide farmers and traders with real-time forecasting.",
      highlights: [
        "Trained Random Forest regressor on 5,947 samples achieving a 99.76% model accuracy (R² score of 0.9976) with ₹85.87 mean absolute error.",
        "Covers 205 agros (Wheat, Tomato, Onion, etc.) across 26 Indian states with multi-parameter filtering for market, variety, and grade.",
        "Real-time interactive prediction dashboard with model diagnostics, statistical tests, and price range visualizations."
      ],
      techStack: ["Python", "Scikit-Learn", "Random Forest", "Pandas", "NumPy", "Flask / FastAPI", "React"],
      repoUrl: "https://github.com/donthireddyharini/Agro-price-prediction.git",
      demoUrl: "https://agropriceprediction.vercel.app",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
      imagePosition: "center 45%"
    },
    {
      id: "bitesaver",
      title: "BiteSaver – Food Rescue & Sustainability Platform",
      category: "Full-Stack Web & Sustainability Tech",
      period: "2025 – 2026",
      status: "Production Ready",
      description: "A community food rescue marketplace connecting consumers with local bakeries and grocery stores to purchase surplus meals at up to 70% discount, fighting hunger and reducing carbon footprint.",
      highlights: [
        "Saving 10,000+ meals daily with over 2.5M+ total meals saved, 5,000+ partner store integrations, and 500K+ active users.",
        "Real-time geolocation discovery of nearby stores with dynamic surprise bag inventory and instant checkout.",
        "Merchant portal enabling store owners to list surplus items in seconds and automate pickup schedules."
      ],
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Geolocation API", "Stripe API"],
      repoUrl: "https://github.com/donthireddyharini/Bite-Saver.git",
      demoUrl: "https://bitesaver123.vercel.app",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
      imagePosition: "center center"
    },
    {
      id: "cpu-scheduler",
      title: "Energy Efficient CPU Scheduling Algorithm",
      category: "Systems Engineering & Algorithm Optimization",
      period: "2025",
      status: "Research Simulation",
      description: "Comprehensive OS scheduler benchmark and visualization simulating 100 CPU tasks, proving Dynamic Voltage and Frequency Scaling (DVFS) achieves 50.00% energy reduction over baseline FCFS.",
      highlights: [
        "Benchmarked FCFS (10,205.18 Joules) against Energy-Aware DVFS (5,102.59 Joules), halving total energy expenditure.",
        "Interactive 3D isometric visualization of energy consumption with real-time CPU clock frequency modulation.",
        "Detailed statistical comparisons of turnaround time, waiting time, and power dissipation metrics."
      ],
      techStack: ["C++", "JavaScript", "Canvas / Three.js", "DVFS Algorithm", "OS Scheduling", "Tailwind CSS"],
      repoUrl: "https://github.com/donthireddyharini/Energy_Efficient_CPU_Scheduling.git",
      demoUrl: "https://lovable.dev/projects/4a24615e-0944-442a-bef2-468c3e2d80ed",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      imagePosition: "center center"
    },
    {
      id: "event-management",
      title: "Event Management System",
      category: "Full-Stack Web Application",
      period: "2025",
      status: "Live",
      description: "A comprehensive event management platform for organizing, managing, and tracking events with seamless user experience, featuring event creation, registration, scheduling, and real-time updates.",
      highlights: [
        "End-to-end event lifecycle management with creation, registration, and attendee tracking.",
        "Interactive dashboard for organizers to manage events, view registrations, and monitor analytics.",
        "Responsive design with intuitive UI for seamless event discovery and registration."
      ],
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      repoUrl: "https://github.com/donthireddyharini/Event-Management-System.git",
      demoUrl: "http://eventmanagementsystem.site.je/",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      imagePosition: "center center"
    }
  ],
  certifications: [
    { title: "Data Structures and Algorithms", provider: "iamneo - NIT Venture", date: "Jun 2026" },
    { title: "Object Oriented Programming", provider: "iamneo - NIT Venture", date: "Jun 2026" },
    { title: "Master Data Structure, Algorithms and Problem Solving", provider: "Centre for Professional Enhancement", date: "Jul 2026" },
    { title: "Programming in Java", provider: "iamneo - NIT Venture", date: "Oct 2026" }
  ],
  achievements: [
    {
      title: "State Level Athletics Gold Medallist",
      description: "Secured 4+ Gold Medals at State Level in Athletics, competing in Running.",
      date: "Dec 2024 – Jan 2025"
    },
    {
      title: "AIU Athletics Participant, LPU",
      description: "Represented Lovely Professional University in All India Inter-University athletics, competing at the university level.",
      date: "Jan 2026"
    }
  ],
  manifesto: {
    title: "Engineering Philosophy",
    subtitle: "On Craft, Systems, and Problem Solving",
    paragraphs: [
      "Software engineering is the craft of turning complex computational ideas into clear, accessible, and performant solutions.",
      "From rigorous data structures and memory optimization to responsive multimodal user experiences, excellence comes from deliberate discipline and curiosity.",
      "Bridging foundational algorithmic principles with modern AI models and resilient web architectures."
    ]
  }
};
