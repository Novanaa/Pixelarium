import env from "@/configs/env";

/* This line of code is setting the value of the `maxWindowMs` variable based on the value of the
`NODE_ENV` variable. */
const maxWindowMs: number = env.nodeEnv == "production" ? 5 : (999999 as const);

export default maxWindowMs;
