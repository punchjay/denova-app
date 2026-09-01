import { Component, type ReactNode } from 'react'
import { colors } from './colors'

interface Props {
  children: ReactNode
}

interface State {
  error: string | null
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(err: Error): State {
    return { error: err.message }
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            color: colors.greyMid,
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <p>{this.state.error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.25rem',
              background: 'transparent',
              color: colors.greyMid,
              border: `1px solid ${colors.greyMid}`,
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Retry
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
