// All site text lives here, copied verbatim from the original site. Edit content here, not in components.
export const site = {
  name: 'Syed Imad Ali Hashmi',
  title: 'Syed Imad Ali Hashmi • Junior Python Developer Portfolio',
  description: 'Portfolio of Syed Imad Ali Hashmi — Junior Python Developer & Computer Science Student based in Karachi, Pakistan. Seeking internship & entry-level opportunities.',
  brand: { name: 'Syed Imad', tag: 'Python Dev' },
  email: 's.imadali2006@gmail.com', phone: '+92 347 0761891', phoneHref: 'tel:+923470761891', whatsapp: 'https://wa.me/923470761891',
  github: 'https://github.com', linkedin: 'https://linkedin.com',
};
export const nav = [
  { label: 'Home', href: '#home' }, { label: 'Projects', href: '#projects' }, { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' }, { label: 'Contact', href: '#contact' },
];
export const hero = {
  badge: 'Available for Internship & Junior Roles',
  headline: 'Building clean, efficient code with Python & Modern Web.',
  intro: 'Motivated Computer Science student with a strong interest in Python programming, web development, and software engineering. Seeking an internship or entry-level opportunity in a startup to learn, work hard, and contribute.',
  buttons: { work: 'View my work →', letter: 'Cover Letter', contact: 'Get in touch' },
  facts: [
    { icon: '📍', text: 'Karachi, Pakistan' },
    { icon: '🎓', text: 'Intermediate (CS) — D.J. Science Govt. College' },
    { icon: '📞', text: '+92 347 0761891', href: 'tel:+923470761891' },
    { icon: '✉️', text: 's.imadali2006@gmail.com', href: 'mailto:s.imadali2006@gmail.com' },
  ],
  tags: ['Junior Python Dev', 'FastAPI & Web Dev', 'D.J. Science College'],
  stats: [
    { big: 'Python', small: 'Core OOP & Automation' }, { big: 'FastAPI', small: 'REST API Framework' },
    { big: 'D.J. Science', small: 'Govt. College (CS)' }, { big: '100%', small: 'Dedication & Curiosity' },
  ],
};
export const projects = {
  eyebrow: 'Portfolio & Work', heading: 'Featured projects & implementations', all: 'View all projects →',
  details: 'Explore project details →', repo: 'GitHub repository →',
  items: [
    { title: 'FastAPI Student & Task Management API', body: 'A high-performance backend REST service developed using Python and FastAPI. Implements modular routing, Pydantic data validation schemas, CRUD persistence operations, and auto-generated Swagger UI interactive documentation.', tags: ['FastAPI', 'Python 3', 'Pydantic', 'RESTful API', 'Swagger UI', 'CRUD'] },
    { title: 'Python Data Automation & Excel Suite', body: 'An automated spreadsheet processor built with Python that ingests tabular business datasets, cleans incomplete records, computes statistical summaries, and exports styled, professional multi-tab Excel reports.', tags: ['Python', 'MS Excel', 'OpenPyXL', 'Data Cleaning', 'Automation Scripts'] },
    { title: 'Responsive Web Interfaces & Utility Apps', body: 'Modern, accessible frontend projects built with semantic HTML5, CSS3 (Flexbox & CSS Grid), and JavaScript. Designed with mobile-first responsiveness, clean UI patterns, and dark-mode glassmorphic aesthetics.', tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Glassmorphism'] },
  ],
};
export const skills = {
  eyebrow: 'Skills & Tech Stack', heading: 'Practical skills, continuous growth',
  body: 'Strong foundation in Computer Science fundamentals, Python backend scripting, web essentials, and spreadsheet data manipulation. Always practicing and expanding knowledge every single day.',
  buttons: { all: 'See all skills', discuss: 'Discuss an Opportunity' },
  items: [{ name: 'Python', note: 'Core & OOP' }, { name: 'FastAPI', note: 'Basic REST APIs' }, { name: 'HTML5 & CSS3', note: 'Web Interfaces' }, { name: 'MS Excel & MS Office', note: 'Spreadsheets & Docs' }],
};
export const coverLetter = {
  eyebrow: 'Application Statement', heading: 'Cover Letter Preview', copy: 'Copy to Clipboard 📋', full: 'Full View →',
  name: 'Syed Imad Ali Hashmi', role: 'Junior Python Developer | Internship Seeker • Karachi, Pakistan', badge: 'Official Application',
  paragraphs: ['Dear Hiring Manager,', 'I am applying for an Internship or Junior Python Developer position. I am currently studying Intermediate in Computer Science and have skills in Python, HTML, CSS, FastAPI, and Microsoft Office. I am eager to learn, work hard, and contribute to your team.', 'Thank you for your consideration.'],
  signoff: 'Sincerely,',
};
export const education = {
  eyebrow: 'Academic Background', heading: 'Education & Qualifications', about: 'About page →',
  items: [
    { when: '2025 – Present', title: 'Intermediate (Computer Science)', where: 'D.J. Science Govt. College, Karachi', body: "Studying core Computer Science, programming concepts, mathematics, and logical problem-solving in one of Karachi's premier public science colleges." },
    { when: 'Matriculation', title: 'Matric (Computer Science)', where: 'Al-Badar Higher Secondary School, Karachi', body: 'Built solid mathematical and computational fundamentals that sparked my passion for software engineering and Python.' },
  ],
  extra: '⭐ Additional Qualification: Hafiz-e-Quran',
  languagesEyebrow: 'Communication', languagesHeading: 'Languages',
  languages: [{ name: 'Urdu', note: 'Native Language', level: 'Native' }, { name: 'English', note: 'Professional Proficiency', level: 'Professional' }],
};
export const cta = { heading: 'Looking for an energetic Junior Python Developer?', body: "I am actively seeking an internship or entry-level opportunity in Karachi or remote. Let's discuss how I can contribute to your team.", button: 'Send a message' };
export const footer = { tagline: 'Junior Python Developer | Computer Science Student', copy: '© 2026 Syed Imad Ali Hashmi. All rights reserved.', built: 'Designed & built with clean HTML5, CSS3, & JavaScript. Karachi, Pakistan 💙' };
