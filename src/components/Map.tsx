import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import type { LatLngExpression } from "leaflet";
import { MapPin, Navigation } from "lucide-react";
import { breweries } from "../data/breweries";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
const iconUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png";
const iconRetinaUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png";
const shadowUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png";

Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Custom marker icons
const createCustomIcon = (color: string) =>
  new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 10.5 12 24 12 24s12-13.5 12-24c0-6.627-5.373-12-12-12z" fill="${color}"/>
      <circle cx="12" cy="12" r="6" fill="white"/>
    </svg>
  `)}`,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36],
  });

const startIcon = createCustomIcon("#10b981"); // green
const breweryIcon = createCustomIcon("#f59e0b"); // amber
const endIcon = createCustomIcon("#ef4444"); // red
const userIcon = createCustomIcon("#3b82f6"); // blue

// Component to handle user location
const UserLocation = () => {
  const map = useMap();
  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude]);
          map.setView([latitude, longitude], 13);
        },
        () => {
          // Fallback to Brussels center if geolocation fails
          map.setView([50.8503, 4.3517], 12);
        }
      );
    } else {
      // Fallback to Brussels center if geolocation not supported
      map.setView([50.8503, 4.3517], 12);
    }
  }, [map]);

  if (!userPosition) return null;

  return (
    <Marker position={userPosition} icon={userIcon}>
      <Popup>
        <div className="text-center">
          <Navigation className="w-4 h-4 mx-auto mb-1 text-blue-600" />
          <span className="text-sm font-medium">Your location</span>
        </div>
      </Popup>
    </Marker>
  );
};

export const Map = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-96 bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <MapPin className="w-6 h-6 text-amber-600" />
          <h2 className="text-3xl font-bold text-gray-900">Interactive Map</h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <MapContainer
            center={[50.8503, 4.3517]}
            zoom={12}
            className="h-96 w-full"
            style={{ minHeight: "400px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <UserLocation />

            {breweries.map((brewery) => {
              const icon =
                brewery.type === "start"
                  ? startIcon
                  : brewery.type === "end"
                  ? endIcon
                  : breweryIcon;

              return (
                <Marker
                  key={brewery.id}
                  position={
                    [brewery.latitude, brewery.longitude] as LatLngExpression
                  }
                  icon={icon}
                >
                  <Popup>
                    <div className="text-center min-w-[200px]">
                      <div className="font-semibold text-gray-900 mb-1">
                        {brewery.name}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {brewery.time}
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        {brewery.address}
                      </div>
                      {brewery.description && (
                        <div className="text-xs text-gray-700 mb-2">
                          {brewery.description
                            .split("\n")
                            .map((line, index) => (
                              <span key={index}>
                                {line}
                                {index <
                                  brewery.description!.split("\n").length -
                                    1 && <br />}
                              </span>
                            ))}
                        </div>
                      )}
                      <a
                        href={brewery.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-amber-600 hover:text-amber-800 underline"
                      >
                        Visit website
                      </a>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span>Start/End points</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500"></div>
            <span>Breweries</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span>Your location</span>
          </div>
        </div>
      </div>
    </section>
  );
};
