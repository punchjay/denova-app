import styled from 'styled-components'

const ParagraphOne = styled.p<{ $leadIn?: boolean }>`
  margin: 0 auto;
  padding: 0 0 1.875rem 0;
  max-width: 43rem;
  font-size: 1.11rem;
  font-weight: 300;
  line-height: 1.67rem;
  color: ${(props) => (props.$leadIn ? '#fff' : '#c1cfd7')};
`

export default ParagraphOne
