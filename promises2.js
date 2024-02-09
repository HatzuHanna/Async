const promise = new Promise(function (resolve, reject) {
  // Codigo asincrono
  const resultado = "tomate";
  setTimeout(() => {
    if (resultado === "tomate") {
      resolve(resultado);
    } else {
      reject(resultado);
    }
  }, 1000);
});

// console.log(promise);

promise
  .then(
    // sucessHandler
    (ingrediente) => {
      console.log(`Cortar ${ingrediente}`);
      return "lechuga";
    }
  )
  .then(
    // sucessHandler
    (ingrediente) => {
      console.log(`Cortar ${ingrediente}`);
      return "zanahoria";
    }
  )
  .then(
    // sucessHandler
    (ingrediente) => console.log(`Cortar ${ingrediente}`)
  )
  .catch(
    // errorHandler
    (motivo) => console.log(motivo, "Cerrar restaurante")
  )

  .finally(() => console.log("Servir..."));
