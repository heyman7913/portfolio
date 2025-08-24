import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github } from '../helpers/links';
import {
  python,
  matlab,
  html,
  css,
  javaScript,
  flask,
  mySql,
  mentorship,
  collaboration,
  timeManagement,
  SQLite,
} from '../helpers/skills';
// hello
const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Undergraduate Teaching Assistant | Discrete Math for Computer Science',
      company: 'College of Computing, Georgia Instutute of Technology',
      image: import('@/assets/logos/gatech-logo.png'),
      dates: [new Date('2025.08'), null],
      description: `
        - Provided one-on-one academic support to over 500+ pupils via office hours and Ed Discussion, improving student performance and confidence in problem-solving.
        - Graded homework assignments and exams, ensuring fairness and alignment with course objectives.
        - Conducted weekly review sessions, enhancing students' understanding of complex topics.
        - Collaborated with faculty and other TAs to develop course material and conduct exam review sessions.
      `,
      tagsList: {
        title: 'Soft Skills',
        tags: [mentorship(), collaboration(), timeManagement()],
      },
      links: [],
    },
    {
      role: 'Software Engineer | IVA Lab',
      company: 'Undergrduate Research Opportunities Program (UROP), Georgia Institute of Technology',
      image: import('@/assets/logos/gatech-logo.png'),
      dates: [new Date('2025.08'), null],
      description: `
        - Developing features for a web app that provides indoor navigation for individuals with disabilities, including AR-based guidance and precise route visualization.
        - Contributing to the translation of MATLAB image-processing pipelines into Python to generate accurate indoor floor plans from robot-collected mapping data.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), matlab()],
      },
      links: [],
    },
    {
      role: 'Software Engineer | Experimental Flights',
      company: 'Vertically Integrated Projects, Georgia Institute of Technology',
      image: import('@/assets/logos/vip-logo.jpeg'),
      dates: [new Date('2025.08'), null],
      description: `

      `,
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [],
    },
    {
      role: 'Lead Software Engineer & System Architect',
      company: 'Freelance Full Stack Developer',
      dates: [new Date('2023.07'), new Date('2023.12')],
      description: `
        - Designed and launched a Flask + SQLAlchemy web platform with multi-role authentication (admin, employee, customer) for a pharmacy, streamlining 100+ inventory and order operations.
        - Built dynamic inventory tracking, automated PDF reporting (cut manual report prep time by ~70%), and integrated email notifications, boosting order processing efficiency.
        - Delivered a responsive HTML/CSS/JavaScript frontend that reduced order entry errors by 30% and improved usability across devices.
        - Architected a scalable backend backed by SQLite, ensuring reliability and smooth handling of concurrent operations.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [html(), css(), javaScript(), flask(), python(), SQLite()],
      },
      links: [github({ url: 'https://github.com/heyman7913/Stock-Management-and-Order-Placement-System' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
