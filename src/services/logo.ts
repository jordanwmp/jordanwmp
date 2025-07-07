export const logos = [
  {
    name: 'github',
    icon: 'fa-github',
  },
  {
    name: 'linkedin',
    icon: 'fa-linkedin',
  },
  {
    name: 'angular',
    icon: 'vi-file-type-angular',
  },
  {
    name: 'ionic',
    icon: 'vi-file-type-ionic',
  },
  {
    name: 'vue',
    icon: 'vi-file-type-vue',
  },
  {
    name: 'react',
    icon: 'vi-file-type-reactjs',
  },
  {
    //ViFileTypeNode
    name: 'node',
    icon: 'vi-file-type-node',
  },
  {
    name: 'sass',
    icon: 'vi-file-type-sass',
  },
  {
    name: 'webpack',
    icon: 'si-webpack '
  },
  {
    name: 'nest',
    icon: 'vi-file-type-nestjs'
  }
]

export const getLogoByName = (name: string) => {
  return logos.find(logo => logo.name === name)!
}