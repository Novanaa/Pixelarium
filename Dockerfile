FROM oven/bun:1 as base

WORKDIR /apps

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

CMD [ "bun", "run", "dev" ]