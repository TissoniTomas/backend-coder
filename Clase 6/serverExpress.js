const http = require("http");

const PORT = 3001;

const servidor = http.createServer((req, res) => {   // Req = Request / Res = Response

  if(req.url === "/contacto"){
      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      res.end("Server basico con HTTP, perrito");
      return

  }
});

servidor.listen(PORT, () => {
  // Servidor que escuchara las peticiones que se le hagan
  console.log("Server online en puerto: ", PORT);
});
