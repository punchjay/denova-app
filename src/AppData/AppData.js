import Gear from './Img/gear.png'
import Tool from './Img/tool.png'
import Insta from './Img/instagram-icon.png'
import ImgXbox from './Img/xbox-ss.png'
import ImgJcrew from './Img/jcrew-ss.png'
import ImgSec01 from './Img/secs01-ss.png'
import ImgSec02 from './Img/secs02-ss.png'
import ImgIon from './Img/ion-ss.png'
import ImgYahoo from './Img/yahoo02-ss.png'

export const appData = {
  cardOne: {
    HEADER_ONE: "Hello! I'm a...",
    PAR_ONE: 'Software Developer, Building and Maintaining React Apps',
    LEAD_IN: true,
    PAR_TWO:
      'Wiring up .NET high level APIs into front-end containers and reducers. Building reusable React user interfaces and shared component libraries. Developed web-based interactive training for Microsoft, Yahoo!, Amazon, J.Crew, and Agilent Technologies.',
    IMG_ICON: Gear,
  },
  cardTwo: {
    HEADER_ONE: 'Stuff',
    PAR_ONE:
      'Full portfolio available upon request (Non Disclosure Agreements).',
    GALLERY_DATA: [
      { name: 'Xbox', image: ImgXbox },
      { name: 'JCrew', image: ImgJcrew },
      { name: 'Second Step', image: ImgSec01 },
      { name: 'Second Step Dashboard', image: ImgSec02 },
      { name: 'Agilent', image: ImgIon },
      { name: 'Yahoo!', image: ImgYahoo },
    ],
  },
  cardThree: {
    HEADER_ONE: 'Tools',
    PAR_ONE:
      'React.js, Redux, Styled Components, JavaScript, Git, Jest, Azure, DevOps, Teraform, SQL, Mongo DB, and pair programming .NET Core',
    PAR_TWO:
      'Closely collaborating with back-end Engineers and Designers, as a sole front-end Developer or in high velocity Agile Teams.',
    IMG_ICON: Tool,
  },
  footer: {
    APP_NAME: 'Denova',
    EMAIL: 'edwardgibble@gmail.com',
    LINK: 'https://instagram.com/punchjay',
    IMG_ICON: Insta,
  },
}

export default appData
