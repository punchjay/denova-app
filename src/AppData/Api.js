const baseApiAddress =
  'https://1f932751-aee9-4df3-960c-1f7023b4cb31.mock.pstmn.io'

const fetchApi = () => {
  return fetch(`${baseApiAddress}/v1/app-data`)
}

export default fetchApi
