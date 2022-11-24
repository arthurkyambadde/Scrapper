const puppeteer = require("puppeteer");

let browser;

const HEADLESS = false;

export async function main(url: string) {
  browser = await puppeteer.launch({ headleass: HEADLESS });
 
  const page = await browser.newPage();

  const search = "bord";

  await page.goto(url);
}
