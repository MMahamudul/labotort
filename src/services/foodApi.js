const API_URL = 'http://localhost:5000/api/foods'

// Get API

export const getFoods = async () => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch foods')
  }

  const data = await response.json()

  return data
}

//Post API

export const createFood = async (foodData) => {
  const response = await fetch(API_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(foodData),
  })

  if (!response.ok) {
    throw new Error('Failed to create food')
  }

  const data = await response.json()

  return data
}

export const deleteFood = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete food')
  }

  const data = await response.json()

  return data
}

export const updateFood = async (id, foodData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(foodData),
  })

  if (!response.ok) {
    throw new Error('Failed to update food')
  }

  const data = await response.json()

  return data
}