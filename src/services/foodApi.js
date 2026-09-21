const API_URL = 'http://localhost:5000/api/foods'

export const getFoods = async () => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch foods')
  }

  const data = await response.json()

  return data
}