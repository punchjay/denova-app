import PropTypes from 'prop-types'
import ParagraphFooter from './ParagraphFooter'
import LinkFooter from './LinkFooter'
import ImageFooter from './ImageFooter'

const Footer = ({ appData }) => {
  return (
    <ParagraphFooter>
      {'\u00A9'} {new Date().getFullYear()} {appData.APP_NAME} |{' '}
      <LinkFooter href={`mailto:${appData.EMAIL}?Subject=Hello!`} target="_top">
        {appData.EMAIL}
      </LinkFooter>
      <LinkFooter href={appData.LINK} target="_blank">
        <ImageFooter src={appData.IMG_INSTA} />
      </LinkFooter>
    </ParagraphFooter>
  )
}

Footer.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default Footer
