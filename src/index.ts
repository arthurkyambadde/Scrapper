import { GenericHTMLFormElement } from "axios";
import { html } from "cheerio/lib/api/manipulation";
import { each } from "cheerio/lib/api/traversing";

const cheerio = require("cheerio");
const axios = require("axios");

const links_data: string[] = [];

const company: string = "ntv";
const url = `https://www.google.com/search?q=${company}`;

async function getGenre() {
  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);
    const links = $("a");

    links.each(function (index: number, element: any) {
      links_data.push($(element).attr("href"));
    });
  } catch (error) {
    console.log(error);
  }
  // console.log(links_data);

  const expression: RegExp =
    /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/;

  links_data.forEach((url) => {
    const match = expression.test(url);
    if (match) {
      console.log(match);
      let facebook: string = url.slice(7, 45);
      console.log(facebook);
    }
  });
}

getGenre();
