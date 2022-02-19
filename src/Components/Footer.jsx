import PropTypes from 'prop-types'
import ParagraphFooter from './ParagraphFooter'
import LinkFooter from './LinkFooter'

const Footer = ({ appData }) => {
  return (
    <>
      <ParagraphFooter>
        {'\u00A9'} {new Date().getFullYear()} {appData.APP} |{' '}
        <LinkFooter
          href={`mailto:${appData.EMAIL}?Subject=Hello!`}
          target="_top"
        >
          {appData.EMAIL}
        </LinkFooter>
        <LinkFooter href="https://instagram.com/punchjay" target="_blank">
          <img src={appData.IMG_INSTA} width="20" />
        </LinkFooter>
      </ParagraphFooter>
    </>
  )
}

Footer.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default Footer
