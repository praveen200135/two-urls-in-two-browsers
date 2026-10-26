

import {chromium, firefox, test} from "@playwright/test";

test("browserlaunch of egde",async()=>{

  const browserlaunch = await chromium.launch({channel: "msedge"});

  const context= await browserlaunch.newContext();

   const page = await context.newPage();

  await page.goto("https://www.redbus.in/");
   
  console.log(await page.title());

  console.log(page.url());

  await browserlaunch.close();
  
})

test("broswerlaunch of firefox", async () => {

  const browserlaunch = await firefox.launch();

  const context = await browserlaunch.newContext();
   
 const page = await context.newPage();
  
  await page.goto("https://www.flipkart.com");

   console.log(await page.title());
  console.log(page.url());

  await browserlaunch.close();

  
})
