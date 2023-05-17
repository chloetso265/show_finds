# Show Finds

Want to get the best prices on your must-see shows? Save time and energy with Show Finds, a metasearch engine that helps compare ticket prices for performances all over the United States in one place. Searching is easy with features such as filtering by location or saving your favorites to get recommended shows. See how prices compare to the official seller and get alerts when prices drop. You don’t have to miss out on experiences with Show Finds!

## Features

- Displays upcoming shows and a variety of artists
- Allows filtering by location and genre
- Search bar to look up performers or specific shows by name

## Tech Stack

**Client:** React.js, HTML5, CSS, JavaScript

**Server:** N/A (will implement Node, Express, and Knex for future phases)

## Installation

Clone the latest version of show_finds from GitHub to your local computer

Install all relevant packages

Run app on development mode (http://localhost:3000)

```
git clone https://github.com/chloetso265/show_finds
npm install
npm start

```

## API Reference

#### \*API key required for all requests

Base URL: https://app.ticketmaster.com/discovery/v2/

#### Get all shows

```http
  GET /events
```

#### Get all artists

```http
  GET /attractions
```

#### Get show details

```http
  GET /events/${showId}
```

#### Get show details by artist

```http
  GET /events/?attractionId=${showId}
```

#### Get list from search query

```http
  GET /events.json?keyword=${keyword}
```

## Roadmap

Phase 1

- Multiple API calls to display trending shows and artists
- Filtering shows by location and genre
- Search bar to look up performers or specific shows
- Links lead to official sites to purchase tickets

Phase 2

- Responsive layout
- Graphical display of ticket price history for the show or future predictions of price increase/decrease closer to the show
- Account creation to save favorites and receive alerts when prices go down

Phase 3

- Transition to become secondary marketplace
- Allow users to upload tickets to sell
- Authentication of users puting items for sale

## Lessons Learned

I learned both building and designing a website is not simple! For the first phase, setting up multiple API requests was the biggest hurdle, especially since each API is organized differently, making it difficult to cross reference a show across different APIs. Unfortunately that was not completed, but I was able to set up filtering and search capabilities with the help of my educators, classmates, and online resources. I'm excited to continue building the site until it can be deployed to the public!
