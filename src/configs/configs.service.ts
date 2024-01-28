// import "dotenv/config";
import { AppConfigs } from "./appConfigs.enum";
import { configDotenv } from "dotenv";
import * as dotenv from "dotenv";
configDotenv();

export class ConfigsService {
  static configDovEnv() {
    dotenv.config();
  }
  static getValue(key: AppConfigs) {
    return process.env[key];
  }

  static getIntValue(key: AppConfigs): number {
    return parseInt(String(this.getValue(key)));
  }
}
