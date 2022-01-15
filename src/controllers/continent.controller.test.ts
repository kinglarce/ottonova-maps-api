import ContinentController from "./continent.controller";
import * as ContinentRepository from "../repositories/continent.repository";

describe("ContinentController", () => {
  describe("getContinents", () => {
    it("should return empty array", async () => {
      const spy = jest
        .spyOn(ContinentRepository, "getContinents")
        .mockResolvedValueOnce([]);
      const controller = new ContinentController();
      const continents = await controller.getContinents();
      expect(continents).toEqual([]);
      expect(spy).toHaveBeenCalledWith();
    });
    it("should return continent list", async () => {
      const continentData = ["Australia", "North America"];
      const spy = jest
        .spyOn(ContinentRepository, "getContinents")
        .mockResolvedValueOnce(continentData);
      const controller = new ContinentController();
      const continents = await controller.getContinents();
      expect(continents).toEqual(continentData);
      expect(spy).toHaveBeenCalledWith();
    });
  });
});
