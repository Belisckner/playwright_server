FROM mcr.microsoft.com/playwright:v1.42.1-jammy
ADD ./ /work

EXPOSE 12000/tcp

RUN --network=host

RUN npm i

RUN npx ts-node serverLaunch.ts