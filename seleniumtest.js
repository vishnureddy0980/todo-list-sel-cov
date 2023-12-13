// seleniumTest.js
const { Builder, By, Key, until } = require('selenium-webdriver');

const runSeleniumTest = async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000');
    await driver.sleep(5000);

   
    await driver.findElement(By.css('input')).sendKeys('Selenium Task', Key.RETURN);

    const buttonElement = await driver.findElement(By.css('button'));
    await buttonElement.click();
    await driver.sleep(5000);
    const deleteelem = await driver.findElement(By.id('del'));
   await deleteelem.click();
   await driver.sleep(5000);
    
    await driver.wait(until.elementLocated(By.xpath(`//li[text()='Selenium Task']`)), 5000);

  } finally {
    await driver.quit();
  }
};

runSeleniumTest();
