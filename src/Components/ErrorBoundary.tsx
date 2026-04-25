import { Component, type ReactNode } from 'react'

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
        <div style={{ color: '#b1b3b4', textAlign: 'center', padding: '2rem' }}>
          <p>{this.state.error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.25rem',
              background: 'transparent',
              color: '#b1b3b4',
              border: '1px solid #b1b3b4',
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
