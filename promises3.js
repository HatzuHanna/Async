const getPersonaje = function () {
  fetch("https://rickandmortyapi.com/api/character/1") //RETORNA PROMESA
    .then(
      // successHandler
      (respuesta) => respuesta.json()
    )
    .then(
      //realReturn
      (personaje) => console.log(personaje)
    )
    .catch(
      // errorHandler
      (error) => console.log(error)
    );
};

console.log(getPersonaje());
