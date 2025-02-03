# Math Expression Evaluator

A web application that takes a mathematical expression as input, evaluates it considering operator precedence and associativity, and provides the result. Built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Mathematical Evaluation**: Handles basic arithmetic operations (`+`, `-`, `*`, `/`).
- **Operator Precedence**: Correctly prioritizes multiplication and division over addition and subtraction.
- **Associativity**: Handles left-to-right evaluation where necessary.
- **User-Friendly Interface**: Simple and clean React frontend.
- **Backend Logic**: Implements the Shunting Yard algorithm for converting infix to postfix notation.

## Demo

![Demo GIF](https://via.placeholder.com/500)  
*Include a link or gif showcasing the project in action!*

## Tech Stack

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: (Optional) MongoDB
- **Others**: CORS, Body-Parser

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** (optional, if extending to store data)

### Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/your-username/math-expression-evaluator.git
    cd math-expression-evaluator
    ```

2. **Backend Setup**
    ```sh
    cd server
    npm install
    ```
    Create a `.env` file in the `server` folder and add:
    ```sh
    PORT=5000
    ```
    Start the backend server:
    ```sh
    node server.js
    ```

3. **Frontend Setup**
    ```sh
    cd ../client
    npm install
    npm start
    ```

4. **Visit the App**
    Open your browser and go to `http://localhost:3000`

## Usage

- Enter a mathematical expression in the input box.
- Click on "Evaluate" to get the result.
- Examples:
    - `25+5-(4*5-5)` results in `15`
    - `24-8+9*2-10/5` results in `32`

## Project Structure

```plaintext
math-expression-evaluator/
│
├── server/                # Backend files
│   ├── models/            # Mongoose models (if needed)
│   ├── routes/            # Express routes
│   └── server.js          # Express server setup
│
├── client/                # Frontend files
│   ├── public/            # Static files
│   ├── src/               # React components
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # React entry point
│
├── README.md              # Project overview
└── .gitignore             # Git ignored files
