import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, instagram } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Himansh Chitkara',
  role: 'Software Developer',
  details: [
    { label: 'Phone', value: '+1 404 956 1438', url: '' },
    { label: 'From', value: 'Atlanta, GA', url: '' },
    { label: 'Email', value: 'himanshchitkara77 [at] gmail [dot] com', url: '' },
    {
      label: 'Resume',
      value: 'Click Me!',
      url: 'https://drive.google.com/file/d/14Cpq-H1mPh-DQFntxlF9raTmQUSCwpnI/view?usp=sharing',
    },
  ],
  description:
    'I’m a junior Computer Engineering student at Georgia Tech, pursuing threads in Information Internetworks and Computing Hardware & Emerging Architectures (CHEA). I’m currently a TA for CS 2050 (Discrete Math), a Software Developer in the Experimental Flights VIP program, and an undergraduate researcher at the IVA Lab, where I’m building image processing algorithms for robotic mapping and an AR-based navigation system. Outside research, I’ve developed projects like Echoes, a React-Native app that uses speech-to-text, vector embeddings, and a RAG LLM to deliver context-aware mental health support, and PomoFlow, a Chrome extension with focus detection and dynamic site blocking. I’m passionate about engineering systems that merge hardware, software, and intelligence to tackle real-world challenges.',
  tags: [
    { name: 'Looking for Internships/Co-ops' },
    { name: 'Interested in Hackathons' },
    { name: 'Building EchoesAI' },
  ],
  links: [
    github({ url: 'https://github.com/heyman7913' }),
    linkedin({ url: 'https://www.linkedin.com/in/himanshchitkara/' }),
    instagram({ url: 'https://www.instagram.com/himanshchitkara/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
