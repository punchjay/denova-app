import styled from 'styled-components'

const HeroLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    text-align: left;
  }
`

export default HeroLayout
