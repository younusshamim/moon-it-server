import env from "../configs/environment";
import { buildDevLogger } from "./devLogger";
import { buildProdLogger } from "./prodLogger";

let logger: any = null;
if (env.NODE_ENV === "development") {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}

export default logger;
