import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import App from '../Components/App'
import NotFound from '../Components/NotFound'

beforeEach(() => {
  vi.spyOn(Math, 'random').mockReturnValue(0.5)
})

afterEach(() => {
  vi.restoreAllMocks()
})

const routes = [
  { path: '/', element: <App /> },
  { path: '*', element: <NotFound /> },
]

it('home route renders all four sections', async () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] })
  await act(async () => {
    render(<RouterProvider router={router} />)
  })
  expect(
    screen.getByText(
      'Front End Developer, Building and Maintaining React Apps',
    ),
  ).toBeInTheDocument()
  expect(screen.getByText('Tools & Stuff')).toBeInTheDocument()
  expect(screen.getByText('Projects')).toBeInTheDocument()
  expect(screen.getByText('Get in touch')).toBeInTheDocument()
})

it('unknown route renders the 404 page', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/not-a-page'] })
  render(<RouterProvider router={router} />)
  expect(screen.getByText('404')).toBeInTheDocument()
  expect(screen.getByText('← Back to home')).toBeInTheDocument()
})

it('HomeLink on 404 page points to the home route', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/not-a-page'] })
  render(<RouterProvider router={router} />)
  expect(screen.getByText('← Back to home').closest('a')).toHaveAttribute(
    'href',
    '/',
  )
})

it('clicking a project image opens the lightbox', async () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] })
  await act(async () => {
    render(<RouterProvider router={router} />)
  })
  fireEvent.click(screen.getByAltText('Xbox'))
  expect(screen.getByRole('dialog')).toBeInTheDocument()
})

it('lightbox closes when the backdrop is clicked', async () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] })
  await act(async () => {
    render(<RouterProvider router={router} />)
  })
  fireEvent.click(screen.getByAltText('Xbox'))
  fireEvent.click(screen.getByTestId('lightbox-backdrop'))
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})

it('lightbox closes when Escape is pressed', async () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] })
  await act(async () => {
    render(<RouterProvider router={router} />)
  })
  fireEvent.click(screen.getByAltText('Xbox'))
  fireEvent.keyDown(document, { key: 'Escape' })
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})
