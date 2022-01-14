import fetch from "node-fetch";
const hostURL = `${process.env.HOST_URL}/cities.json`;

interface ICity {
  name: string;
  country: string;
  continent: string;
  latitude: string;
  longitude: string;
  population: string;
  founded: string;
  landmarks: string[];
  [key: string]: string | string[];
}

interface IMaps {
  cities: ICity[];
}

interface IProperties {
  [key: string]: string;
}

const all = async (): Promise<IMaps | unknown> => {
  const response = await fetch(hostURL);
  return <IMaps | unknown>response.json();
};

const findByMatchingProperties = (data: ICity[], properties: IProperties) =>
  data.filter((entry: ICity) =>
    Object.keys(properties).every((key: string) => {
      return properties[key] && entry[key] === properties[key];
    })
  );

const find = async (properties?: IProperties): Promise<ICity[]> => {
  const response = <IMaps>await all();
  const data = response.cities;
  if (!properties) return data;
  return findByMatchingProperties(data, properties);
};

export { ICity, IProperties, find };
