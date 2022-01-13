import fetch from "node-fetch";
const DB = `${process.env.URL}/cities.json`;

interface IMaps {
  cities: ICities[];
}

interface ICities {
  name: string;
  name_native: string;
  country: string;
  continent: string;
  latitude: string;
  longitude: string;
  population: string;
  founded: string;
  landmarks: string[];
  [key: string]: string | string[];
}

interface IProperties {
  [key: string]: string;
}

const all = async (): Promise<IMaps | unknown> => {
  const response = await fetch(DB);
  return <IMaps | unknown>response.json();
};

const findByMatchingProperties = (data: ICities[], properties: IProperties) =>
  data.filter((entry: ICities) =>
    Object.keys(properties).every((key: string) => {
      return properties[key] && entry[key] === properties[key];
    })
  );

const find = async (properties?: IProperties): Promise<ICities[]> => {
  const response = <IMaps>await all();
  const data = response.cities;
  if (!properties) return data;
  return findByMatchingProperties(data, properties);
};

export { ICities, IProperties, find };
