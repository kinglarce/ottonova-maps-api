import * as Cities from "../models/cities";
import { getCities } from "./city.repository";
import { CITIES } from "../__mocks__/cities.mock";

describe("Repository - city", () => {
  beforeAll(async () => {
    const asyncFind = async (
      properties?: Cities.IProperties
    ): Promise<Cities.ICity[]> => {
      const defaultProperties = properties || {};
      return new Promise((res) => {
        res(Cities.findByMatchingProperties(CITIES, defaultProperties));
      });
    };
    const findMock = jest.spyOn(Cities, "find");
    findMock.mockImplementation(asyncFind);
  });
  describe("getCities", () => {
    it("should not be empty", async () => {
      const response = await getCities();
      expect(response).not.toEqual([]);
    });
    it("should give me complete result if input is not provided", async () => {
      const response = await getCities();
      expect(response).toEqual(CITIES);
    });
    it("should not be empty", async () => {
      const response = await getCities();
      expect(response).not.toEqual([]);
    });
    it("should give me result if continent input match", async () => {
      const response = await getCities("North America");
      expect(response).toEqual([CITIES[1]]);
    });
  });
});
