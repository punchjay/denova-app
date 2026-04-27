import '@testing-library/jest-dom'

class MockIntersectionObserver {
  private cb: (entries: { isIntersecting: boolean }[]) => void
  constructor(cb: (entries: { isIntersecting: boolean }[]) => void) {
    this.cb = cb
  }
  observe() {
    this.cb([{ isIntersecting: true }])
  }
  disconnect() {}
  unobserve() {}
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
