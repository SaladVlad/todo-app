export type TaskType = {
  id: string
  name: string
  isCompleted: boolean
}

export const getAllTasks = async (listId: string): Promise<TaskType[]> => {
  const response = await fetch(
    `https://todo-workshop-api.azurewebsites.net/api/lists/${listId}/tasks`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  )
  if (response.ok) {
    return response.json()
  }
  throw new Error('Error while fetching token!')
}

export const postNewTask = async (
  listId: string,
  name: string
): Promise<TaskType> => {
  const response = await fetch(
    `https://todo-workshop-api.azurewebsites.net/api/lists/${listId}/tasks`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        name: name
      })
    }
  )
  if (response.ok) {
    return response.json()
  }
  throw new Error('Error while fetching token!')
}

export const deleteTaskApi = async (taskId: string): Promise<void> => {
  const response = await fetch(
    `https://todo-workshop-api.azurewebsites.net/api/tasks/${taskId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        id: taskId
      })
    }
  )
  if (response.ok) {
    return
  }
  throw new Error('Error while removing task!')
}
