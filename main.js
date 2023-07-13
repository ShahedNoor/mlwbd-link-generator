const { Builder, By, Key, until } = require('selenium-webdriver');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  const url = await new Promise((resolve) => {
    rl.question('Enter the URL to navigate to: ', (answer) => {
      resolve(answer);
    });
  });

  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to the web page
    await driver.get(url);

    // Wait for the page to load
    await driver.sleep(2000);

    // Click the first button
    await driver.executeScript('document.querySelector(\'a[data-wpel-link="internal"]\').click();');
    await driver.sleep(4000);

    // Switch to the new window
    const windows = await driver.getAllWindowHandles();
    const currentWindowHandle = await driver.getWindowHandle();
    windows.forEach(async (handle) => {
      if (handle !== currentWindowHandle) {
        await driver.switchTo().window(handle);
      }
    });

    // Click the second button
    await driver.executeScript('document.querySelector(\'button.myButton\').click();');
    await driver.sleep(7500);

    // Click the third button
    await driver.executeScript('document.querySelector(\'input[type="submit"][value="Download"]\').click();');
    await driver.sleep(2000);

    // Click the fourth button
    await driver.executeScript('document.querySelector(\'a[href="#downay"]\').click();');
    await driver.sleep(12000);

    // Click the fifth button
    await driver.executeScript('document.querySelector(\'a[href="#downay2"]\').click();');
    await driver.sleep(2000);

    // Click the sixth button
    await driver.executeScript('document.querySelector(\'input[type="submit"]\').click();');
    await driver.sleep(2000);

    // Click the seventh button
    await driver.executeScript('document.querySelector(\'a[href="#lastlink"]\').click();');
    await driver.sleep(14500);

    // Click the eighth button
    await driver.executeScript('document.getElementById("download").click();');
    await driver.sleep(2000);

    // Click the ninth button
    await driver.executeScript('document.querySelector(\'.butt.btn\').click();');
    await driver.sleep(2000);

    // Get the current URL and log it to the console
    const currentUrl = await driver.getCurrentUrl();
    console.log('Link generate successfullty!\nLast URL: ', currentUrl);

  } finally {
    // Close the web driver
    rl.close();
  }
}

run();