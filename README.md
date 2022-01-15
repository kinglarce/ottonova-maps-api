# Ottonova Maps API

## Overview
This repository returns an API for fetching Cities and Continents.

## Getting started

To get the Node server running locally:

- Clone this repo
  - `git clone https://github.com/kinglarce/ottonova-maps-api.git`
- Install the required dependencies
  - `npm install`
- Copy the example environment variable
  - `.env.example` to `.env`
- Start the development server
  - `npm run dev`
- Visit URL
  - `http://localhost:8000/`

### Demo API

- Fetching all cities
  - [GET cities](https://ottonova-maps-api.herokuapp.com/cities)
- Fetching all continents
  - [GET continents](https://ottonova-maps-api.herokuapp.com/continents)
- Fetching all cities by continent(Europe)
  - [GET cities/Europe](https://ottonova-maps-api.herokuapp.com/cities/Europe)

## Application Structure

- `src/index.ts` - This file is the entry point to our application and defines our application configuration.
- `src/routes/` - This folder contains the route definitions for our API.
- `src/controllers/` - This folder contains the controllers for our routes.
- `src/models/` - This folder contains the models for data interactions.
- `src/repositories/` - This folder contains the repositories for separating business & data layer.
- `public/cities.json` - This is the static data to be use for the API.
- `__mocks__/` - This folder contains the mock data for testing.

<br />