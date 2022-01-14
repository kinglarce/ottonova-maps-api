import { getContinents } from "../repositories/continent.repository";

export default class ContinentController {
  public async getContinents(): Promise<string[]> {
    return getContinents();
  }
}
