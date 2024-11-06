export default async function decorate(block) {
  const ul = document.createElement("div");
  
  let htmlData = await fetch("../../blocks/GrytBanner/GrytBanner.html")
    .then((response) => response.text())
    .then((html) => {
      let parsedData = new DOMParser().parseFromString(html, "text/html");
      return parsedData;
    });

  ul.innerHTML = htmlData.body.innerHTML;
  block.append(ul);
}
