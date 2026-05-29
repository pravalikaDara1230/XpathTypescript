import{test,expect, Locator} from '@playwright/test';

test("verify xapth demo",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
//absolute Xpath
    const Absolutelogo:Locator=page.locator("//html/body/div[4]/div[1]/div[1]/div[1]/a/img");
    await expect(Absolutelogo).toBeVisible();

    //Relative xpath

    const relativelogo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativelogo).toBeVisible();

    //Contains xptah
    const product:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    const productcount=await product.count();
    console.log("Number of computer products: " + productcount);
   expect (productcount).toBeGreaterThan(0);
   console.log("computaer are available in the website:" , await product.first().textContent());
    console.log("computaer are available in the website:" , await product.last().textContent());
     console.log("computaer are available in the website:" ,await product.nth(3).textContent());

    let productTitles:String[]= await product.allTextContents();

    for(let pt of productTitles)
    {
       // console.log("computer products are:"+pt);
       console.log(pt);
    }

    //Start-witth xpath ---Rerun all elements which start with given text
     const Buildingproducts: Locator =page.locator("//h2/a[starts-with(@href,'/build')]");

    const count: number = await Buildingproducts.count();

    console.log("Number of build products:", count);

    expect(count).toBeGreaterThan(0);

    //text() function

   const Reglink:Locator= page.locator("//a[text()='Register']");
    await expect(Reglink).toBeVisible();

    
})