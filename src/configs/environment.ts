import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().transform(Number),
  MONGODB_CONNECTION: z.string().url(),
});

const env = envSchema.parse(process.env);

export default env;
