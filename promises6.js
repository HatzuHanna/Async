const fs = require("fs");

fs.readFile("./data.txt", "utf-8", function (error, data) {
  if (error) console.log("Error al leer archivo");
  else console.log(data);
});
