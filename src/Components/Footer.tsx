import ParagraphFooter from './ParagraphFooter'
import LinkFooter from './LinkFooter'
import ImageFooter from './ImageFooter'
import type { FooterData } from '../AppData/types'

interface Props {
  appData: FooterData
}

const Footer = ({ appData }: Props) => {
  return (
    <ParagraphFooter>
      {'©'} {new Date().getFullYear()} {appData.APP_NAME} |{' '}
      <LinkFooter href={`mailto:${appData.EMAIL}?Subject=Hello!`}>
        {appData.EMAIL}
      </LinkFooter>
      <LinkFooter href={appData.LINK} target="_blank" rel="noopener noreferrer">
        <ImageFooter
          alt="GitHub profile"
          src={require(`../AppData/Img/${appData.IMG_ICON}.png`)}
          title="GitHub profile"
        />
      </LinkFooter>
    </ParagraphFooter>
  )
}

export default Footer
