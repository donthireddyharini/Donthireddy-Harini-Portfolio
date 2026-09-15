import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, Calendar, X, FileCheck, Building2 } from 'lucide-react';

interface CertificateItem {
  id: string;
  title: string;
  category: 'internship' | 'dsa' | 'hackathon' | 'programming' | 'database' | 'ai';
  badge: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  imageUrl: string;
  description: string;
  skills: string[];
  verifyUrl?: string;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    border: string;
    accent: string;
  };
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-gnd',
    title: 'Software Engineering: JavaScript, React.js & AWS',
    category: 'internship',
    badge: 'Certificate of Internship',
    issuer: 'GND Solutions India Pvt. Ltd.',
    issueDate: 'Nov 25, 2024 – May 20, 2025',
    credentialId: 'PIN: 22029-CM-071',
    imageUrl: '/cert-gnd-internship.webp',
    description:
      'Successfully completed intensive Software Engineering Internship mastering JavaScript fundamentals, scalable React.js component architectures, and AWS cloud workflows.',
    skills: ['JavaScript', 'React.js', 'AWS', 'Frontend Engineering', 'REST APIs'],
    colorScheme: {
      badgeBg: 'bg-emerald-500/15',
      badgeText: 'text-emerald-300',
      border: 'border-emerald-500/30',
      accent: 'text-emerald-400',
    },
  },
  {
    id: 'cert-lpu-dsa',
    title: 'Data Structures, Algorithms & Problem Solving Masterclass',
    category: 'dsa',
    badge: 'Certificate of Merit • Grade A',
    issuer: 'Lovely Professional University — Centre for Professional Enhancement',
    issueDate: 'Jun 08, 2026 – Jul 06, 2026',
    credentialId: 'Cert No. 489526 (Issued: Aug 13, 2026)',
    imageUrl: '/cert-lpu-dsa-masterclass.png',
    description:
      'Organized by Centre for Professional Enhancement (NAAC A++). Obtained Grade A for mastery in advanced algorithmic problem solving, data structures, and computational optimization.',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Grade A', 'Complexity Analysis'],
    colorScheme: {
      badgeBg: 'bg-amber-500/15',
      badgeText: 'text-amber-300',
      border: 'border-amber-500/30',
      accent: 'text-amber-400',
    },
  },
  {
    id: 'cert-board2code',
    title: 'Board2Code Hackathon, 2026',
    category: 'hackathon',
    badge: 'Certificate of Participation',
    issuer: 'NetPractice Campus & Lovely Professional University',
    issueDate: 'Hackathon Edition 2026',
    credentialId: 'Supported by DPIIT #startupindia & Headstart',
    imageUrl: '/cert-board2code-hackathon.png',
    description:
      'Recognised for enthusiastic participation, technical dedication, and excellence demonstrated throughout the intense Board2Code competitive hackathon.',
    skills: ['Hackathon', 'Competitive Coding', 'Rapid Prototyping', 'Team Innovation'],
    colorScheme: {
      badgeBg: 'bg-orange-500/15',
      badgeText: 'text-orange-300',
      border: 'border-orange-500/30',
      accent: 'text-orange-400',
    },
  },
  {
    id: 'cert-infosys-cpp',
    title: 'Programming Using C++',
    category: 'programming',
    badge: 'Course Completion Certificate',
    issuer: 'Infosys Springboard (Infosys Limited)',
    issueDate: 'Issued: August 24, 2026',
    credentialId: 'Verified on Infosys Wingspan',
    imageUrl: '/cert-infosys-cpp.png',
    description:
      'Successfully completed the comprehensive C++ programming curriculum covering object-oriented architecture, pointers, memory safety, and Standard Template Library.',
    skills: ['C++', 'OOP Paradigms', 'STL', 'Memory Management', 'Algorithms'],
    verifyUrl: 'https://verify.onwingspan.com',
    colorScheme: {
      badgeBg: 'bg-sky-500/15',
      badgeText: 'text-sky-300',
      border: 'border-sky-500/30',
      accent: 'text-sky-400',
    },
  },
  {
    id: 'cert-iamneo-dsa',
    title: 'Data Structure and Algorithm',
    category: 'dsa',
    badge: 'Certificate of Appreciation',
    issuer: 'iamneo (An NIIT Venture) in collaboration with LPU',
    issueDate: 'Jul 25, 2025 – Jan 15, 2026',
    credentialId: 'C.No: 19Ci2B11D63bj5dK7BL1 (Issued: Jun 16, 2026)',
    imageUrl: '/cert-iamneo-dsa.png',
    description:
      'Successfully completed Data Structure and Algorithm course, demonstrating strong commitment, consistency, and excellence in algorithmic problem-solving and computational efficiency.',
    skills: ['Data Structures', 'Algorithms', 'Time & Space Complexity', 'Problem Solving'],
    colorScheme: {
      badgeBg: 'bg-cyan-500/15',
      badgeText: 'text-cyan-300',
      border: 'border-cyan-500/30',
      accent: 'text-cyan-400',
    },
  },
  {
    id: 'cert-iamneo-java',
    title: 'Programming in JAVA',
    category: 'programming',
    badge: 'Certificate of Appreciation',
    issuer: 'iamneo (An NIIT Venture) in collaboration with LPU',
    issueDate: 'Jan 18, 2026 – May 20, 2026',
    credentialId: 'C.No: 23bK5DL3cM6bj5Dk3BI1 (Issued: May 21, 2026)',
    imageUrl: '/cert-iamneo-java.png',
    description:
      'Successfully completed Programming in JAVA, demonstrating strong commitment, consistency, and programming excellence across core Java and modular software design.',
    skills: ['Java', 'Core Java', 'OOP in Java', 'Collections Framework', 'Software Architecture'],
    colorScheme: {
      badgeBg: 'bg-violet-500/15',
      badgeText: 'text-violet-300',
      border: 'border-violet-500/30',
      accent: 'text-violet-400',
    },
  },
  {
    id: 'cert-iamneo-oop',
    title: 'Object Oriented Programming',
    category: 'programming',
    badge: 'Certificate of Appreciation',
    issuer: 'iamneo (An NIIT Venture) in collaboration with LPU',
    issueDate: 'Jul 25, 2025 – Jan 15, 2026',
    credentialId: 'C.No: 14Al0Ce2Cf2Cg2dh7Bi1 (Issued: Jun 16, 2026)',
    imageUrl: '/cert-iamneo-oop.png',
    description:
      'Demonstrated strong commitment, consistency, and programming excellence across the 6-month intensive course on Object Oriented Programming concepts and design patterns.',
    skills: ['Object Oriented Programming', 'Design Patterns', 'Inheritance', 'Polymorphism'],
    colorScheme: {
      badgeBg: 'bg-rose-500/15',
      badgeText: 'text-rose-300',
      border: 'border-rose-500/30',
      accent: 'text-rose-400',
    },
  },
  {
    id: 'cert-nasscom-genai',
    title: 'GEN AI NASSCOM — Skill Development Program',
    category: 'ai',
    badge: 'Certificate of Completion',
    issuer: 'SFJ & NASSCOM (Skill Development Program)',
    issueDate: 'Issued: 10/4/2026',
    credentialId: 'National Industry/Training Partner Certification',
    imageUrl: '/cert-nasscom-genai.png',
    description:
      'Successfully completed the nationwide GEN AI NASSCOM course under the Skill Development Program, gaining hands-on practical training in generative AI architectures, prompt engineering, and real-world workflows.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Workflows', 'NASSCOM'],
    colorScheme: {
      badgeBg: 'bg-emerald-500/15',
      badgeText: 'text-emerald-300',
      border: 'border-emerald-500/30',
      accent: 'text-emerald-400',
    },
  },
  {
    id: 'cert-infosys-dbms-2',
    title: 'Database Management System Part - 2',
    category: 'database',
    badge: 'Course Completion Certificate',
    issuer: 'Infosys Springboard (Infosys Limited)',
    issueDate: 'Issued: July 14, 2026',
    credentialId: 'Verified on Infosys Wingspan',
    imageUrl: '/cert-infosys-dbms-2.png',
    description:
      'Advanced database management concepts including ACID transactions, concurrent execution control, recovery techniques, indexing, and query optimization.',
    skills: ['Advanced DBMS', 'ACID Transactions', 'Concurrency Control', 'Indexing', 'Query Optimization'],
    verifyUrl: 'https://verify.onwingspan.com',
    colorScheme: {
      badgeBg: 'bg-indigo-500/15',
      badgeText: 'text-indigo-300',
      border: 'border-indigo-500/30',
      accent: 'text-indigo-400',
    },
  },
];

