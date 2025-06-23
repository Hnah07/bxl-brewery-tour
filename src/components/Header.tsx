import { Calendar, Clock, MapPin, Beer } from "lucide-react";
import { tourInfo } from "../data/breweries";

export const Header = () => {
  return (
    <header className="bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Beer className="w-8 h-8 text-amber-600 mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {tourInfo.title}
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6 text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-600" />
            <span className="font-medium">{tourInfo.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            <span className="font-medium">
              {tourInfo.startTime} - {tourInfo.endTime}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6 text-gray-600">
          <MapPin className="w-5 h-5 text-amber-600" />
          <span>Brussels, Belgium</span>
        </div>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          {tourInfo.description}
        </p>
      </div>
    </header>
  );
};
