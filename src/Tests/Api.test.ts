import fetchApi from '../AppData/Api'
import appData from '../AppData/AppData'

const mockFetch = (ok: boolean, payload?: unknown, status = 200) => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok,
      status,
      json: () => Promise.resolve(payload),
    })
  )
}

afterEach(() => {
  vi.unstubAllGlobals()
})

it('resolves with parsed data on a successful response', async () => {
  mockFetch(true, appData)
  const result = await fetchApi()
  expect(result).toEqual(appData)
})

it('throws an HTTP error message when the response is not ok', async () => {
  mockFetch(false, null, 500)
  await expect(fetchApi()).rejects.toThrow(
    'This is an HTTP error: The status is 500'
  )
})

it('propagates a network failure', async () => {
  vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))
  await expect(fetchApi()).rejects.toThrow('Network error')
})
