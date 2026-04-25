import type { AppData } from './types'

export const appData: AppData = [
  {
    HEADER_ONE: "Hello! I'm a...",
    PAR_ONE: 'Front End Developer, Building and Maintaining React Apps',
    LEAD_IN: true,
    PAR_TWO:
      'Building reusable React user interfaces and shared component libraries. Closely collaborating with Back End Engineers and Designers, as a sole Front End Developer or in high velocity Agile Teams.  Pair Programing with Humans and Claude.ai.',
    IMG_ICON: 'gear',
  },
  {
    HEADER_ONE: 'Tools & Stuff',
    PAR_ONE:
      'React, Styled Components, Redux, JavaScript, Git, Jest, Azure, DevOps, SQL, Mongo DB, and pair programming .NET',
    GALLERY_DATA: [
      { name: 'React', image: 'react' },
      { name: 'Styled Components', image: 'styled' },
      { name: 'Redux', image: 'redux' },
      { name: 'JavaScript', image: 'js' },
      { name: 'VS Code', image: 'vscode' },
      { name: 'Git', image: 'git' },
      { name: '.Net', image: 'net' },
      { name: 'Azure', image: 'azure' },
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
