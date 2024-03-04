import { NODE_ENV } from "../configs/env";

/* This line of code is setting the value of the `maxWindowMs` variable based on the value of the
`NODE_ENV` variable. */
const maxWindowMs: number = NODE_ENV == "production" ? 5 : (999999 as const);

export default maxWindowMs;
