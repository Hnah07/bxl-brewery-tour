export interface Brewery {
  id: string;
  name: string;
  time: string;
  address: string;
  latitude: number;
  longitude: number;
  website: string;
  description?: string;
  type: "start" | "brewery" | "end";
}

export const breweries: Brewery[] = [
  {
    id: "start",
    name: "Brussels South Station",
    time: "13:11",
    address: "Bd de France 2, 1060 Saint-Gilles, Belgium",
    latitude: 50.8355,
    longitude: 4.3365,
    website:
      "https://www.belgiantrain.be/en/stations-and-train-times/brussels-south",
    description: "Meeting point to start our brewery adventure!",
    type: "start",
  },
  {
    id: "cantillon",
    name: "Cantillon",
    time: "13:25 - 14:25",
    address: "Rue Gheude 56, 1070 Anderlecht, Belgium",
    latitude: 50.8422,
    longitude: 4.3314,
    website: "https://www.cantillon.be/",
    description:
      "Traditional lambic brewery. Famous for their Gueuze and Kriek beers.",
    type: "brewery",
  },
  {
    id: "ermitage",
    name: "Brasserie l'Ermitage",
    time: "14:30 - 15:40",
    address: "Rue Lambert Crickx 26, 1070 Anderlecht, Belgium",
    latitude: 50.840739,
    longitude: 4.337209,
    website: "https://ermitagenanobrasserie.be/",
    description:
      "Brasserie l'Ermitage is a unique artisan brewery in Brussels that began in a shared house on Rue de l'Ermitage in Ixelles. What started as friends brewing together in a coloc has since evolved into a professional, passionate project, launching its first beers in summer 2017.\n\n" +
      "Over the past eight years, they've carved a special niche in the Brussels beer scene with a core lineup of four hop-forward and tart styles, alongside seasonal and limited-edition brews that change monthly. Their brewing philosophy is rooted in creativity and renewal, drawing inspiration from the best of international craft beer—especially refreshing thirst-quenchers and mixed-fermentation styles that even touch on wine influences.\n\n" +
      "They operate a brewery–taproom on Rue Lambert Crickx (open Fridays and Saturdays from 14:00 to 22:00), a casual bar in Saint‑Gilles that serves their beers alongside natural wines and sourdough pizzas, and a cellar-store just meters from the brewery dedicated to barrel-aged and mixed-fermentation beers as well as natural wines.",
    type: "brewery",
  },
  {
    id: "mazette",
    name: "Mazette",
    time: "16:00 - 17:00",
    address: "Vossenplein 50, 1000 Brussels, Belgium",
    latitude: 50.836433,
    longitude: 4.34591,
    website: "https://www.mazette.be/",
    description:
      "Mazette is a Belgian craft brewery that was founded in 2014 by three friends who shared a passion for brewing and a desire to create unique and high-quality beers. The brewery is located in the heart of Brussels, in the Vossenplein neighborhood, and is known for its innovative and experimental approach to brewing.\n\n" +
      "The brewery's core range includes a variety of styles, including saisons, sours, and farmhouse ales, as well as seasonal and limited-edition releases. The beers are brewed with a focus on quality and authenticity, using traditional brewing techniques and ingredients, and are often inspired by Belgian brewing traditions and the local brewing scene.\n\n" +
      "Mazette is also known for its commitment to sustainability and environmental responsibility, and is dedicated to reducing its environmental impact through sustainable practices and reducing waste. The brewery is also known for its community-focused approach, and is dedicated to supporting local businesses and organizations, and promoting the craft brewing community in Brussels.",
    type: "brewery",
  },
  {
    id: "surrealiste",
    name: "Brasserie Surrealiste",
    time: "17:30 - 18:30",
    address: "Rue de la Buanderie 7, 1000 Brussels, Belgium",
    latitude: 50.8472,
    longitude: 4.3456,
    website: "https://www.brasseriesurrealiste.com/",
    description:
      "1500sqm in the heart of Brussels, exploring beer, food, art & music in a surreal environment. In the vibrant district of Dansaert, the iconic Art Deco building of 1932, previously a banana warehouse has been reaffected into a brewery looking like no other in the world.",
    type: "brewery",
  },
  {
    id: "bbp-dansaert",
    name: "BBP Dansaert",
    time: "18:40 - 19:40",
    address: "Rue Antoine Dansaert 188, 1000 Brussels, Belgium",
    latitude: 50.8512,
    longitude: 4.3489,
    website: "https://www.brusselsbeerproject.com/",
    description:
      "Innovative brewery with a focus on experimental and collaborative beers.",
    type: "brewery",
  },
  {
    id: "de-la-senne",
    name: "Brasserie De La Senne",
    time: "20:15 - 21:00",
    address: "Anna Bochdreef 19/21, 1000 Brussels, Belgium",
    latitude: 50.867701,
    longitude: 4.348952,
    website: "https://www.brasseriedelasenne.be/",
    description:
      "Brasserie de la Senne is at the origins of the ’new wave’ of craft beer in Brussels. We have been working, among other things, at encouraging the taste for well-hopped beers before they became trendy. Next to hoppy ales, we produce barrel-aged mixed-fermented beers, as well as beers refermented with a local Brettanomyces yeast. We aim at brewing beers of character that are well-balanced, with a requirement for quality and consistency, absence of compromise, and a totally natural production, as well as an extremely sharp selection of raw materials in a direct relationship with the producer.",
    type: "brewery",
  },
  {
    id: "la-source",
    name: "La Source",
    time: "21:20 - 22:25",
    address: "Dieudonné Lefèvrestraat 4, 1020 Brussels,Belgium",
    latitude: 50.870979,
    longitude: 4.348531,
    website: "https://lasourcebeer.be/",
    description:
      "Final stop! A great place to end the tour with some local favorites.",
    type: "brewery",
  },
  {
    id: "end",
    name: "Brussels North Station",
    time: "23:08",
    address: "Rue du Progrès 76, 1210 Saint-Josse-ten-Noode, Belgium",
    latitude: 50.8607,
    longitude: 4.3617,
    website:
      "https://www.belgiantrain.be/en/stations-and-train-times/brussels-north",
    description: "End point - time to head home!",
    type: "end",
  },
];

export const tourInfo = {
  title: "Brussels Brewery Tour",
  date: "Saturday, July 5th",
  startTime: "13:11 (Arrival BXL South Station)",
  endTime: "23:08 (Departure BXL North Station)",
  description:
    "Join us for an epic journey through Brussels' finest breweries! We'll explore traditional lambic makers, modern craft breweries, and everything in between. Come thirsty and ready for some of the best beers Brussels has to offer!",
};
