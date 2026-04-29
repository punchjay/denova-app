import type { AppData, NotFoundData } from './types'

export const appData: AppData = [
  {
    HEADER_ONE: "Hello! I'm a...",
    PAR_ONE: 'Front End Developer, Building and Maintaining React Apps',
    LEAD_IN: true,
    PAR_TWO:
      'Building reusable interfaces and component libraries in close collaboration with Back End Engineers and Designers — as a solo Front End Developer or within high-velocity Agile teams — pair programming with humans and Claude.ai',
    PROFILE_IMG: 'profile',
    PROFILE_NAME: 'Jay Gibble GitHub profile photo',
    GITHUB_LINK: 'https://github.com/punchjay',
  },
  {
    HEADER_ONE: 'Tools & Stuff',
    PAR_ONE:
      'My stack includes React, Styled Components, Git, Azure, SQL, and MongoDB. I work closely with Figma for design handoffs, write thorough tests, and use Claude.ai as a pair programming partner to move faster and think sharper.',
    GALLERY_DATA: [
      { name: 'React', image: 'react', url: 'https://react.dev' },
      {
        name: 'Styled Components',
        image: 'styled',
        url: 'https://styled-components.com',
      },
      { name: 'Git', image: 'git', url: 'https://git-scm.com' },
      {
        name: 'VS Code',
        image: 'vscode',
        url: 'https://code.visualstudio.com',
      },
      { name: '.Net', image: 'net', url: 'https://dotnet.microsoft.com' },
      { name: 'Azure', image: 'azure', url: 'https://azure.microsoft.com' },
      { name: 'Claude.ai', image: 'claude', url: 'https://claude.ai' },
      { name: 'Figma', image: 'figma', url: 'https://figma.com' },
    ],
  },
  {
    HEADER_ONE: 'Projects',
    PAR_ONE: 'Project portfolio available upon request.',
    GALLERY_DATA: [
      { name: 'Xbox', image: 'xbox-ss' },
      { name: 'JCrew', image: 'jcrew-ss' },
      { name: 'Second Step Dashboard', image: 'secs02-ss' },
      { name: 'Agilent', image: 'ion-ss' },
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
