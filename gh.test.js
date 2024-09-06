const puppeteer = require("puppeteer");
let page;

beforeEach(async () => {
  page = await browser.newPage();
  
});

afterEach(() => {
  page.close();
});


describe("Github page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  
  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
   
    jest.setTimeout(10000); // время ожидания — 10 секунд!
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  },12000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    const expected = 'Get started with Team';
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain(expected)
    
  },20000);
});



test("The h1 header content2'", async () => {
  await page.goto("https://github.com/pricing");
  const firstLink = await page.$("header div div a");
  await firstLink.click();
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Pricing · Plans for every developer · GitHub');
},10000);

test("The first link attribute2", async () => {
  await page.goto("https://github.com/pricing");
  const actual = await page.$eval("a", link => link.getAttribute('href') );
  expect(actual).toEqual("#start-of-content");
},20000);

test("The page contains Sign in button2", async () => {
  await page.goto("https://github.com/pricing");
  const btnSelector = ".btn-mktg.btn-muted-mktg";
  const expected = 'Join for free';
  await page.waitForSelector(btnSelector, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector, link => link.textContent);
  expect(actual).toContain(expected);
  
},30000);
