import { ICity, IProperties, find } from "../models/cities";

interface ICityResponse {
  name: string;
  name_native: string;
  country: string;
  continent: string;
}

const getCities = async (continent?: string): Promise<ICityResponse[]> => {
  const payload = continent ? { continent } : null;
  const response = await find(<IProperties>payload);
  return response.map(({ name, name_native, country, continent }: ICity) => ({
    name,
    name_native,
    country,
    continent,
  }));
};

const getCityDetail = async (city: string): Promise<ICity[]> => {
  const response = await find(<IProperties>{ name: city });
  return response;
};

export { ICityResponse, getCities, getCityDetail };
