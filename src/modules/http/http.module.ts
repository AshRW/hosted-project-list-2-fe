import { AppConfigs } from "@/configs/appConfigs.enum";
import { ConfigsService } from "@/configs/configs.service";
import axios from "axios";

export class HTTP {
  constructor() {}
  async get(path: string) {
    try {
      console.log(">>>>>", path);
      console.log(">>>>>", ConfigsService.getValue(AppConfigs.BASE_URL));

      return axios.get(
        `${ConfigsService.getValue(AppConfigs.BASE_URL)}${path}`
      );
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }
}
