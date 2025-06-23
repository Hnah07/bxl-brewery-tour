import { Clock, MapPin, ExternalLink, Beer, Train } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import type { Brewery } from "../data/breweries";

interface BreweryCardProps {
  brewery: Brewery;
  index: number;
}

export const BreweryCard = ({ brewery, index }: BreweryCardProps) => {
  const getIcon = () => {
    switch (brewery.type) {
      case "start":
        return <Train className="w-6 h-6 text-green-600" />;
      case "end":
        return <Train className="w-6 h-6 text-red-600" />;
      default:
        return <Beer className="w-6 h-6 text-amber-600" />;
    }
  };

  const getBorderColor = () => {
    switch (brewery.type) {
      case "start":
        return "border-green-200 bg-green-50";
      case "end":
        return "border-red-200 bg-red-50";
      default:
        return "border-amber-200 bg-amber-50";
    }
  };

  return (
    <Card
      className={`${getBorderColor()} hover:shadow-lg transition-shadow duration-200`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-amber-300 text-sm font-bold text-amber-700">
              {index + 1}
            </div>
            <div className="flex items-center gap-2">
              {getIcon()}
              <CardTitle className="text-xl text-gray-900">
                {brewery.name}
              </CardTitle>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{brewery.time}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-start gap-2 mb-4 text-gray-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{brewery.address}</span>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details" className="border-none">
            <AccordionTrigger className="text-sm text-amber-700 hover:text-amber-800 py-2">
              More details
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              {brewery.description && (
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  {brewery.description.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < brewery.description!.split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </p>
              )}
              <a
                href={brewery.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Visit website
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
