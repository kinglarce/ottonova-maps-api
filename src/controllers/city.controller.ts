import { ICity } from "../models/cities";
import { getCities } from "../repositories/city.repository";

export default class CityController {
  public async getCities(): Promise<ICity[]> {
    return getCities();
  }

  public async getCity(city: string): Promise<ICity[]> {
    return getCities(city);
  }
}
