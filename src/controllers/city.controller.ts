import { ICity } from "../models/cities";
import { getCities, getContents } from "../repositories/city.repository";

export default class CityController {
  public async getCities(continent?: string): Promise<ICity[]> {
    return getCities(continent);
  }

  public async getContents(): Promise<string[]> {
    return getContents();
  }
}
