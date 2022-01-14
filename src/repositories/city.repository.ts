import { ICity, IProperties, find } from "../models/cities";

const getCities = async (continent?: string): Promise<ICity[]> => {
  const payload = continent ? { continent } : null;
  const response = await find(<IProperties>payload);
  return response;
};

const getContents = async (): Promise<string[]> => {
  const response = await find();
  return response.map(({ continent }: ICity) => continent);
};

export { getCities, getContents };
