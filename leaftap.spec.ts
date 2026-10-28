

import { test } from "@playwright/test";

test("css locators", async ({ page }) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

  //  await page.locator("#username").fill("democsr2");
    
    await page.locator('[class= "inputLogin"]').nth(0).fill("democsr2");

    await page.locator('[id="password"]').fill("crmsfa");

    await page.locator('.decorativeSubmit').click();

    await page.locator("//a[contains(text(),'CRM')]").click();

    await page.locator('//a[contains(text(),"Leads")]').click();


    await page.locator('//a[contains(text(),"Create Lead")]').click();

    await page.locator("#createLeadForm_companyName").fill("Testerleafs");

    await page.locator('#createLeadForm_firstName').fill("praveen");

    await page.locator('#createLeadForm_lastName').fill("sathyan");
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill('mr');

    await page.locator("[name='generalProfTitle']").fill("playwright practice");

    await page.locator("[name='annualRevenue']").fill("20000");  

    await page.locator("[name='departmentName']").fill("QA"); 
     
   

    await page.locator(" [id='createLeadForm_primaryPhoneNumber']").fill("78999343210");

    await page.locator('//input[@value="Create Lead"]').click();

    
})