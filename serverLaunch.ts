import {chromium} from "@playwright/test"

(async () => {
    const browserServer = await chromium.launchServer({
      port:12000,
      wsPath: '/lala'
    });
    const wsEndpoint = browserServer.wsEndpoint();
    console.log(wsEndpoint)
  })();