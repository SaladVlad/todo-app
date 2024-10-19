
# Todo List Application - VEGA IT Workshop

This project is a **Todo List application** developed during the **VEGA IT React workshop**. It allows users to create multiple task lists, separate tasks semantically into different categories, and manage tasks efficiently. The app also features user authentication (login and registration) with JWT token-based security, and a sidebar for switching between task categories.

## Features

- **Task Management**: Create, update, and delete tasks, with support for multiple task lists.
- **Semantic Task Lists**: Organize tasks into different lists to separate them by context or priority.
- **Authentication**: Users can register and log in via an authentication API.
- **JWT Tokens**: Secure login sessions with JWT tokens, stored in local/session storage.
- **Sidebar Navigation**: A dynamic sidebar displays the available task lists for easy switching between categories.

## Technologies Used

- **React**:
- **TypeScript**
- **JavaScript (ES6+)**
- **React Router**: for routing between different task lists
- **JWT**: For authentication and session management
- **CSS / SCSS**: For styling components
- **Node.js & npm**: For managing dependencies and running the project
- **.NET**: For creating the entire back-end side of the application

## Getting Started

To run the project locally, follow these steps.

### Prerequisites

- Node.js (v20.17.x or later)
- npm (v10.8.x or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SaladVlad/todo-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-todo-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Project

To start the development server:

```bash
npm start
```

Visit `http://localhost:3000` to access the app.

### Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `build/` folder.

### Authentication with JWT

The application uses JWT-based authentication to manage user sessions. Upon successful login, the JWT token is stored in the browser’s local or session storage and is used to authenticate subsequent API requests.

### API Calls

All API requests, such as login, registration, and task management, are handled using an AWS hosted backend developed in .NET framework. Below is an example for login:

### Task Management

Tasks are organized into multiple lists, each representing a different category (e.g., Work, Personal, Urgent). Users can create new lists, switch between lists, and add or remove tasks within each list.

### Sidebar Navigation

The **Sidebar** component lists all task categories, allowing users to switch between them seamlessly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
