import { keyframes } from 'styled-components'

// Distance the slide-up fade travels. Consumers that render a static
// pre-animation state (e.g. ScrollReveal) reuse this so there's no jump
// when the animation starts.
export const FADE_IN_OFFSET = '60px'

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(${FADE_IN_OFFSET});
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeInOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
