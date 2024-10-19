export type ListType = {
  id: string
  name: string
  numberOfActiveTasks: number
}

export const getAllLists = async (): Promise<ListType[]> => {
  const response = await fetch(
    'https://todo-workshop-api.azurewebsites.net/api/lists',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  )
  if (response.ok) {
    console.log('Getting all lists response: ', response)
    return response.json()
  }
  throw new Error('Error while fetching token!')
}

// export const getAllLists = async (): Promise<ListType[]> => {
//     const response = await fetch(
//       'https://todo-workshop-api.azurewebsites.net/api/lists',
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + localStorage.getItem('token')
//         }
//       }
//     )
//     if (response.ok) {
//       console.log(response)
//       return response.json()
//     }
//     throw new Error('Error while fetching token!')
//   }
