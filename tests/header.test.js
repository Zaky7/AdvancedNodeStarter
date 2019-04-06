const puppeteer = require('puppeteer');

let browser, page;


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

// Function run before every Test
beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    // Go the URL
    await page.goto('localhost:3000');
});

// Function run after every Test
afterEach(async () => {
    await browser.close(); 
});

test('We launch a browser', async () => {
    // await delay(4000);
    const text = await page.$eval('a.brand-logo', el => el.innerHTML);
    expect(text).toEqual('Blogster');
});