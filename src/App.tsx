import { useState, useEffect, useRef } from 'react'
import profilePic from './assets/profile_em.png'

const resume = {
  name: "Emerson Darwin Vásquez Infante",
  title: "Senior Salesforce Developer",
  location: "Lambayeque, Perú",
  phone: "+51 938561506",
  email: "emersondrw.evsi@gmail.com",
  links: [
    { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/emerson-darwin-v%C3%A1squez-infante-49142b173" },
    { label: "Digital Portfolio", url: "#" },
  ],
  summary:
    "Bilingual (English/Spanish) Senior Salesforce Developer with 8+ years of software engineering experience, including over 6 years of dedicated expertise in the Salesforce ecosystem. Proven track record of architecting and delivering scalable, high-impact enterprise solutions (LWC, Apex, Advanced Flows, and complex integrations) for global clients across the financial, legal, e-commerce, and media sectors. Recognized for strong technical leadership, enforcing development best practices, optimizing CI/CD pipelines, and driving cross-functional collaboration in Agile/Scrum environments.",

  skills: [
    { category: "Salesforce Ecosystem", items: ["Apex (Triggers, Async Apex, Batch, Controllers)", "Lightning Web Components (LWC)", "Aura Components", "Flow Builder", "Data Modeling", "Process Automation", "Reports & Dashboards"], color: "blue" },
    { category: "Clouds & Platforms", items: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Health Cloud", "Pardot"], color: "indigo" },
    { category: "Integrations & APIs", items: ["REST/SOAP Web Services", "OAuth 2.0", "Named Credentials", "Data Loader", "Jitterbit"], color: "purple" },
    { category: "DevOps & CI/CD", items: ["Gearset", "GitHub", "GitLab", "Jenkins", "SFDX", "VS Code"], color: "teal" },
    { category: "Other Technologies", items: ["JavaScript", "PHP", "Bootstrap", "SQL Server", "Web Scraping", "Advanced MS Excel"], color: "green" },
  ],

  experience: [
    {
      project: "Banco de Crédito del Perú (BCP)",
      company: "Credicorp",
      location: "Peru",
      role: "Senior Salesforce Developer Advanced",
      period: "Jan 2026 - Present",
      highlights: [
        "Architect and develop high-scale banking solutions ensuring robust security and scalability.",
        "Refactored and customized legacy codebases, significantly reducing technical debt and improving performance.",
        "Enforce code quality and enterprise standards by leading comprehensive Pull Request (PR) reviews.",
        "Designed external integrations utilizing best practices, REST APIs, and Secure Named Credentials.",
        "Proactively aligned current system architectures with upcoming Salesforce Release Updates to prevent business disruption.",
      ],
    },
    {
      project: "Clínica Alemana (CAS)",
      company: "Clínica Alemana (CAS)",
      location: "Chile (Remote)",
      role: "Salesforce Developer",
      period: "Aug 2025 - Jan 2026",
      highlights: [
        "Successfully implemented third-party integrations with SharePoint and WhatsApp (Meta API).",
        "Designed and built modern, high-performance Lightning Web Components (LWC) tailored to core business processes.",
        "Engineered structured and highly scalable Apex Endpoints leveraging the Strategy Design Pattern.",
        "Customized org architecture including validation rules, advanced flows, custom objects, and fields following strict clean-code principles.",
      ],
    },
    {
      project: "IDB (Inter-American Development Bank)",
      company: "Globant",
      location: "Remote",
      role: "Salesforce Developer",
      period: "Apr 2024 - Jul 2025",
      highlights: [
        "Provided high-tier support and resolved complex technical tickets with direct client interaction entirely in English.",
        "Developed specialized Apex logic and custom flows for automated legal operations and enterprise data management.",
        "Collaborated closely within a fast-paced Scrum team to deliver customized objects, page layouts, and Chatter features.",
      ],
    },
    {
      project: "Mercado Libre",
      company: "Globant",
      location: "Remote",
      role: "Salesforce Developer & Technical Leader",
      period: "May 2022 - Apr 2024",
      highlights: [
        "Led and mentored a high-performing team of Salesforce developers, ensuring timely delivery of sprints for Latin America's largest e-commerce platform.",
        "Bridged the gap between business requirements and technical execution; managed Jira ticketing and stakeholder alignment across multiple squads.",
        "Spearheaded the automation of complex business logic using Apex and advanced Flow architectures for marketplace operations.",
      ],
    },
    {
      project: "ME Elecmetal",
      company: "Globant",
      location: "Remote",
      role: "Salesforce Developer",
      period: "Mar 2023 - Jun 2023",
      highlights: [
        "Played a key role in the regional deployment and data migration of Salesforce for the North American manufacturing rollout.",
      ],
    },
    {
      project: "Disney ABC M360",
      company: "Globant",
      location: "Remote",
      role: "Salesforce Developer",
      period: "Jul 2019 - Mar 2022",
      highlights: [
        "Developed custom business logic using Aura Components and implemented real-time notification systems for media operations.",
        "Enhanced core Apex functionalities and revamped UI components, improving end-user experience for global enterprise workflows.",
        "Automated marketing and operational workflows using Pardot and Flow Builder, streamlining cross-team campaigns.",
      ],
    },
    {
      project: "Universidad del Rosario",
      company: "AVANXO",
      location: "Peru",
      role: "Salesforce Technical Consultant",
      period: "Jun 2019 - Jul 2019",
      highlights: [
        "Delivered critical Apex optimization and provided technical mentorship/training to enterprise users.",
      ],
    },
    {
      project: "CloudCreations - SERTPRO 360",
      company: "CloudCreations - SERTPRO 360",
      location: "Peru",
      role: "Salesforce Developer",
      period: "Sep 2018 - Jun 2019",
      highlights: [
        "Executed end-to-end data migrations and object customization for onboarding clients.",
        "Built secure REST/SOAP integrations utilizing OAuth 2.0 authentication protocols.",
        "Created executive-level dashboards and analytical reports to drive business intelligence.",
      ],
    },
    {
      project: "Various Companies",
      company: "Various Companies",
      location: "",
      role: "Software Analyst / Developer",
      period: "2016 - 2018",
      highlights: [
        "Developed internal management systems, maintained ERP platforms, and generated technical reporting structure.",
      ],
    },
  ],

  languages: [
    { name: "English", level: 90, label: "Advanced / Professional" },
    { name: "Spanish", level: 100, label: "Native" },
  ],

  certifications: [
    "Salesforce Certified AI Associate",
    "Salesforce Certified Platform Foundations",
    "Salesforce Certified Platform App Builder (In Progress)",
    "Salesforce Certified Platform Developer I (In Progress)",
  ],

  education: {
    institution: "Universidad Señor de Sipón",
    location: "Peru",
    degree: "Bachelor of Science in Systems Engineering",
    year: "Graduated (2017)",
  },
}

function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const skillColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border-blue-200 dark:border-blue-700/40",
  indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200 border-indigo-200 dark:border-indigo-700/40",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 border-purple-200 dark:border-purple-700/40",
  teal: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 border-teal-200 dark:border-teal-700/40",
  green: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border-green-200 dark:border-green-700/40",
}

const badgeColors: Record<string, { letter: string; from: string; to: string }> = {
  "BCP": { letter: "B", from: "from-blue-500", to: "to-blue-700" },
  "Clínica Alemana (CAS)": { letter: "C", from: "from-emerald-500", to: "to-emerald-700" },
  "IDB (Inter-American Development Bank)": { letter: "I", from: "from-purple-500", to: "to-purple-700" },
  "Mercado Libre": { letter: "M", from: "from-amber-400", to: "to-amber-600" },
  "ME Elecmetal": { letter: "E", from: "from-slate-500", to: "to-slate-700" },
  "Disney ABC M360": { letter: "D", from: "from-pink-500", to: "to-pink-700" },
  "AVANXO": { letter: "V", from: "from-indigo-500", to: "to-indigo-700" },
  "Universidad del Rosario": { letter: "R", from: "from-green-500", to: "to-green-700" },
  "CloudCreations - SERTPRO 360": { letter: "S", from: "from-cyan-500", to: "to-cyan-700" },
  "Various Companies": { letter: "M", from: "from-gray-500", to: "to-gray-700" },
}

function getBadge(project: string) {
  return badgeColors[project] || { letter: project.charAt(0).toUpperCase(), from: "from-blue-500", to: "to-blue-700" }
}

function SkillBadge({ name, color }: { name: string; color: string }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mr-1.5 mb-1.5 border ${skillColors[color] || skillColors.blue}`}>
      {name}
    </span>
  )
}

function SummaryText({ text }: { text: string }) {
  const keywords = [
    "Senior Salesforce Developer",
    "enterprise solutions",
    "technical leadership",
    "cross-functional collaboration",
    "Agile/Scrum environments",
    "CI/CD pipelines",
    "Salesforce ecosystem",
    "global clients",
    "high-impact",
    "LWC",
    "Apex",
    "Advanced Flows",
  ]
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${keywords.map(esc).join('|')})`, 'gi')
  const parts = text.split(regex)
  return (
    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 text-justify">
      {parts.map((part, i) =>
        keywords.some((k) => k.toLowerCase() === part.toLowerCase())
          ? <strong key={i} className="text-slate-900 dark:text-white font-semibold">{part}</strong>
          : <span key={i}>{part}</span>
      )}
    </p>
  )
}

