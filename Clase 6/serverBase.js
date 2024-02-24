const http = require("http");
const url = require("url")

const PORT = 3000

const servidor = http.createServer((req, res) => {   // Req = Request / Res = Response

    let urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if(req.url === "/contacto"){
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        res.end("Contacto, perrito");
        return
  
    }

    if(req.url === "/"){
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        res.end("Server basico con HTTP, perrito");
        return
  
    }
  });
  
  servidor.listen(PORT, () => {
    // Servidor que escuchara las peticiones que se le hagan
    console.log("Server online en puerto: ", PORT);
  });