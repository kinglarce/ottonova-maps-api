import CityController from "./city.controller";
import * as CityRepository from "../repositories/city.repository";
import { CITIES } from "../__mocks__/cities.mock";

describe("CityController", () => {
  describe("getCities", () => {
    it("should return city list with no parameter", async () => {
      const spy = jest
        .spyOn(CityRepository, "getCities")
        .mockResolvedValue(CITIES);
      const controller = new CityController();
      const cities = await controller.getCities();
      expect(cities).toEqual(CITIES);
      expect(spy).toHaveBeenCalledWith(undefined);
    });
    it("should return city list with parameter", async () => {
      const payload = "North America";
      const citiesData = [CITIES[1]];
      const spy = jest
        .spyOn(CityRepository, "getCities")
        .mockResolvedValue(citiesData);
      const controller = new CityController();
      const cities = await controller.getCities(payload);
      expect(cities).toEqual(citiesData);
      expect(spy).toHaveBeenCalledWith(payload);
    });
  });
});
