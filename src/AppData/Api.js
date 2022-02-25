const baseApiAddress =
  'https://1f932751-aee9-4df3-960c-1f7023b4cb31.mock.pstmn.io'

const fetchApi = async () => {
  const response = await fetch(`${baseApiAddress}/v1/app-data`)
  if (!response.ok) {
    throw new Error(`This is an HTTP error: The status is ${response.status}`)
  }
  const data = await response.json()

  return data
}

export default fetchApi
