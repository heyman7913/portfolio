import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'BSc. Computer Engineering',
      institution: 'Georgia Institute of Technology',
      image: import('@/assets/logos/gatech-logo.png'),
      dates: [new Date('2024.08'), new Date('2027.12')],
      description:
        'Threads: Information Internetworks and Computing Hardware & Emerging Architectures\n Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Design & Analysis of Algorithms, Digital System Design & Lab, Programming Hardare/Software Systems, Intro to CS, Discrete Math for CS, Linear Algebra with Abstract Vector Spaces',
      links: [],
    },
    {
      title: 'International Baccalaureate (IB) Diploma, Advanced Placement, IGCSE',
      institution: 'Singapore International School, Mumbai',
      image: import('@/assets/logos/sis-logo.png'),
      dates: [new Date('2019.08'), new Date('2024.05')],
      description:
        "Salutatorian of the Class of 2024, Chairman's Scholarship Awardee\nIB Grade: 44/45; APs: 5 in AP Micro, Calculus BC, Physics 1; IGCSE: 10A*",
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
