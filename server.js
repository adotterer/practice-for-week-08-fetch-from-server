const http = require('http');
const fs = require("fs");
const{ htmlRouter, dogs} = require("./starterRouter")

function getContentType(fileName) {
  const ext = fileName.split(".")[1];
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "css":
      return "text/css";
    case "js":
      return "text/javascript";
    default:
      return "text/plain";
  }
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === "GET" && req.url.startsWith('/assets')) {
    const assetPath = req.url.split("/assets")[1];
    try {
      const resBody = fs.readFileSync("./assets" + assetPath);
      res.statusCode = 200;
      res.setHeader("Content-Type", getContentType(assetPath));
      res.write(resBody);
      return res.end();
    } catch {
      console.error("Cannot find asset", assetPath, "in assets folder");
    }
  }

  if (req.method=== "DELETE" && req.url.startsWith("/dogs/")) {
    const urlParts = req.url.split("/dogs/");
    console.log(req.headers, "headers")
    console.log(urlParts);
    return res.end();
  }

  if (req.method === "GET" && req.url === "/api/dogs/count") {
    res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify({dogCount: dogs.length}))
    return res.end()
  }
  return htmlRouter(req, res)
});

const port = 5001;

server.listen(port, () => console.log('Server is listening on port', port));