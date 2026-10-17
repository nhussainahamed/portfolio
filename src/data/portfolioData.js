/**
 * Portfolio Data Configuration
 * Edit this file to update your portfolio content anytime.
 */
export const portfolioData = {
  personal: {
    name: "N Hussain Ahamed",
    shortName: "Hussain",
    role: "Full-Stack Developer & AI Enthusiast",
    title: "Information Science Student · MERN & AI",
    badge: "Open to Software Developer Internships & Opportunities",
    location: "Bengaluru, India",
    objective:
      "Information Science undergraduate with hands-on experience developing MERN Stack applications and integrating AI-powered features. Passionate about building scalable web applications, real-time architectures, and leveraging multimodal AI to solve real-world software engineering challenges.",
    email: "nhussainahamed19@gmail.com",
    objective1:"My journey combines strong computer science fundamentals with hands-on software development. I enjoy designing intuitive user interfaces, building robust backend systems, and integrating AI capabilities into practical applications.\
    \nThrough projects involving the MERN stack, RESTful APIs, and multimodal AI, I’ve been developing my skills in application architecture, database management, and end-to-end development.",
    github: "https://github.com/nhussainahamed",
    linkedin: "https://www.linkedin.com/in/n-hussain-ahamed-a3a3a7290",
    resumeUrl: "/resume.pdf",
    stats: [
      { value: "9.12", label: "CGPA" },
      { value: "2", label: "Projects" },
      { value: "91%", label: "PUC Score" },
      { value: "AI", label: "Focus" },
    ],
  },

  highlights: [
    {
      title: "Academic Excellence",
      description: "9.12 CGPA in Information Science & Engineering at RNS Institute of Technology.",
      tag: "Academics",
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end development covering React.js, Node.js ,Express.js, MongoDB.",
      tag: "Engineering",
    },
    {
      title: "Applied AI Engineering",
      description: "Practical integration of Google Gemini multimodal models, audio/video pipelines, and FFmpeg compression.",
      tag: "AI & Media",
    },
    {
      title: "Computer Science Foundations",
      description: "Thorough grounding in Data Structures, Algorithms, DBMS, Operating Systems, and OOP",
      tag: "Foundations",
    },
  ],

  education: [
    {
      degree: "B.E. – Information Science & Engineering",
      period: "2023 – 2027",
      institution: "RNS Institute of Technology, Bengaluru",
      board: "Visvesvaraya Technological University (VTU)",
      score: "CGPA: 9.12 / 10",
      status: "In Progress · Expected 2027",
      
      
    },
    {
      degree: "Pre-University Course (PUC / 12th)",
      period: "2021 – 2023",
      institution: "Anantha PU College, Arsikere",
      board: "Karnataka Pre-University Board",
      score: "Percentage: 91.0%",
      status: "Completed",
      
    },
    {
      degree: "Secondary School Certificate (10th)",
      period: "2020 – 2021",
      institution: "Anantha International School, Arsikere",
      board: "CISCE (ICSE Board)",
      score: "Percentage: 90.30%",
      status: "Completed",
      
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      icon: "code",
      items: ["Java", "JavaScript", "C"],
    },
    {
      category: "Frontend Development",
      icon: "layers",
      items: ["React.js", "HTML5", "CSS3"],
    },
    {
      category: "Backend & Server",
      icon: "cpu",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth"],
    },
    {
      category: "Databases & Storage",
      icon: "database",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "AI & Multimodal Services",
      icon: "sparkles",
      items: ["Google Gemini Multimodal API", "Prompt Engineering", "FFmpeg Media Pipelines"],
    },
    {
      category: "Developer Tools",
      icon: "wrench",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      category: "Core Computer Science",
      icon: "award",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
  ],

  projects: [
    {
      id: "summarivideo",
      name: "SummariVideo – AI Video Note Generator",
      tagline: "Multimodal AI Study Platform with Media Compression",
      category: "Full-Stack AI Application",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini 2.5 Flash",
        "FFmpeg",
        "yt-dlp",
      ],
      highlights: [
        "Full-stack web application converting YouTube lectures or uploaded video/audio into structured, multi-lingual notes using Google Gemini's multimodal API.",
        "Engineered an automated media pipeline leveraging FFmpeg & yt-dlp to achieve ~80% audio file compression for efficient API token throughput.",
        "Built robust exponential-backoff retries for resilient API rate-limit handling, persistent note history, real-time processing indicators, and instant PDF report export.",
      ],
      metrics: "80% media compression • 13 subject categories",
      liveUrl: "",
      repoUrl: "https://github.com/your-github-username",
    },
    {
      id: "smart-donation",
      name: "Smart Donation System with Barcode Tracking",
      tagline: "Enterprise Logistics & Donation Supply-Chain Platform",
      category: "Enterprise Web Architecture",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "REST APIs",
        "JWT",
        "Bcrypt",
      ],
      highlights: [
        "End-to-end donation drive management system featuring dynamic barcode/UID generation and live parcel lifecycle tracking (Received → Dispatched → Delivered).",
        "Implemented secure JWT authentication with bcrypt password hashing and granular Role-Based Access Control (RBAC) for Donor and Administrator portals.",
        "Architected a normalized MySQL relational schema spanning 10+ tables with 15+ optimized RESTful API endpoints for zero-latency logistics tracking.",
      ],
      metrics: "10+ Relational Tables • 15+ RESTful APIs",
      liveUrl: "",
      repoUrl: "https://github.com/your-github-username",
    },
  ],

  certifications: [
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      year: "2026",
      credentialUrl: "/ibm.pdf",
      description:
        "Introduction to artificial intelligence, its practical applications, and its role in solving real-world problems.",
    },
    {
      title: "Fundamentals of Artificial Intelligence",
      issuer: "NPTEL — IIT Guwahati",
      year: "Certified",
      credentialUrl: "/Fundamentals%20of%20Artificial%20Intelligence.pdf",
      description:
        "Study of classical AI methods, search strategies, knowledge representation, and computational problem-solving."},
    {
      title: "Ultimate Web Development Course – Build Modern Websites",
      issuer: "Udemy",
      year: "Certified",
      credentialUrl: "/mern_certificate.pdf",
      description:
        "In-depth industry training covering modern HTML5/CSS3, JavaScript DOM manipulation, full-stack workflow, and responsive interface architecture.",
    },
  ],

  navLinks: [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ],
};

export default portfolioData;
