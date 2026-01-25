const {test, expect}=require('@playwright/test')

test('handle radio button',async ({page})=>{

   // await page.goto('https://itera-qa.azurewebsites.net/home/automation');
   await page.goto("https://testautomationpractice.blogspot.com/");

    //Radio button
    await page.locator("//input[@value='male']").check(); //male
    //await page.check("//input[@value='option2']");
    await expect(await page.locator("//input[@value='male']")).toBeChecked();
    await expect(await page.locator("//input[@value='male']").isChecked()).toBeTruthy();//male
    
   await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy(); //female



    await page.waitForTimeout(5000); //pausing code

})