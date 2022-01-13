import { ICities } from "../models/cities";
import { getCities } from "../repositories/city.repository";

export default class CityController {
  public async getCities(): Promise<ICities[]> {
    return getCities();
  }

  public async getCity(city: string): Promise<ICities[]> {
    return getCities(city);
  }
}
