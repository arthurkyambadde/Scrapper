export function getExactFacebookLink(data: string[], expression: RegExp) {
  const facebookLink: string[] = [];

  data.forEach((url) => {
    if (expression.test(url)) {
      facebookLink.push(url);
    }
  });
  return facebookLink;
}
