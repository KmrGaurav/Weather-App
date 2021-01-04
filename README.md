# Weather App

Weather App is an application that shows the weather data of someplace. The application uses [Mapbox] and [OpenWeatherMap] APIs.

OpenWeatherMap provides global weather data using geographic coordinates of someplace. And Mapbox provides these coordinates using the name of that place.

---

## Requirements

For development, you will only need Node.js installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website][node.js] and download the installer.

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      sudo apt install nodejs
      sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    vXX.XX.X (e.g., v12.18.0)

    $ npm --version
    X.XX.X (e.g., 6.14.4)

If you need to update `npm`, you can do it using `npm` by running the following command.

    npm install npm -g

---

## Install

    git clone https://github.com/KmrGaurav/Weather-App.git
    cd Weather-App
    npm install

## Configure app

Open `./utils/geocode.js` and put your API key from [Mapbox].

Open `./utils/forecast.js` and put your API key from [OpenWeatherMap].

## Running the app

    node app.js Delhi
    or
    node app.js "New Delhi"

[node.js]:        https://nodejs.org/         "Node.js"
[mapbox]:         https://www.mapbox.com/     "Mapbox"
[openweathermap]: https://openweathermap.org/ "OpenWeatherMap"
