const promise = new Promise(function (resolve, reject) {
  // Codigo asincrono
  const resultado = "tomate";
  setTimeout(() => {
    if (resultado === "tomate") {
      resolve(resultado);
    } else {
      reject(resultado);
    }
  }, 0);
});

// console.log(promise);

promise.then(
  // sucessHandler
  (ingrediente) => console.log(`Cortar ${ingrediente}`),
  // errorHandler
  (motivo) => console.log(motivo)
);

console.log("Servir...");
