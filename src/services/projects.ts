import { getLogoByName } from "./logo";

type Technologies = 'Angular' | 'React' | 'Vue' | 'Node.js' | 
                    'Webpack' | 'SASS' | 'Ionic Framework' | 
                    'React Native' | 'Nest.js' | 'Next.js' | 
                    'Express' | 'HTML' | 'CSS' |  'SASS' |
                    'RxJS' | 'TypeScript' | 'JavaScript' |
                    'API';

export interface Project {
  id: string;
  name: string;
  description: string;
  logo: string;
  technologies: Technologies[];
  links?: {
    github:string | null;
    live: string | null;
  }
}

export interface PaginatedResult<T> {
  data: T[]
  total: number
  offset: number
  limit: number
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Sass Agency Website',
    description: 'Website of an IT agency.',
    logo: getLogoByName('sass')?.icon,
    technologies: ['HTML', 'CSS', 'SASS'],
    links: {
      github: 'https://github.com/jordanwmp/sass-agency-website',
      live: 'https://jordanwmp.github.io/sass-agency-website/'
    }
  },
  {
    id: '2',
    name: 'Phonebook',
    description: 'A phonebook with Angular and RxJS.',
    logo: getLogoByName('angular')?.icon,
    technologies: ['Angular', 'RxJS'],
    links: {
      github: 'https://github.com/jordanwmp/angular-rxjs-phonebook',
      live: 'https://jordanwmp.github.io/angular-rxjs-phonebook/'
    }
  },
  {
    id: '3',
    name: 'RDO Digital',
    description: 'Android application for construction management.',
    logo: getLogoByName('ionic')?.icon,
    technologies: ['Ionic Framework', 'Vue'],
    links: {
      github: null,
      live: 'rdo-digital.web.app'
    }
  },
  {
    id: '4',
    name: 'Ion PokeDéx',
    description: 'A PokéDex with Ionic and Angular.',
    logo: getLogoByName('ionic')?.icon,
    technologies: ['Ionic Framework', 'API'],
    links: {
      github: 'https://github.com/jordanwmp/projeto-pokeapi',
      live: null
    }
  },
  {
    id: '5',
    name: 'Brazilian States API',
    description: 'API that returns data from Brazilian States.',
    logo: getLogoByName('node')?.icon,
    technologies: ['Node.js', 'Express'],
    links: {
      github: 'https://github.com/jordanwmp/api-rest-informacoes-geograficas-estados-brasileiros',
      live: null
    }
  },
  {
    id: '6',
    name: 'Vue Movie',
    description: 'Movie website with Vue.js and API call.',
    logo: getLogoByName('vue')?.icon,
    technologies: ['Vue', 'API'],
    links: {
      github: 'https://github.com/jordanwmp/vue-movie',
      live: null
    }
  },
  {
    id: 'proj-007',
    name: 'CodeQuiz',
    description: 'Ferramenta de quiz de programação com estatísticas de desempenho.',
    logo: 'code-quiz.svg',
    technologies: ['Angular', 'Node.js', 'SASS'],
  },
  {
    id: 'proj-008',
    name: 'EventPulse',
    description: 'Dashboard de eventos ao vivo com visualização de dados analíticos.',
    logo: 'event-pulse.svg',
    technologies: ['Vue', 'Express', 'SASS'],
  },
  {
    id: 'proj-009',
    name: 'FoodieFind',
    description: 'App de descoberta de restaurantes locais com mapas interativos.',
    logo: 'foodie-find.svg',
    technologies: ['React Native', 'Node.js', 'SASS'],
  },
  {
    id: 'proj-010',
    name: 'HealthHub',
    description: 'Portal de gestão de saúde com agendamento de consultas e histórico médico.',
    logo: 'health-hub.svg',
    technologies: ['Next.js', 'Nest.js', 'SASS'],
  },
  {
    id: 'proj-011',
    name: 'PhotoSnap',
    description: 'Galeria de fotos em nuvem com filtros e compartilhamento social.',
    logo: 'photo-snap.svg',
    technologies: ['Vue', 'Webpack', 'SASS'],
  },
  {
    id: 'proj-012',
    name: 'MusicWave',
    description: 'Player de música streaming com playlists colaborativas.',
    logo: 'music-wave.svg',
    technologies: ['React', 'Express', 'SASS'],
  },
  {
    id: 'proj-013',
    name: 'BlogSphere',
    description: 'CMS para blogs com editor WYSIWYG e SEO integrado.',
    logo: 'blog-sphere.svg',
    technologies: ['Vue', 'Node.js', 'SASS'],
  },
  {
    id: 'proj-014',
    name: 'DevTracker',
    description: 'Painel de métricas de desenvolvimento integrado ao Git e CI/CD.',
    logo: 'dev-tracker.svg',
    technologies: ['React', 'Node.js', 'Webpack'],
  },
  {
    id: 'proj-015',
    name: 'FinanceFlow',
    description: 'Aplicativo de finanças pessoais com gráficos de orçamento.',
    logo: 'finance-flow.svg',
    technologies: ['Angular', 'Express', 'SASS'],
  },
];

/**
 * Retorna um subconjunto paginado de projetos.
 * @param offset índice inicial (0-based)
 * @param limit número máximo de itens a retornar
 */
export const paginateProjects = (
  offset: number,
  limit: number
): PaginatedResult<Project> => {
  const total = projects.length
  // Garantir que offset e limit sejam válidos
  const safeOffset = Math.max(0, Math.min(offset, total))
  const safeLimit = Math.max(1, limit)

  const data = projects.slice(safeOffset, safeOffset + safeLimit)

  return {
    data,
    total,
    offset: safeOffset,
    limit: safeLimit
  }
}

export const techs = [
  {
    name: 'Angular',
    icon: 'angular'
  },
  {
    name: 'Ionic Framework',
    icon: 'ionic',
  },
  {
    name: 'React',
    icon: 'react',
  },
  // {
  //   name: 'React Native',
  //   icon: 'react-native',
  // },
  {
    name: 'Vue',
    icon: 'vue',
  },
  {
    name: 'Node.js',
    icon: 'node',
  }
]
