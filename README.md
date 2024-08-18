# Weather App

![Rainy](/assets/sceenshots/rainy.png)
![Clear Sky](/assets/sceenshots/clear-sky.png)
![Cloudy](/assets/sceenshots/cloudy.png)

## Overview

This Weather App provides real-time weather information, including the current weather, weekly forecast, and detailed air conditions for any city. The app dynamically updates its background based on the weather conditions.

## Features

- **Current Weather:** Displays the current temperature, weather description, and other details such as wind speed, humidity, and pressure.
- **Weekly Forecast:** Provides a 7-day weather forecast with detailed information.
- **Dynamic Background:** The app's background changes based on the current weather conditions.
- **Responsive Design:** The app is fully responsive and works well on mobile, tablet, and desktop devices.

## Installation

To get started with the Weather App, follow the instructions below.

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14.x or above)
- **npm** (version 6.x or above) or **yarn**

### Setup

1. **Clone the repository:**

```bash
git clone https://github.com/SandeebAdhikari/Weather_App
cd Weather_app
```

2. **Install Dependencies:**

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

3. **Get API Key:**

Sign up at OpenWeatherMap to get an API key.

4. **Set up environment variables:**

Create a .env file in the root directory and add your API key:
api_key=your_openweathermap_api_key

5. **Run the app:**

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn run dev
```

## Usage

**Search for a City:** Enter the name of the city in the search bar and press Enter to get the current weather and forecast.
**Responsive UI:** The app adapts to different screen sizes, providing a seamless experience on mobile, tablet, and desktop devices.

## Dependencies

**React:** A JavaScript library for building user interfaces.

```bash
npm create vite@latest .
```

**Tailwind CSS:** A utility-first CSS framework for styling.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**React Icons:** A library of icons for React

```bash
npm react-icons
```

## Contributing

Contributions are welcome! If you have any suggestions, feel free to open an issue or submit a pull request.

## License

**This project is licensed under the MIT License. See the LICENSE file for details.**

### Key Points:

- **Tailwind CSS Installation:** Instructions are included for installing and configuring Tailwind CSS if it's not already set up.
- **File Structure:** Gives a clear view of the directory layout for easy navigation.
- **Image Inclusion:** The screenshot is referenced in the `README.md` file using Markdown syntax for image embedding.
