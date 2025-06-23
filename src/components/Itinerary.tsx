import { Route } from "lucide-react";
import { BreweryCard } from "./BreweryCard";
import { breweries } from "../data/breweries";

export const Itinerary = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Route className="w-6 h-6 text-amber-600" />
          <h2 className="text-3xl font-bold text-gray-900">Tour Itinerary</h2>
        </div>

        <div className="space-y-6">
          {breweries.map((brewery, index) => (
            <BreweryCard key={brewery.id} brewery={brewery} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
