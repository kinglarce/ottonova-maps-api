import { ICity, find } from "../models/cities";

const getContinents = async (): Promise<string[]> => {
  const response = await find();
  const continents = response.map(({ continent }: ICity) => continent);
  return [...new Set(continents)];
};

export { getContinents };
