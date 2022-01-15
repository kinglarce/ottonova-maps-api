import * as Cities from "../models/cities";
import { getContinents } from "./continent.repository";
import { CITIES } from "../__mocks__/cities.mock";

describe("Repository - continents", () => {
  beforeAll(async () => {
    const asyncFind = jest.fn().mockResolvedValue(CITIES);
    jest.spyOn(Cities, "find").mockImplementation(asyncFind);
  });
  describe("getContinents", () => {
    it("should not be empty", async () => {
      const response = await getContinents();
      expect(response).not.toEqual([]);
    });
    it("should give me a list of continents", async () => {
      const expected = ["Australia", "North America"];
      const response = await getContinents();
      expect(response).toEqual(expected);
    });
    it("should give me empty result when there no source data", async () => {
      jest.spyOn(Cities, "find").mockResolvedValue([]);
      const response = await getContinents();
      expect(response).toEqual([]);
    });
  });
});
