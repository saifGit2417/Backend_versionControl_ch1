// chapter 2 starting
const http = require("http");
const fsModule = require("fs");

const userData = {
  name: "md saif ur rahman",
  age: 22,
  city: "nanded"
};

const htmlFile = fsModule.readFileSync("index.html", "utf-8");
const jsonFile = JSON.parse(fsModule.readFileSync("data.json", "utf-8"));

// to target particular data from array so that we can manipulate from existing html page
// const products = jsonFile.products[10];

// her all products will be here
const products = jsonFile.products;

// console.log(products.title);

const server = http.createServer((req, res) => {
  console.log(req.url,req.method);

  //   res.setHeader("Content-Type", "application/JSON"); ////to render json file
  //   res.end(JSON.stringify(userData));  ///to sne dstatic json data to server

  //   res.setHeader("Content-Type", "text/html"); ////to render html file
  //   res.end(htmlFile); ////static hosting of html file

  //   res.setHeader("Content-Type", "application/json"); //to render json file
  //   res.end(jsonFile); ///static hositng of whole json file

  ///sending different responses as per routes
  //   kind o dynamic output as per route

  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = products.find(p => p.id === +id);
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    const newNameOfProduct = htmlFile
      .replace("**title**", product.title)
      .replace("**discountPercentage**", product.discountPercentage)
      .replace("**thumbnail**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(newNameOfProduct);
    return;
  }



  //   sending static file depending upon routes

  //   switch (req.url) {
  //     case "/html":
  //       res.setHeader("Content-Type", "text/html");
  //       res.end(htmlFile);
  //       break;
  //     case "/json":
  //       res.setHeader("Content-Type", "application/JSON");
  //       res.end(JSON.stringify(userData));
  //       break;
  //     case "/product":
  //       // we can use the chaning method to change more than one parameter from existing html page
  //       res.setHeader("Content-Type", "text/html");
  //       const newNameOfProduct = htmlFile
  //         .replace("**title**", products.title)
  //         .replace("**discountPercentage**", products.discountPercentage)
  //         .replace("**thumbnail**", products.thumbnail)
  //         .replace("**price**", products.price)
  //         .replace("**rating**", products.rating)
  //         .replace("****", products);
  //       res.end(newNameOfProduct);
  //       break;

  //     default:
  //       res.writeHead(404, "file");
  //       res.end("page not found");
  //   }


});

server.listen(8090);