function App() {
  const [dark, setDark] = useState(false)
  const timelineVisible = useScrollReveal()

  const [animated, setAnimated] = useState<Set<number>>(new Set())
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!timelineVisible.visible) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idx = Number((entry.target as HTMLElement).dataset.index)
        if (entry.isIntersecting) {
          setAnimated((prev) => new Set(prev).add(idx))
        } else {
          setAnimated((prev) => {
            const next = new Set(prev)
            next.delete(idx)
            return next
          })
        }
      })
    }, { threshold: 0.2 })
    nodeRefs.current.forEach((el) => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [timelineVisible.visible])

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 bg-white/90 text-slate-700 hover:bg-white dark:bg-slate-700/90 dark:text-yellow-300 dark:hover:bg-slate-700 backdrop-blur-sm"
        >
          {dark ? '☀️' : '🌙'}
        </button>

        <div className="max-w-5xl mx-auto p-3 md:p-6">
          <div className="rounded-2xl shadow-2xl overflow-hidden transition-colors duration-500 bg-white dark:bg-slate-800/95 backdrop-blur-sm">

            {/* Header */}
            <header className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-6 md:p-10 text-white overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="relative z-10">
                <AnimatedSection>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white/40 shadow-xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:border-white/60">
                        <img
                          src={profilePic}
                          alt={resume.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{resume.name}</h1>
                      <p className="text-lg md:text-xl text-blue-200 font-medium mt-1.5">{resume.title}</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-1 mt-4 text-sm text-blue-100">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {resume.location}
                        </span>
                        <a href={`tel:${resume.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                          {resume.phone}
                        </a>
                        <a href={`mailto:${resume.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          {resume.email}
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {resume.links.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 hover:bg-white/20 text-blue-100 hover:text-white border border-white/20 hover:border-white/40">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </header>

            {/* Body: Two columns */}
            <div className="flex flex-col md:flex-row">

              {/* Left Column: Skills, Languages, Certs, Education */}
              <div className="md:w-96 shrink-0 p-6 md:p-8 border-r border-slate-200 dark:border-slate-700">
                <div className="space-y-8">

                  {/* Skills */}
                  <AnimatedSection>
                    <SectionTitleLight>Core Skills</SectionTitleLight>
                    {resume.skills.map((group) => (
                      <div key={group.category} className="mb-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">{group.category}</h4>
                        <div className="flex flex-wrap">
                          {group.items.map((item, i) => (
                            <SkillBadge key={i} name={item} color={group.color} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </AnimatedSection>

                  {/* Languages */}
                  <AnimatedSection delay={100}>
                    <SectionTitleLight>Languages</SectionTitleLight>
                    {resume.languages.map((lang, i) => {
                      const lvl = typeof lang.level === 'number' ? lang.level : 90
                      return (
                        <div key={i} className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-700 dark:text-slate-200">{lang.name}</span>
                            <span className="text-slate-400">{lang.label}</span>
                          </div>
                          <div className="h-2 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-600">
                            <div className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out`}
                              style={{ width: `${lvl}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </AnimatedSection>

                  {/* Certifications */}
                  <AnimatedSection delay={200}>
                    <SectionTitleLight>Certifications</SectionTitleLight>
                    <div className="space-y-2">
                      {resume.certifications.map((cert, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-blue-500 mt-0.5 shrink-0">🏅</span>
                          <span className="text-slate-600 dark:text-slate-300">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>

                  {/* Education */}
                  <AnimatedSection delay={300}>
                    <SectionTitleLight>Education</SectionTitleLight>
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{resume.education.degree}</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-0.5">{resume.education.institution}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{resume.education.location} · {resume.education.year}</p>
                    </div>
                  </AnimatedSection>

                </div>
              </div>

              {/* Right Column: Summary + Experience */}
              <div className="flex-1 p-6 md:p-8">

                {/* Summary */}
                <AnimatedSection>
                  <h2 className="text-lg font-bold uppercase tracking-wider mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                    <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full inline-block" />
                    Professional Summary
                  </h2>
                  <SummaryText text={resume.summary} />
                </AnimatedSection>

                <div className="my-8 border-t border-slate-200 dark:border-slate-600" />

                {/* Experience */}
                <section ref={timelineVisible.ref}>
                  <AnimatedSection>
                    <h2 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                      <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full inline-block" />
                      Professional Experience
                    </h2>
                  </AnimatedSection>

                  <div className="relative pl-8">
                    <div className={`absolute left-[13px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-purple-400 transition-all duration-1000 ease-out ${timelineVisible.visible ? 'scale-y-100' : 'scale-y-0'} origin-top`} />

                    {resume.experience.map((exp, i) => {
                      const badge = getBadge(exp.project)
                      return (
                        <div
                          key={i}
                          ref={(el) => { nodeRefs.current[i] = el }}
                          data-index={i}
                          className="relative mb-8 last:mb-0"
                        >
                          {/* Timeline dot */}
                          <div
                            className={`absolute -left-8 top-1 w-[26px] h-[26px] rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg transition-all duration-500 bg-gradient-to-br ${badge.from} ${badge.to} ${animated.has(i) ? 'scale-100 opacity-100 shadow-[0_0_12px_rgba(59,130,246,0.4)]' : 'scale-0 opacity-0'
                              }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            {badge.letter}
                          </div>

                          {/* Card */}
                          <div
                            className={`rounded-xl p-4 md:p-5 transition-all duration-500 bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/50 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-600/30 shadow-sm hover:shadow-md ${animated.has(i) ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
                              }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                              <div>
                                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">{exp.project}</h3>
                                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                  {exp.role}{exp.project !== exp.company ? <span className="text-slate-400 dark:text-slate-500"> · {exp.company}</span> : ''}{exp.location ? <span className="text-slate-400 dark:text-slate-500"> | {exp.location}</span> : ''}
                                </p>
                              </div>
                              <span className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">{exp.period}</span>
                            </div>
                            <ul className="text-sm space-y-1.5 ml-4 list-disc text-slate-600 dark:text-slate-300">
                              {exp.highlights.map((h, j) => (
                                <li key={j}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function SectionTitleLight({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-100">
      <span className="w-1 h-4 bg-blue-500 rounded-full inline-block" />
      {children}
    </h3>
  )
}

export default App
