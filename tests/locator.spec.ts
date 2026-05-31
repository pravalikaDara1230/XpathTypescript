/*
These are the recommended built-in locators.
locator i-identifies elemnets on the page
DOM-document object model
Dome is API interface provided by browser
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/
import{test,expect} from '@playwright/test';
import{Locator} from 'playwright';
test("verify playwright locators",async({page})=>{

    await page.goto("https://demo.nopcommerce.com/");

    const pagelogo:Locator = page.getByAltText("nopCommerce demo store");
    await expect(pagelogo).toBeVisible();
    //pagelogo.click();
    //pagelogo.click();
    console.log("page logo is visible");

    //getbytext()
    await expect(page.getByText("Welcome to our store")).toBeVisible();
//await expect(page.getByText("welcome to ")).toBeVisible(); //provide substring

//get by role
 await page.getByRole("link",{name:"Register"}).click();
console.log("register link is clicked successfully");


//get by label we can test in Forms nothing but ex:registartion forms
await page.getByLabel("First name:").fill("John");
await page.getByLabel("Last name:").fill("Doe");

//get by placeholder
await page.getByPlaceholder("search store").fill("Apple Macbook pro 13.3-inch laptop");
console.log("Search term is filled successfully");
})


