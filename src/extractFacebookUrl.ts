export function extractFacebookUrl(data: string[], expression: RegExp) {
  const facebookLinks: string[] = [];

  data.forEach((url) => {
    const match = expression.test(url);

    if (match) {
      const companySiteName: string[] = url.split("/");

      const facebook: string = url.slice(7, 32);

      const facebookPage: string = facebook + companySiteName[4] + "/";
      facebookLinks.push(facebookPage);
    }
  });
  return facebookLinks;
}
