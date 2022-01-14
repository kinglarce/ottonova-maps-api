import * as Cities from "./cities";
import { CITIES } from "../__mocks__/cities.mock";

describe("Model - cities", () => {
  describe("find", () => {
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
    it("should give me complete result with no parameter", async () => {
      const response = await Cities.find();
      expect(response).toEqual(CITIES);
    });
    it("should give me complete result with empty object", async () => {
      const response = await Cities.find({});
      expect(response).toEqual(CITIES);
    });
    it("should not be empty", async () => {
      const response = await Cities.find();
      expect(response).not.toEqual([]);
    });
    it("should give me result if property name value match to input", async () => {
      const response = await Cities.find({ name: "New York City" });
      expect(response).toEqual([CITIES[1]]);
    });
    it("should give me empty result if property value doesnt match", async () => {
      const response = await Cities.find({ name: "Bangalore" });
      expect(response).toEqual([]);
    });
  });
  describe("findByMatchingProperties", () => {
    it("should give me result if property name value match to input", async () => {
      const response = await Cities.findByMatchingProperties(CITIES, {
        name: "New York City",
      });
      expect(response).toEqual([CITIES[1]]);
    });
    it("should give me empty result if property value doesnt match", async () => {
      const response = await Cities.findByMatchingProperties(CITIES, {
        name: "Bangalore",
      });
      expect(response).toEqual([]);
    });
    it("should give complete result with empty object", async () => {
      const response = await Cities.findByMatchingProperties(CITIES, {});
      expect(response).toEqual(CITIES);
    });
    it("should give me empty result if source data doesnt exist", async () => {
      const response = await Cities.findByMatchingProperties([], {
        name: "New York City",
      });
      expect(response).toEqual([]);
    });
  });
});
