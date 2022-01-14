import { ICity, IProperties, find } from "../models/cities";

interface ICityResponse {
  name: string;
  name_native: string;
  country: string;
  continent: string;
}

const getCities = async (continent?: string): Promise<ICity[]> => {
  const payload = continent ? { continent } : null;
  const response = await find(<IProperties>payload);
  return response;
};

export { ICityResponse, getCities };
