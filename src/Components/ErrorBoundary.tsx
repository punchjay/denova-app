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
        <p style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>
          {this.state.error}
        </p>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
