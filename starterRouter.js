const fs = require("fs");

function htmlRouter(req, res) {
    let reqBody = "";
    req.on("data", (data) => {
      reqBody += data;
    });
  
    // When the request is finished processing the entire body
    req.on("end", () => {
      // Parsing the body of the request
      if (reqBody) {
        req.body = reqBody
          .split("&")
          .map((keyValuePair) => keyValuePair.split("="))
          .map(([key, value]) => [key, value.replace(/\+/g, " ")])
          .map(([key, value]) => [key, decodeURIComponent(value)])
          .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {});
        console.log(req.body);
      }
  
      // route handlers
      // GET /
      if (req.method === 'GET' && req.url === '/') {
        const htmlPage = fs.readFileSync("./views/index.html", 'utf-8');
        const resBody = htmlPage;
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(resBody);
        return res.end();
      }
  
      // Phase 1: GET /dogs
      if (req.method === 'GET' && req.url === '/dogs') {
        //!!START
        const htmlPage = fs.readFileSync("./views/dogs.html", 'utf-8');
        // use `dogs` array created at the top of the file
        const dogsList = dogs.map(dog => {
          return `<li>${dog.name}</li>`
        });
        const resBody = htmlPage
          .replace(/#{dogsList}/g, dogsList.join(''));
  
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(resBody);
        return res.end();
        //!!END
      }
  
      // Phase 2: GET /dogs/new
      if (req.method === 'GET' && req.url === '/dogs/new') {
        //!!START
        const htmlPage = fs.readFileSync("./views/create-dog.html", 'utf-8');
        const resBody = htmlPage;
  
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(resBody);
        return res.end();
        //!!END
      }
      
      // Phase 3: GET /dogs/:dogId
      if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
        const urlParts = req.url.split('/');
        if (urlParts.length === 3) {
          const dogId = urlParts[2];
          const dog = dogs.find(dog => dog.dogId == dogId);
          //!!START
          // Phase 7: Dog Not Found Error Page
          if (!dog) {
            const htmlPage = fs.readFileSync("./views/error.html", 'utf-8');
            const resBody = htmlPage
              .replace(/#{message}/g, 'Dog Not Found');
            
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.write(resBody);
            return res.end();
          }
  
          const htmlPage = fs.readFileSync("./views/dog-details.html", 'utf-8');
          const resBody = htmlPage
            .replace(/#{name}/g, dog.name)
            .replace(/#{age}/g, dog.age);
          
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.write(resBody);
          return res.end();
          //!!END
        }
      }
  
      // Phase 4: POST /dogs
      if (req.method === 'POST' && req.url === '/dogs') {
        //!!START
        const { name, age } = req.body;
  
        const dog = {
          dogId: getNewDogId(),
          name,
          age
        };
        dogs.push(dog);
  
        res.statusCode = 302;
        res.setHeader('Location', '/dogs/' + dog.dogId);
        return res.end();
        //!!END
      }
  
      // Phase 5: GET /dogs/:dogId/edit
      if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
        const urlParts = req.url.split('/');
        if (urlParts.length === 4 && urlParts[3] === 'edit') {
          const dogId = urlParts[2];
          const dog = dogs.find(dog => dog.dogId == dogId);
          //!!START
          // Phase 7: Dog Not Found Error Page
          if (!dog) {
            const htmlPage = fs.readFileSync("./views/error.html", 'utf-8');
            const resBody = htmlPage
              .replace(/#{message}/g, 'Dog Not Found');
            
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.write(resBody);
            return res.end();
          }
  
          const htmlPage = fs.readFileSync("./views/edit-dog.html", 'utf-8');
          const resBody = htmlPage
            .replace(/#{dogId}/g, dog.dogId)
            .replace(/#{name}/g, dog.name)
            .replace(/#{age}/g, dog.age);
  
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.write(resBody);
          return res.end();
          //!!END
        }
      }
  
      // Phase 6: POST /dogs/:dogId
      if (req.method === 'POST' && req.url.startsWith('/dogs/')) {
        const urlParts = req.url.split('/');
        if (urlParts.length === 3) {
          const dogId = urlParts[2];
          const dog = dogs.find(dog => dog.dogId == dogId);
          //!!START
          // Phase 7: Dog Not Found Error Page
          if (!dog) {
            const htmlPage = fs.readFileSync("./views/error.html", 'utf-8');
            const resBody = htmlPage
              .replace(/#{message}/g, 'Dog Not Found');
            
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.write(resBody);
            return res.end();
          }
  
          const { name, age } = req.body;
          dog.name = name;
          dog.age = age;
  
          res.statusCode = 302;
          res.setHeader('Location', '/dogs/' + dogId);
          return res.end();
          //!!END
             // No matching endpoint
  
        }
      }  
      const htmlPage = fs.readFileSync("./views/error.html", 'utf-8');
      const resBody = htmlPage
      .replace(/#{message}/g, 'Page Not Found');
    
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write(resBody);
        return res.end();
  });
}

module.exports = htmlRouter;