interface MapsResponse {
  message: string;
}

export default class MapsController {
  public async getResponse(): Promise<MapsResponse> {
    return {
      message: "Test",
    };
  }
}
