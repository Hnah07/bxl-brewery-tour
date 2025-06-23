# Brussels Brewery Tour

An interactive and informative web application for planning a brewery tour in Brussels with friends. Built with React, TypeScript, TailwindCSS, and ShadCN UI components.

## Features

- **Interactive Map**: Uses react-leaflet to display all brewery locations with custom markers
- **User Location**: Automatically detects and displays your current location on the map
- **Tour Itinerary**: Complete schedule with all brewery stops, times, and details
- **Responsive Design**: Mobile-first design that works great on smartphones and laptops
- **Expandable Details**: Click on brewery cards to see more information and website links

## Tech Stack

- **React 19** with TypeScript
- **TailwindCSS 4** for styling
- **ShadCN UI** for components
- **React Leaflet** for interactive maps
- **Lucide React** for icons
- **Vite** for build tooling

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Tour header with title and info
│   ├── Itinerary.tsx       # List of all brewery stops
│   ├── BreweryCard.tsx     # Individual brewery card component
│   ├── Map.tsx            # Interactive map component
│   └── ui/                # ShadCN UI components
├── data/
│   └── breweries.ts       # Tour data and brewery information
└── App.tsx                # Main application component
```

## Features

- **No Backend Required**: All data is static and hardcoded
- **No Authentication**: Pure informational application
- **Mobile Optimized**: Perfect for viewing on smartphones during the tour
- **Geolocation**: Automatically shows your location on the map
- **Custom Markers**: Different colored markers for start/end points, breweries, and user location

## Browser Compatibility

- Modern browsers with geolocation support
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## License

This project is for educational and personal use.
