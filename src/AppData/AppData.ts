import type { AppData } from './types'

export const appData: AppData = [
  {
    HEADER_ONE: "Hello! I'm a...",
    PAR_ONE: 'Front End Developer, Building and Maintaining React Apps',
    LEAD_IN: true,
    PAR_TWO:
      'Building reusable React user interfaces and shared component libraries. Closely collaborating with Back End Engineers and Designers, as a sole Front End Developer or in high velocity Agile Teams.  Pair Programing with Humans and Claude.ai.',
    PROFILE_IMG: 'profile',
    PROFILE_NAME: 'Jay Gibble GitHub profile photo',
    GITHUB_LINK: 'https://github.com/punchjay',
  },
  {
    HEADER_ONE: 'Tools & Stuff',
    PAR_ONE:
      'React, Styled Components, Redux, JavaScript, Git, Jest, Azure, DevOps, SQL, Mongo DB, and pair programming .NET',
    GALLERY_DATA: [
      { name: 'React', image: 'react', url: 'https://react.dev' },
      { name: 'Styled Components', image: 'styled', url: 'https://styled-components.com' },
      { name: 'Figma', image: 'figma', url: 'https://figma.com' },
      { name: 'Claude.ai', image: 'claude', url: 'https://claude.ai' },
      { name: 'VS Code', image: 'vscode', url: 'https://code.visualstudio.com' },
      { name: 'Git', image: 'git', url: 'https://git-scm.com' },
      { name: '.Net', image: 'net', url: 'https://dotnet.microsoft.com' },
      { name: 'Azure', image: 'azure', url: 'https://azure.microsoft.com' },
    ],
  },
  {
    HEADER_ONE: 'Projects',
    PAR_ONE: 'Project portfolio available upon request.',
    GALLERY_DATA: [
      { name: 'Xbox', image: 'xbox-ss' },
      { name: 'JCrew', image: 'jcrew-ss' },
      { name: 'Second Step', image: 'secs02-ss' },
      { name: 'Second Step Dashboard', image: 'secs02-ss' },
      { name: 'Agilent', image: 'ion-ss' },
      { name: 'Yahoo!', image: 'yahoo02-ss' },
    ],
  },
  {
    APP_NAME: 'Denova',
    EMAIL: 'edwardgibble@gmail.com',
    LINK: 'https://github.com/punchjay',
    IMG_ICON: 'github-icon',
  },
]

export default appData
