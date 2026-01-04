## Weather App

Responsive weather application built with Node.js and Express that provides real-time weather information for any location worldwide with customizable temperature units.


## Features

- Get weather information for any city or location worldwide
- Choose between Celsius, Fahrenheit, or Kelvin
- Works seamlessly on desktop, tablet, and mobile devices


## Technologies Used

**Backend**: Node.js, Express.js
**Templating Engine**: Handlebars (HBS)
**APIs**: 
  - WeatherStack API for weather data
  - Mapbox Geocoding API for location services
**Frontend**: HTML5, CSS3, JavaScript ES6

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd guided-inquiry-week-11-weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ``` 

## Running the Application

### Option 1: Using npm (from project root)
```bash
npm start
```

### Option 2: Using node (from src folder)
```bash
cd src
node app.js
```

The application will start on `http://localhost:3000`, navigate to `http://localhost:3000` on your browser. 

## Usage

1. **Enter a Location**: Type any city name, address, or landmark in the search box
   - For best results, be specific (e.g., "London, UK" instead of just "London")
   
2. **Select Temperature Unit**: Choose your preferred unit:
   - Celsius (default)
   - Fahrenheit
   - Kelvin

3. **Get Weather**: Click the "Search" button to retrieve current weather conditions

## Deployment

This application was deployed using Heroku and can be accessed at `https://housh-weather-app-8a800f23f04d.herokuapp.com/`



---

For questions or feedback, please open an issue in the repository.
