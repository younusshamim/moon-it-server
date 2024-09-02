import dotenv from "dotenv-safe";

import envConfig from "../configs/env.config";
import { buildDevLogger } from "./devLogger";
import { buildProdLogger } from "./prodLogger";

dotenv.config();
// eslint-disable-next-line import/no-mutable-exports
let logger: any = null;
if (envConfig.NODE_ENV === "development") {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}

export default logger;
