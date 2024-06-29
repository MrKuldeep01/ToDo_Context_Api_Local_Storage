# Todo App ✅☕😅
---
This is a simple Todo application built with React, using the Context API for state management and Local Storage for persistence. The project was created with guidance from Hitesh Sir on the "Chai aur Code" YouTube channel.

## Features

- Add, edit, delete, and check/uncheck todos
- Persist todos in local storage
- Responsive UI

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MrKuldeep01/ToDo_Context_Api_Local_Storage.git
cd ToDo_Context_Api_Local_Storage
```

2. Install the dependencies:

```bash
npm install
```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application will be available at `https://todowithcontextapi.netlify.app`.

## Project Structure

```
src/
|-- components/
|   |-- TodoForm.jsx
|   |-- TodoList.jsx
|-- contexts/
|   |-- index.js
|   |-- TodoContext.jsx
|-- App.jsx
|-- index.js
```

### Components

- **TodoForm**: Form component to add new todos.
- **TodoList**: Component to render the list of todos.

### Context

- **TodoContext**: Context API setup for managing todos state.

## Usage

### Adding a Todo

1. Type your todo description in the input field.
2. Press Enter or click the Add button to add the todo to the list.

### Editing a Todo

1. Click the edit button (✏️) next to the todo you want to edit.
2. Modify the todo description.
3. Press Enter or click the Save button (📁) to save your changes.

### Deleting a Todo

1. Click the delete button (❌) next to the todo you want to remove.

### Checking/Unchecking a Todo

1. Click the checkbox next to the todo to mark it as complete/incomplete.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgements

- Thanks to `Hitesh Sir` for the amazing tutorial on the "Chai aur Code" YouTube channel.

---
