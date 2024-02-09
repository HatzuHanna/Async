console.log("Promesas 101");

// PROMESA
let promesa = {
  status: "pending",
};

// RESUELTA
promesa = {
  status: "fullfilled",
  resolve: "tomato",
};

// RECHAZADA
promesa = {
  status: "rejected",
  resolve: "mercadoCerrado",
};

promesa.then(
  // successHandler
  (ingrediente) => {
    console.log(ingrediente);
  },
  // errorHandler
  (motivo) => {
    console.log(motivo);
  }
);
