# To-Do List App

## Overview

A To-Do List application built with React.js and styled using Tailwind CSS. This app allows users to manage their tasks with features like adding, updating, and deleting tasks. Tasks can be marked as completed or pending, and the user interface is responsive and visually appealing thanks to Tailwind CSS.

## Features

- Add new tasks
- Mark tasks as completed or pending
- Delete tasks
- Responsive design
- Styled with Tailwind CSS

## Technologies

- **React.js**: A JavaScript library for building user interfaces
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs
- **Local Storage**: For persisting tasks across page reloads

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/moinmn/todo-using-reactjs.git
   cd todo-using-reactjs
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

### Adding a Task

- Enter a task description in the input field and click the "Add Task" button or press `Enter`.

### Marking a Task as Completed

- Click the checkbox next to the task to mark it as completed. The task will be visually distinguished with a strikethrough and gray color.

### Deleting a Task

- Click the trash icon next to the task to remove it from the list.

## Tailwind CSS Configuration

Tailwind CSS is set up using the default configuration. You can customize Tailwind's configuration in `tailwind.config.js` to fit your needs.

### Customizing Tailwind CSS

1. **Edit `tailwind.config.js`** to customize colors, spacing, and other design tokens.

2. **Modify `src/index.css`** to include Tailwind’s utility classes and any custom styles.

## Contributing

Feel free to fork the repository and submit pull requests for improvements. Ensure that your code adheres to the existing style and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
