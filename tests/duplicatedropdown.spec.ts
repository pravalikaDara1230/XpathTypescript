import { test, expect, Locator } from "@playwright/test";

test("Verify sorsteddropdown  field", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    // select the single dropdown

    //const dropdownoptions: Locator = page.locator('#colors>option');
    const dropdownoptions: Locator = page.locator('#animals>option');

   const option:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim())
 const myset=new Set<string>();
 const duplicate:string[]=[];

 for(const text of option)
 {
    if(myset.has(text))
    {
        duplicate.push(text);
    }
    else{
        myset.add(text);
    }
 }
       
 console.log("duplicated value:",duplicate);
 if(duplicate.length>0)
 {
    console.log("duplicate values found:",duplicate)
 }
 else
 {
    console.log("not duplicates")
 }
 expect(duplicate.length).toBe(0);
});