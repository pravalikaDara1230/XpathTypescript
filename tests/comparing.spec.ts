import{test,expect,Locator} from '@playwright/test'
test("verify the tables",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
 const options:Locator = page.locator(".product-item")
 await expect(options).toHaveCount(6)
 //innertext vs textcontent
 //console.log("number of options:",await options.nth(1).innerText());
 console.log("number of options:",await options.nth(1).textContent());
 await page.waitForTimeout(3000);
 const count = await options.count();
 for (let i = 0; i < count; i++) {
   const productName = await options.nth(i).innerText();
   //const productName:null|String = await options.nth(i).textcontent();
   console.log(productName?.trim());
 }
 //inner text elimatinates whitespaces and gaps and line by line
 //textcontect extract the test element including gaps etc

 //allInnerTexts vs allTextContents
 console.log("allInnerTexts vs allTextContents")
 const productnames: string[] = await options.allInnerTexts();
  //const productnames: string[] = await options.allTextContents();
 console.log(productnames);
 const allproduct: string[] = productnames.map(text => text.trim());
 console.log(allproduct);
 //all()
 const alloptions: Locator[] = await options.all();
 console.log("printing all the options:", alloptions)
 //console.log(alloptions[1].innerText())

 for (const option of alloptions) {
   console.log(await option.innerText());
 }
});