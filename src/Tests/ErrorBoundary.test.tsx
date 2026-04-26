import { render } from '@testing-library/react'
import ErrorBoundary from '../Components/ErrorBoundary'

const originalConsoleError = console.error

beforeEach(() => {
  console.error = vi.fn()
})

afterEach(() => {
  console.error = originalConsoleError
})

const Throws = ({ message }: { message: string }) => {
  throw new Error(message)
}

it('renders children when there is no error', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <p>Hello</p>
    </ErrorBoundary>,
  )
  expect(getByText('Hello')).toBeInTheDocument()
})

it('renders the error message when a child throws', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <Throws message="Something went wrong" />
    </ErrorBoundary>,
  )
  expect(getByText('Something went wrong')).toBeInTheDocument()
})

it('renders correctly with no error', () => {
  const { asFragment } = render(
    <ErrorBoundary>
      <p>Hello</p>
    </ErrorBoundary>,
  )
  expect(asFragment()).toMatchSnapshot()
})

it('renders correctly with an error', () => {
  const { asFragment } = render(
    <ErrorBoundary>
      <Throws message="Something went wrong" />
    </ErrorBoundary>,
  )
  expect(asFragment()).toMatchSnapshot()
})

it('calls window.location.reload when Retry is clicked', () => {
  const reload = vi.fn()
  vi.stubGlobal('location', { reload })

  const { getByText } = render(
    <ErrorBoundary>
      <Throws message="Something went wrong" />
    </ErrorBoundary>,
  )

  getByText('Retry').click()
  expect(reload).toHaveBeenCalledOnce()

  vi.unstubAllGlobals()
})
