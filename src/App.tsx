const resume = {
  name: "Emerson Darwin Vásquez Infante",
  title: "Senior Salesforce Developer",
  location: "Lambayeque, Perú",
  phone: "+51 938561506",
  email: "emersondrw.evsi@gmail.com",
  links: [
    { label: "LinkedIn Profile", url: "#" },
    { label: "Digital Portfolio / LWC Portfolio", url: "#" },
  ],
  summary:
    "Bilingual (English/Spanish) Senior Salesforce Developer with 8+ years of software engineering experience, including over 6 years of dedicated expertise in the Salesforce ecosystem. Proven track record of architecting and delivering scalable, high-impact enterprise solutions (LWC, Apex, Advanced Flows, and complex integrations) for global clients across the financial, legal, e-commerce, and media sectors. Recognized for strong technical leadership, enforcing development best practices, optimizing CI/CD pipelines, and driving cross-functional collaboration in Agile/Scrum environments.",

  skills: {
    "Salesforce Ecosystem": [
      "Apex (Triggers, Async Apex, Batch, Controllers)",
      "Lightning Web Components (LWC)",
      "Aura Components",
      "Flow Builder",
      "Data Modeling",
      "Process Automation",
      "Reports & Dashboards",
    ],
    "Clouds & Platforms": [
      "Sales Cloud",
      "Service Cloud",
      "Experience Cloud",
      "Health Cloud",
      "Pardot",
    ],
    "Integrations & APIs": [
      "REST/SOAP Web Services",
      "OAuth 2.0",
      "Named Credentials",
      "Data Loader",
      "Jitterbit",
    ],
    "DevOps & CI/CD": [
      "Gearset",
      "GitHub",
      "GitLab",
      "Jenkins",
      "SFDX",
      "VS Code",
    ],
    "Other Technologies": [
      "JavaScript",
      "PHP",
      "Bootstrap",
      "SQL Server",
      "Web Scraping",
      "Advanced MS Excel",
    ],
  },

  experience: [
    {
      project: "BCP",
      company: "Banco de Crédito del Perú (BCP)",
      location: "Peru",
      role: "Salesforce Developer",
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
    { name: "English", level: "Advanced / Professional Full Professional Proficiency" },
    { name: "Spanish", level: "Native" },
  ],

  certifications: [
    "Salesforce Certified AI Associate",
    "Salesforce Certified Platform Foundations",
    "In Progress / Scheduled: Salesforce Certified Platform App Builder",
    "In Progress / Scheduled: Salesforce Certified Platform Developer I",
  ],

  education: {
    institution: "Universidad Señor de Sipón",
    location: "Peru",
    degree: "Bachelor of Science in Systems Engineering",
    year: "Graduated (2017)",
  },
};

function getBadge(name: string): { letter: string; bg: string } {
  const map: Record<string, { letter: string; bg: string }> = {
    "BCP": { letter: "B", bg: "bg-blue-600" },
    "Clínica Alemana (CAS)": { letter: "A", bg: "bg-emerald-600" },
    "IDB (Inter-American Development Bank)": { letter: "I", bg: "bg-purple-600" },
    "Mercado Libre": { letter: "M", bg: "bg-amber-500" },
    "ME Elecmetal": { letter: "E", bg: "bg-slate-600" },
    "Disney ABC M360": { letter: "D", bg: "bg-pink-600" },
    "AVANXO": { letter: "V", bg: "bg-indigo-600" },
    "Universidad del Rosario": { letter: "R", bg: "bg-green-600" },
    "CloudCreations - SERTPRO 360": { letter: "S", bg: "bg-cyan-600" },
    "Various Companies": { letter: "M", bg: "bg-gray-600" },
  }
  return map[name] || { letter: name.charAt(0).toUpperCase(), bg: "bg-gray-500" }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-1 mb-4 uppercase tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{resume.name}</h1>
          <p className="text-xl text-blue-700 font-semibold mt-1">{resume.title}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm text-gray-600">
            <span>{resume.location}</span>
            <span>{resume.phone}</span>
            <a href={`mailto:${resume.email}`} className="text-blue-600 hover:underline">
              {resume.email}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
            {resume.links.map((link, i) => (
              <a key={i} href={link.url} className="text-blue-600 hover:underline font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <Section title="Professional Summary">
          <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
        </Section>

        <Section title="Core Competencies & Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(resume.skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-800 text-sm uppercase mb-1">{category}</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-0.5">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Professional Experience">
          {resume.experience.map((exp, i) => {
            const badge = getBadge(exp.project)
            return (
              <div key={i} className="mb-6 flex items-start gap-3">
                <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm mt-0.5 ${badge.bg}`}>
                  {badge.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exp.project}</h3>
                      <p className="text-blue-700 font-medium">
                        {exp.role}{exp.project !== exp.company ? ` \u00B7 ${exp.company}` : ''}{exp.location ? ` | ${exp.location}` : ''}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium whitespace-nowrap mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </Section>

        <Section title="Languages">
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            {resume.languages.map((lang, i) => (
              <li key={i}>
                <span className="font-semibold">{lang.name}:</span> {lang.level}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Certifications">
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            {resume.certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          <div>
            <h3 className="text-lg font-bold text-gray-800">{resume.education.degree}</h3>
            <p className="text-blue-700 font-medium">{resume.education.institution} | {resume.education.location}</p>
            <p className="text-sm text-gray-500">{resume.education.year}</p>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;
