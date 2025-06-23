import { Header } from "./components/Header";
import { Itinerary } from "./components/Itinerary";
import { Map } from "./components/Map";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Itinerary />
      <Map />
    </div>
  );
};

export default App;
