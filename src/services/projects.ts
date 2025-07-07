import { getLogoByName } from "./logo";

export type Technologies = 'Angular' |  'React' | 'Vue' | 'Node.js' |
  'Webpack' | 'SASS' | 'Ionic Framework' |
  'React Native' | 'Nest.js' | 'Next.js' |
  'Express' | 'HTML' | 'CSS' | 'SASS' |
  'RxJS' | 'TypeScript' | 'JavaScript' |
  'API' | 'NgRx' | 'RxJS' | 'Jasmine' |
  'Jest' | 'Firebase';

export type Category = 'all' | 'frontend' | 'mobile' | 'api'

export interface Project {
  id: string;
  name: string;
  description: string;
  logo: string;
  technologies: Technologies[];
  category: Category[],
  links: {
    github: string | null;
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
    category: ['frontend'],
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
    category: ['frontend'],
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
    technologies: ['Ionic Framework', 'Vue', 'Firebase'],
    category: ['mobile'],
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
    technologies: ['Ionic Framework', 'Angular', 'API'],
    category: ['mobile'],
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
    category: ['api'],
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
    category: ['frontend'],
    links: {
      github: 'https://github.com/jordanwmp/vue-movie',
      live: null
    }
  },
  {
    id: '7',
    name: 'Angular Automatic Testing',
    description: 'Examples of automated testing with Angular and Jasmine.',
    category: ['frontend'],
    logo: getLogoByName('angular')?.icon,
    technologies: ['Angular', 'Jasmine'],
    links: {
      github: 'https://github.com/jordanwmp/angular-jasmine-automatic-tests',
      live: null
    }
  },
  {
    id: '8',
    name: 'NgRX Counter',
    description: 'A stateful counter with Angular and NgRX.',
    logo: getLogoByName('angular')?.icon,
    technologies: ['Angular', 'NgRx'],
    category: ['frontend'],
    links: {
      live:'https://jordanwmp.github.io/angular-ngrx-counter/',
      github: 'https://github.com/jordanwmp/angular-ngrx-counter'
    }
  },
  {
    id: '9',
    name: 'Angular Simple Counter',
    description: 'A project to practice the main concepts of Angular.',
    logo: getLogoByName('angular')?.icon,
    technologies: ['Angular'],
    category: ['frontend'],
    links: {
      github: 'https://github.com/jordanwmp/angular-simple-counter',
      live: 'https://jordanwmp.github.io/angular-simple-counter/'
    } 
  },
  {
    id: '10',
    name: 'Vue To Do List',
    description: 'App To Do list with Vue.js and reactivity.',
    logo: getLogoByName('vue')?.icon,
    technologies: ['Vue'],
    category: ['frontend'],
    links: {
      github: 'https://github.com/jordanwmp/vue.js-todo-list',
      live: null
    }
  },
  {
    id: '11',
    name: 'Timer',
    description: 'A Timer with to start, pause, and reset a timer, as well as save and clear pause history.',
    logo: getLogoByName('vue')?.icon,
    technologies: ['Vue'],
    category: ['frontend'],
    links: {
      github: 'https://github.com/jordanwmp/vue.js-simple-timer',
      live: null
    }
  },
  {
    id: '12',
    name: 'Algorithm and Data Structure',
    description: 'The main algorithms and data structures with Javascript.',
    logo: '',
    technologies: ['JavaScript'],
    category: ['all'],
    links: {
      github: 'https://github.com/jordanwmp/algorithm-and-data-structure',
      live: null
    }
  },
  {
    id: '13',
    name: 'Event Manager API',
    description: 'API with NestJs for event management, with authentication and authorization.',
    logo: getLogoByName('nest')?.icon,
    technologies: ['Node.js', 'Nest.js'],
    category: ['api'],
    links: {
      github: 'https://github.com/jordanwmp/nestjs-event-manager-api',
      live: null
    }
  },
  {
    id: '14',
    name: 'Nest Basic API',
    description: 'Simple API with Nest.js fundamentals.',
    logo: getLogoByName('nest')?.icon,
    technologies: ['Nest.js', 'Node.js'],
    category: ['api'],
    links: {
      github: 'https://github.com/jordanwmp/nestjs-basic-api',
      live: null
    }
  },
  {
    id: '15',
    name: 'Node Control Stock',
    description: 'Inventory control with Node.js, Sequelize MySQL.',
    logo: getLogoByName('node')?.icon,
    technologies: ['Node.js', 'Express'],
    category: ['api'],
    links: {
      github: 'https://github.com/jordanwmp/nodejs-control-stock',
      live: null
    }
  },
  {
    id: '16',
    name: 'Image Gallery',
    description: 'An image gallery powered by webpack and Unsplash API.',
    logo: getLogoByName('node')?.icon,
    technologies: ['Webpack', 'API', 'Node.js'],
    category: ['api'],
    links: {
      github: 'https://github.com/jordanwmp/webpack-image-gallery',
      live: null
    }
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

export const searchProject = (
  type: "category" | "framework",
  stack: Category | Technologies,
  offset: number,
  limit: number
) => {
  let filteredArray: Project[] = []

  if (type === "category") {
    if (stack === "all") {
      filteredArray = projects
    } else {
      filteredArray = projects.filter(project =>
        project.category?.includes(stack as Category)
      )
    }
  } else if (type === "framework") {
    filteredArray = projects.filter(project =>
      project.technologies.includes(stack as Technologies)
    )
  }

  const total = filteredArray.length
  const safeOffset = Math.max(0, Math.min(offset, total))
  const safeLimit = Math.max(1, limit)

  const paginated = filteredArray.slice(safeOffset, safeOffset + safeLimit)

  return {
    data: paginated,
    total,
    offset: safeOffset,
    limit: safeLimit
  }
}


// export const searchProject = (
//   type: "category" | "framework",
//   stack: Category | Technologies,
//   offset: number,
//   limit: number) => {

//   let filteredArray: any[];

//   if (type === "category") {

//     if (stack === "all") {
//       return paginateProjects(offset, limit).data
//     }

//     filteredArray = paginateProjects(offset, limit).data.filter(project => project.category?.includes(stack as Category))
//     return filteredArray
//   }
//   else if (type === "framework") {
//     filteredArray = paginateProjects(offset, limit).data.filter(project => project.technologies.includes(stack as Technologies))
//     return filteredArray
//   }

//   return undefined
// }

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
  },
  {
    name: 'Nest.js',
    icon: 'nest',
  }
]
