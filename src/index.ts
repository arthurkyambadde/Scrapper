import { getGoogleSearchLinks } from "./getGoogleSearchLinks";
import { extractFacebookUrl } from "./extractFacebookUrl";
import { getExactFacebookLink } from "./getExactFacebookLink";
import { main } from "./scrapeFacebookLinks";

const company: string = "stanbic";
const url = `https://www.google.com/search?q=${company}`;

const expression: RegExp =
  /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/;

async function getGenre() {
  const links = await getGoogleSearchLinks(url);
  const probableFacebook = extractFacebookUrl(links as string[], expression);
  const companyFacebookLink = getExactFacebookLink(
    probableFacebook,
    expression
  );

  main(companyFacebookLink[0]);
}

getGenre();
