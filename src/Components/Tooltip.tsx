import styled from 'styled-components'
import { colors } from './colors'

const Tooltip = styled.span`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background: rgba(20, 23, 28, 0.92);
  border: 1px solid rgba(32, 187, 252, 0.3);
  border-radius: 5px;
  color: ${colors.greyLight};
  font-size: 0.72rem;
  white-space: nowrap;
  padding: 3px 8px;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
  z-index: 10;
`

export default Tooltip
