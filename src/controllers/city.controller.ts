import { ICity } from "../models/cities";
import {
  ICityResponse,
  getCities,
  getCityDetail,
} from "../repositories/city.repository";

export default class CityController {
  public async getCities(): Promise<ICityResponse[]> {
    return getCities();
  }

  public async getCity(city: string): Promise<ICity[]> {
    return getCityDetail(city);
  }
}
