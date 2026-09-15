import { jsPDF } from 'jspdf';

export function openResumeInNewTab() {
  window.open('/resume.html', '_blank', 'noopener,noreferrer');
}

export function downloadResume() {
  const fileName = 'Harini_Donthireddy_Resume.pdf';

  try {
    // Primary method: Direct download anchor targeting public PDF
    const link = document.createElement('a');
    link.href = '/Harini_Donthireddy_Resume.pdf';
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.warn('Direct file download fallback triggered:', err);
    generateClientPdf(fileName);
  }
}

export function generateClientPdf(fileName = 'Harini_Donthireddy_Resume.pdf') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter'
  });

  const marginX = 40;
  let cursorY = 40;
  const pageWidth = 612;
  const contentWidth = pageWidth - marginX * 2;

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text('Harini Donthireddy', marginX, cursorY);
  cursorY += 16;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text('LinkedIn: www.linkedin.com/in/harini-donthireddy', marginX, cursorY);
  doc.text('Email: donthireddyharini@gmail.com', pageWidth - marginX, cursorY, { align: 'right' });
  cursorY += 12;

  doc.text('GitHub: https://github.com/donthireddyharini', marginX, cursorY);
  doc.text('Mobile: +91 9390599084', pageWidth - marginX, cursorY, { align: 'right' });
  cursorY += 18;

  function addSectionTitle(title: string, linkText: string | null = null) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(title, marginX, cursorY);
    
    if (linkText) {
      const titleWidth = doc.getTextWidth(title);
      doc.setFont('helvetica', 'normal');
      doc.text(' | ', marginX + titleWidth, cursorY);
      doc.setTextColor(0, 102, 204);
      doc.text(linkText, marginX + titleWidth + 10, cursorY);
      doc.setTextColor(0, 0, 0);
    }
    
    cursorY += 3;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.75);
    doc.line(marginX, cursorY, pageWidth - marginX, cursorY);
    cursorY += 11;
  }

  // 1. SKILLS SUMMARY
  addSectionTitle('SKILLS SUMMARY');
  const skills = [
    ['Languages:', 'C++, java, HTML5, CSS3'],
    ['Frameworks & Libraries:', 'NumPy, Pandas, Matplotlib, Node.js'],
    ['Databases:', 'My SQL, MongoDB'],
    ['Cloud / DevOps:', 'Vercel, Railway, Render'],
    ['Developer Tools:', 'Vs Code, Git, Github, Antigravity'],
    ['Core Subjects:', 'Computer Networks, Operating System, Data Structures & Algorithms, OOP'],
    ['Soft Skills:', 'Problem-Solving, Team Collaboration, Intellectual Curiosity'],
    ['AI / LLMs:', 'Claude, ChatGPT, Gemini, Groq API']
  ];

  doc.setFontSize(9);
  for (const [label, val] of skills) {
    doc.setFont('helvetica', 'bold');
    doc.text(label, marginX, cursorY);
    doc.setFont('helvetica', 'normal');
    doc.text(val, marginX + 130, cursorY);
    cursorY += 11;
  }
  cursorY += 5;

  // 2. INTERNSHIP
  addSectionTitle('INTERNSHIP');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('Software Engineering Intern — GND Solutions Pvt Limited', marginX, cursorY);
  const swWidth = doc.getTextWidth('Software Engineering Intern — GND Solutions Pvt Limited');
  doc.setFont('helvetica', 'normal');
  doc.text(' | ', marginX + swWidth, cursorY);
  doc.setTextColor(0, 102, 204);
  doc.text('Certificate', marginX + swWidth + 8, cursorY);
  doc.setTextColor(0, 0, 0);
  doc.text('Nov 2024 – May 2025', pageWidth - marginX, cursorY, { align: 'right' });
  cursorY += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  const internshipBullets = [
    'Engineered software solutions using Java Script, applying core programming principles and structured problem-solving practices to strengthen development proficiency in real-world engineering workflows.',
    'Developed and refined web application components with React.js, translating software requirements into modular, maintainable interfaces while building practical experience with modern frontend engineering.',
    'Applied AWS concepts alongside JavaScript and React.js development, strengthening end-to-end understanding of cloud-enabled software engineering and preparing solutions for scalable application environments.'
  ];

  for (const b of internshipBullets) {
    doc.text('•', marginX + 6, cursorY);
    const lines = doc.splitTextToSize(b, contentWidth - 18);
    doc.text(lines, marginX + 16, cursorY);
    cursorY += lines.length * 9.5 + 2.5;
  }
  cursorY += 5;

  // 3. PROJECTS
  addSectionTitle('PROJECTS');

  // Project 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('DSA Legends – DSA Learning Game', marginX, cursorY);
  const p1w = doc.getTextWidth('DSA Legends – DSA Learning Game');
  doc.setFont('helvetica', 'normal');
  doc.text(' | ', marginX + p1w, cursorY);
  doc.setTextColor(0, 102, 204);
  doc.text('Github', marginX + p1w + 8, cursorY);
  doc.setTextColor(0, 0, 0);
  doc.text(' | ', marginX + p1w + 40, cursorY);
  doc.setTextColor(0, 102, 204);
  doc.text('Live', marginX + p1w + 48, cursorY);
  doc.setTextColor(0, 0, 0);
  doc.text('Jun 2026 – Jul 2026', pageWidth - marginX, cursorY, { align: 'right' });
  cursorY += 12;

  const p1Bullets = [
    'Engineered a browser-based DSA learning game addressing the challenge of making algorithm concepts interactive, structuring 7 progressive worlds across Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs with Roadmap → Missions → Boss → Quiz learning loops.',
    'Implemented step-by-step Canvas visualizations alongside independently compiled Java reference implementations for core operations including searching, sorting, traversal, BFS, DFS, Dijkstra, postfix evaluation, and pointer-based linked-list operations, with the Java layer independently compiled and executed to validate algorithm behaviour.',
    'Integrated gamification and persistent progress through timed boss battles, scenario-based quizzes, XP/coins, powers, ~24 achievements, leaderboard, learning journal, and browser local Storage, achieving a quiz threshold for world completion and deploying the zero-build application on Vercel.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  for (const b of p1Bullets) {
    doc.text('•', marginX + 6, cursorY);
    const lines = doc.splitTextToSize(b, contentWidth - 18);
    doc.text(lines, marginX + 16, cursorY);
    cursorY += lines.length * 9.5 + 2.5;
  }

  doc.setFont('helvetica', 'bolditalic');
  doc.setFontSize(8.5);
  doc.text('Tech Stack: ', marginX, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text('HTML, CSS, JavaScript, Java, HTML Canvas API, Web Audio API, Browser Local Storage, Vercel', marginX + 50, cursorY);
  cursorY += 14;

  // Project 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('LitMind – AI-Powered Literature Tutor', marginX, cursorY);
  const p2w = doc.getTextWidth('LitMind – AI-Powered Literature Tutor');
  doc.setFont('helvetica', 'normal');
  doc.text(' | ', marginX + p2w, cursorY);
  doc.setTextColor(0, 102, 204);
  doc.text('Github', marginX + p2w + 8, cursorY);
  doc.setTextColor(0, 0, 0);
  doc.text(' | ', marginX + p2w + 40, cursorY);
  doc.setTextColor(0, 102, 204);
  doc.text('Live', marginX + p2w + 48, cursorY);
  doc.setTextColor(0, 0, 0);
  doc.text('Jan 2026 – May 2026', pageWidth - marginX, cursorY, { align: 'right' });
  cursorY += 12;

  const p2Bullets = [
    'Engineered an AI literature tutor that analyses themes, symbolism, narrative techniques, poetry, and literary concepts through conversational, context-aware assistance powered by Llama models via Groq.',
    'Built a full-stack conversational system with Node.js, Express.js, SQLite, and session management, supporting persistent chat histories, Google OAuth authentication, image-based, voice-based literary analysis, and multimodal AI interactions.',
    'Integrated voice input, image uploads, Markdown-rendered responses, topic-driven prompts, and adaptive model selection, creating an interactive learning environment that extends beyond conventional text-only AI chatbots. and supports multiple modes of interaction.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  for (const b of p2Bullets) {
    doc.text('•', marginX + 6, cursorY);
    const lines = doc.splitTextToSize(b, contentWidth - 18);
    doc.text(lines, marginX + 16, cursorY);
    cursorY += lines.length * 9.5 + 2.5;
  }

  doc.setFont('helvetica', 'bolditalic');
  doc.setFontSize(8.5);
  doc.text('Tech Stack: ', marginX, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text('Node.js, Express.js, JavaScript, SQLite, Groq API, Llama 3.3, Passport.js, Render', marginX + 50, cursorY);
  cursorY += 14;

  // 4. CERTIFICATIONS / CERTIFICATES
  addSectionTitle('CERTIFICATIONS / CERTIFICATES');
  const certs = [
    ['Data Structures and Algorithms | iamneo - NIT Venture', 'Jun 2026'],
    ['Object Oriented Programming | iamneo - NIT Venture', 'Jun 2026'],
    ['Master Data Structure, Algorithms and Problem Solving | Centre for Professional Enhancement', 'Jul 2026'],
    ['Programming in java | iamneo - NIT Venture', 'Oct 2026']
  ];

  doc.setFontSize(8.5);
  for (const [title, date] of certs) {
    doc.setFont('helvetica', 'bold');
    const parts = title.split(' | ');
    doc.text(parts[0], marginX, cursorY);
    const w = doc.getTextWidth(parts[0]);
    doc.setFont('helvetica', 'normal');
    doc.text(' | ' + (parts[1] || ''), marginX + w, cursorY);
    doc.text(date, pageWidth - marginX, cursorY, { align: 'right' });
    cursorY += 11;
  }
  cursorY += 4;

  // 5. ACHIEVEMENTS & EXTRACURRICULAR ACTIVITIES
  addSectionTitle('ACHIEVEMENTS & EXTRACURRICULAR ACTIVITIES', 'Certificates');
  const achievements = [
    ['State Level Athletics Gold Medallist', ' —Secured 4+ Gold Medals at State Level in Athletics, competing in Running', 'Dec 2024 -Jan 2025'],
    ['AIU Athletics Participant, LPU', ' — Represented LPU in All India Inter-University athletics, competing at the university level.', 'Jan 2026']
  ];

  doc.setFontSize(8.5);
  for (const [boldT, desc, dt] of achievements) {
    doc.setFont('helvetica', 'bold');
    doc.text(boldT, marginX, cursorY);
    const bw = doc.getTextWidth(boldT);
    doc.setFont('helvetica', 'normal');
    doc.text(desc, marginX + bw, cursorY);
    doc.text(dt, pageWidth - marginX, cursorY, { align: 'right' });
    cursorY += 11;
  }
  cursorY += 4;

  // 6. EDUCATION
  addSectionTitle('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Lovely Professional University', marginX, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text('Punjab, India', pageWidth - marginX, cursorY, { align: 'right' });
  cursorY += 10.5;

  doc.text('Bachelor of Technology in Computer Science — CGPA: 7.95', marginX, cursorY);
  doc.text('Aug 2025 – Present', pageWidth - marginX, cursorY, { align: 'right' });
  cursorY += 13;

  doc.setFont('helvetica', 'bold');
  doc.text('Loyola Polytechnic College (Diploma)', marginX, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text('Andhra Pradesh, India', pageWidth - marginX, cursorY, { align: 'right' });
  cursorY += 10.5;

  doc.text('Diploma (Computer Science and Engineering) — CGPA: 8.81', marginX, cursorY);
  doc.text('Aug 2022 – May 2025', pageWidth - marginX, cursorY, { align: 'right' });

  doc.save(fileName);
}