export const CertificatesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'database' | 'dsa' | 'programming' | 'internship' | 'hackathon'>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCertificates = activeFilter === 'all'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.category === activeFilter);

  return (
    <section id="certificates-section" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/15 text-xs text-white/80 mb-4 backdrop-blur-xl">
          <span className="font-mono uppercase tracking-wider text-[11px] text-emerald-300 flex items-center gap-1.5">
            <FileCheck size={12} className="text-emerald-400" />
            Verified Credentials
          </span>
        </div>

        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-3"
        >
          Certificates
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Official credentials and industry diplomas across generative AI, relational databases, data structures, algorithms, hackathons, and software engineering.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: `All Certificates (${CERTIFICATES.length})` },
            { id: 'ai', label: 'Gen AI' },
            { id: 'database', label: 'Database & SQL' },
            { id: 'dsa', label: 'DSA & Algorithms' },
            { id: 'programming', label: 'Core Programming' },
            { id: 'internship', label: 'Internship & Industry' },
            { id: 'hackathon', label: 'Hackathons' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                activeFilter === tab.id
                  ? 'bg-white text-black font-semibold border-white shadow-md'
                  : 'liquid-glass text-white/70 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredCertificates.map((cert) => (
          <article
            key={cert.id}
            className="black-glass rounded-3xl p-5 sm:p-6 border border-white/20 bg-black/85 hover:bg-black/95 backdrop-blur-2xl transition-all duration-300 hover:border-white/30 flex flex-col justify-between group shadow-2xl h-full"
          >
            <div className="flex flex-col flex-1">
              {/* 16:9 Image Preview Frame */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="featured-image-wrapper relative w-full aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/15 mb-4 shrink-0 group/img flex items-center justify-center cursor-pointer"
              >
                <img
                  src={cert.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-lg scale-105 opacity-25 pointer-events-none"
                />
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  loading="lazy"
                  className="featured-image-contain relative z-10 w-full h-full object-contain object-center block group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

                {/* Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 z-20">
                  <span
                    className={`text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border ${cert.colorScheme.border} ${cert.colorScheme.badgeText} flex items-center gap-1`}
                  >
                    <CheckCircle2 size={10} className={cert.colorScheme.accent} />
                    {cert.badge}
                  </span>
                </div>
              </div>

              {/* Issuer & Period */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-zinc-200 flex items-center gap-1.5 truncate font-medium">
                  <Calendar size={12} className={cert.colorScheme.accent} />
                  {cert.issueDate}
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 leading-snug group-hover:text-emerald-300 transition-colors">
                {cert.title}
              </h3>

              {/* Organization */}
              <p className="text-xs sm:text-sm font-mono text-zinc-300 mb-3 flex items-center gap-1.5 font-medium">
                <Building2 size={13} className="shrink-0 opacity-80" />
                <span>{cert.issuer}</span>
              </p>

              {/* Description */}
              <p className="text-sm text-zinc-100 leading-relaxed mb-4 bg-[#090b10]/90 p-3.5 sm:p-4 rounded-xl border border-white/12 shadow-inner flex-1 font-normal">
                {cert.description}
              </p>

              {cert.credentialId && (
                <div className="text-xs font-mono text-zinc-400 mb-3 truncate">
                  {cert.credentialId}
                </div>
              )}
            </div>

            {/* Skills & Action Buttons */}
            <div className="mt-auto pt-2">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.08] text-white border border-white/15 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-mono font-medium py-2 rounded-full active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/20 shadow-md"
                >
                  <Award size={14} className={cert.colorScheme.accent} />
                  <span>View Certificate</span>
                </button>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all border border-white/15 cursor-pointer"
                    title="Verify Credential"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* High-Resolution Certificate Modal Viewer */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass w-full max-w-4xl rounded-3xl p-5 sm:p-7 bg-zinc-950/95 border border-white/20 text-white shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                  {selectedCert.badge}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Title & Issuer */}
            <div className="mb-3 shrink-0">
              <h3
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl sm:text-3xl font-normal text-white mb-1"
              >
                {selectedCert.title}
              </h3>
              <p className="text-xs font-mono text-white/60">
                {selectedCert.issuer} &bull; {selectedCert.issueDate}
              </p>
            </div>

            {/* Certificate Display Container */}
            <div className="relative flex-1 min-h-[320px] max-h-[64vh] rounded-2xl overflow-auto border border-white/15 bg-black/90 flex items-center justify-center p-2 sm:p-4">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4 shrink-0">
              <span className="text-xs font-mono text-white/50 truncate max-w-[200px] sm:max-w-none">
                {selectedCert.credentialId || 'Verified Credential'}
              </span>
              <div className="flex items-center gap-2.5">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-full bg-emerald-400/20 text-emerald-300 hover:bg-emerald-400 hover:text-black text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 border border-emerald-400/30"
                  >
                    <span>Verify Online</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                <a
                  href={selectedCert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Open Full Size</span>
                  <ExternalLink size={12} />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs font-mono transition-all cursor-pointer shadow-md hover:bg-white/90"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
