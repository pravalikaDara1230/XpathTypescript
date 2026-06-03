import { test, expect ,Locator} from '@playwright/test';

test("verify xpath axes", async ({ page }) => {

    //self 
 await page.goto("https://www.w3schools.com/html/html_tables.asp");
    const germanycell:Locator=page.locator("//td[text()='Germany']/self::td");
    await expect(germanycell).toHaveText("Germany");
    //parent-axis get parent <tr>of the gernamny cell
    const parentrow:Locator=page.locator("//td[text()='Germany']/parent::tr")
    await expect(parentrow).toContainText("Alfreds Futterkiste");

    //Child axis get all the child<td> of the second r<tr> in the table

    const childcells:Locator=page.locator("//table[@id='customers']//tr[2]/child::td");
    await expect(childcells).toHaveCount(3);
    await expect(childcells.first()).toHaveText("Alfreds Futterkiste");
    
    //Ancestor get acncetor <table> of the germany cell
    const ancestorTable:Locator=page.locator("//td[text()='Germany']/ancestor::table")
  await expect(ancestorTable).toHaveAttribute('id', 'customers');

  //decendant get all decendant <td> of the table
   const descendantcells:Locator=page.locator("//table[@id='customers']/descendant::td")
await expect(descendantcells).toHaveCount(18);


}); 