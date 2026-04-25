import { Component } from 'react'

class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(err) {
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
