import { ICities, IProperties, find } from "../models/cities";

const getCities = async (city?: string): Promise<ICities[]> => {
  const payload = city ? { name: city } : null;
  const response = await find(<IProperties>payload);
  return response;
};

export { getCities };
