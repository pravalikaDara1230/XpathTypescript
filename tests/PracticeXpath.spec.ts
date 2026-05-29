import{test,expect} from 'playwright/test';
import {Locator} from 'playwright';

test("practice Xpath",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //absolute Xpath
   const Absolutexpathlogo: Locator = page.locator("xpath=/html[1]/body[1]/div[3]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[6]/div[1]/aside[1]/div[1]/div[1]/div[1]/form[1]/div[1]/span[2]/span[1]/input[1]");
    await expect(Absolutexpathlogo).toBeVisible();

    //Relative Xpath
   const Relativexpath:Locator= page.locator("xpath=//input[@id='Wikipedia1_wikipedia-search-input']");
   await expect(Relativexpath).toBeVisible();

  //Contains text() function
    const username = page.locator("//input[contains(@id,'username')]");
    await username.fill("Dara");
    console.log("username field is filled successfully:", await username.inputValue());

//starts-with function
const startwith=page.locator("//input[starts-with(@id,'username')]");
await startwith.fill("Dara");

//click on button
const startbutton:Locator=page.locator("//button[normalize-space()='START']");
await startbutton.click();
console.log("start button is clicked successfully");

//Count the number of links
const links:Locator=page.locator("//h3/a[contains(@href,'#')]")
const linkcount=await links.count();

console.log("number of links are :"+linkcount);
let linkTexts:String[]= await links.allTextContents();

     for (const text of linkTexts)
    {
        console.log("Link text is: " + text);
    }


});
