# tabular-form-using-AJAX
This project fetches and displays a list of US Presidents in an HTML table using data from a remote JSON file. The data is loaded when the "Load Presidents Data" button is clicked.

## Features

- Fetches data from a remote JSON file using `XMLHttpRequest`.
- Parses the JSON data and dynamically populates an HTML table with the Presidents' information.
- Handles errors gracefully with appropriate console messages.

## Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- A modern web browser that supports `XMLHttpRequest`.

### Project Structure

`├── index.html`
`├── /js/main.js`
`└── /css/style.css`

### Files

- `index.html`: Contains the HTML structure, including the table and the "Load Presidents Data" button.
- `main.js`: Contains the JavaScript code that fetches the data and updates the table.
- `style.css`: (Optional) Contains styles for the HTML elements.

## Usage

1. Clone or download this repository to your local machine.
2. Open `index.html` in your preferred web browser.
3. Click the "Load Presidents Data" button to fetch and display the data.


## Error Handling
If there is an error while loading the data (e.g., network issues), an error message will be logged to the console:

Error loading data: This message appears if the request status is not 200 OK.
Request error: This message appears if there is an error with the request itself.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.
