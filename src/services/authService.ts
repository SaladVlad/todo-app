type TokenResponse = {
  accessToken: string
}

export const registerUser = async (
  username: string,
  password: string,
  password2: string
): Promise<TokenResponse> => {
  const response = await fetch(
    'https://todo-workshop-api.azurewebsites.net/api/auth/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        repeatedPassword: password2
      })
    }
  )
  if (response.ok) {
    return response.json()
  }
  throw new Error('Error while fetching token!')
}

export const loginUser = async (
  username: string,
  password: string
): Promise<TokenResponse> => {
  const response = await fetch(
    'https://todo-workshop-api.azurewebsites.net/api/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }
  )
  if (response.ok) {
    return response.json()
  }
  throw new Error('Error while fetching token!')
}
