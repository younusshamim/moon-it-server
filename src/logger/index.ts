import envConfig from "../configs/env.config";
import { buildDevLogger } from "./devLogger";
import { buildProdLogger } from "./prodLogger";

let logger: any = null;
if (envConfig.NODE_ENV === "development") {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}

export default logger;
