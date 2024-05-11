import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

interface RuntimeEnv {
  MONGODB_URI: string;
}

// use zod to validate the environment variables and create a type-safe env object
// createEnv will throw an error if any of the environment variables are missing
export const env = createEnv({
  server: {
    MONGODB_URI: z.string().min(1),
  },
  experimental__runtimeEnv: {
    MONGODB_URI: process.env.MONGODB_URI,
  } as RuntimeEnv,
});
