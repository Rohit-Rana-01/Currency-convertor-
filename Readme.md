
# Currency Convertor

A simple web application to convert currencies using real-time exchange rates from the Fawaz Ahmed Currency API.

## Features
- Convert between multiple currencies
- Displays country flags for selected currencies
- Responsive and modern UI
- Shows the latest exchange rate

## Technologies Used
- HTML, CSS, JavaScript
- [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)

## How It Works
- Select the source and target currencies from dropdowns
- Enter the amount to convert
- Click the "Convert" button
- The app fetches the latest exchange rate and displays the result

## Project Structure
```
Currency_Convertor/
	app.js         # Main JS logic
	codes.js       # Currency-country code mapping
	index.html     # Main HTML file
	style.css      # Stylesheet
```

## Setup & Usage
1. Clone the repository:
	 ```sh
	 git clone https://github.com/Rohit-Rana-01/Currency-convertor-.git
	 ```
2. Open the `Currency_Convertor` folder.
3. Open `index.html` in your browser.

## API Reference
- Uses [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) via CDN:
	`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/latest/currencies/{from}.json`

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is open source and available under the MIT License.
