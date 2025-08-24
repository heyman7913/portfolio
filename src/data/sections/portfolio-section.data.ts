import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  reactNative,
  expoGo,
  geminiAPI,
  supabase,
  ragLLM,
  chromeAPI,
  html,
  javaScript,
  css,
  python,
  streamlit,
  java,
} from '../helpers/skills';
import { stream } from 'favicons';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },

  projects: [
    {
      name: 'EchoesAI',
      dates: [new Date('2025.07'), null],
      details: [
        { label: 'My role', value: ['Mobile Developer', 'Backend Developer'] },
        { label: 'Category', value: ['Mobile App '] },
      ],
      description: `
        - Developed Echoes, a mobile journaling app where users record daily memories that are transcribed, embedded, and retrieved through a RAG-powered LLM therapist to provide context-aware mental health support.
        - Integrated AssemblyAI Speech-to-Text for audio transcription and stored transcripts in Supabase with vector embeddings generated using Gemini 001.
        - Implemented cosine-similarity search over stored embeddings with pgvector to ground conversations in a user’s past experiences.
        - Designed a RAG pipeline leveraging Gemini Flash 1.5 for context-aware guidance, built on a scalable architecture.
        - Currently undergoing final testing and preparing for launch on the App Store.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [reactNative(), expoGo(), geminiAPI(), supabase(), ragLLM()],
      },
      links: [github({ url: '#' })],
    },

    {
      name: 'PomoFlow',
      image: import('@/assets/portfolio/PomoFlow.png'),
      dates: [new Date('2025.06'), null],
      details: [
        { label: 'My role', value: ['Full Stack Developer'] },
        { label: 'Category', value: ['Chrome Extension'] },
      ],
      description: `
        - Built a Chrome Extension (Manifest V3) with a persistent Pomodoro timer, leveraging background service-workers, chrome.storage for state management, and browser notifications for phase changes.
        - Developed a dynamic allowlist/blocklist system using chrome.declarativeNetRequest and chrome.tabs APIs to redirect blocked pages to a custom focus page.
        - Engineered an on-device focus-detection module by streaming webcam data to a bundled BlazeFace.js model via offscreen documents, ensuring privacy while dynamically adapting the timer based on user presence.
        - Designed the extension with a lightweight, modular architecture, enabling low-latency performance while integrating computer vision with productivity workflows.
        - Currently undergoing beta testing on the Chrome Web Store.`,
      tagsList: {
        title: 'Technologies',
        tags: [html(), css(), chromeAPI(), javaScript()],
      },
      links: [
        github({ url: 'https://github.com/heyman7913/PomoFlow' }),
        demo({ url: 'https://chromewebstore.google.com/detail/pomoflow/inaemojoafobmepdebhiajfllggbbjfj' }),
      ],
    },

    {
      name: 'noYOLO (your) Portfolio',
      dates: [new Date('2025.02'), new Date('2025.02')],
      details: [
        { label: 'My role', value: ['Full Stack Developer'] },
        { label: 'Category', value: ['Web App'] },
      ],
      description: `
        - Developed a full-stack portfolio analysis tool that recommends diversification strategies using real-time stock data and covariance-based risk modeling.
        - Frontend: Built a responsive Streamlit interface with modular navigation, improved performance with caching (reducing load times by ~75%), and implemented interactive Plotly candlestick charts with draggable timeframes from Polygon.io’s API.
        - Backend: Cleaned and normalized S&P 500 stock data, and designed an algorithm using the covariance matrix to detect underrepresented industries, surfacing the 3 least-diversified sectors for recommendation.
        `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), streamlit()],
      },
      links: [
        website({ url: 'https://devpost.com/software/no-yolo-portfolio' }),
        github({ url: 'https://github.com/heyman7913/no-yolo-portfolio' }),
      ],
    },

    {
      name: 'SafeSnap',
      dates: [new Date('2024.09'), new Date('2024.09')],
      details: [
        { label: 'My role', value: 'Developer' },
        { label: 'Category', value: ['SnapAR Lens'] },
      ],
      description: `
        - Awards: 2nd Place at HackGT 2024, 4th Place - Best Lens SnapAR Category.
        - Built an augmented reality simulation for SnapAR Spectacles that guides individuals to safety during natural disasters and trains them for emergency response.
        - Integrated 3D LiDAR scans into Lens Studio to overlay safe and dangerous zones in real environments, providing intuitive visual and audio guidance during earthquake scenarios.
        - Leveraged WebGL for real-time object detection and hazard simulation, enabling immersive, hands-on disaster preparedness training.
        `,
      tagsList: {
        title: 'Technologies',
        tags: [javaScript()],
      },
      links: [github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
