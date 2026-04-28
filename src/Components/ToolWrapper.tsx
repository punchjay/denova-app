import styled from 'styled-components'

const ToolWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &:hover > span {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`

export default ToolWrapper
