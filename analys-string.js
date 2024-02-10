const path = "/users/download/index.html"

const isHtml = path => {
  const reguiredExt = ".html";
  const pathExt = path.slice(-5);

return pathExt == reguiredExt

}

console.log(isHtml(path));