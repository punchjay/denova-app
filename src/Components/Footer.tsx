import ImageFooter from './ImageFooter'
import LinkFooter from './LinkFooter'
import ParagraphFooter from './ParagraphFooter'
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
          loading="lazy"
        />
      </LinkFooter>
    </ParagraphFooter>
  )
}

export default Footer
