import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  java,
  postgreSql,
  SQLite,
  flask,
  python,
  reactNative,
  supabase,
  typescript,
  firebase,
  nextJs,
  kotlin,
  expoGo,
  geminiAPI,
  matlab,
  c,
  vhdl,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        java({
          level: 5,
        }),
        python({
          level: 5,
        }),
        flask({
          level: 3,
        }),
        supabase({
          level: 5,
        }),
        firebase({
          level: 5,
        }),
        SQLite({
          level: 4,
        }),
        expoGo({
          level: 3,
        }),
        typescript({
          level: 3,
        }),
        geminiAPI({
          level: 2,
        }),
        kotlin({
          level: 2,
        }),
        reactNative({
          level: 2,
        }),
        nextJs({
          level: 2,
        }),
        postgreSql({ level: 2 }),
      ],
    },
    {
      title: "I'm currently learning",
      skills: [matlab(), c(), vhdl()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:us', name: 'English ' },
        { icon: 'circle-flags:in', name: 'Hindi' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
