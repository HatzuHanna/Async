// AXIOS

const axios = require("axios");

axios;
//   .get("//rickandmortyapi.com/api/character/1")
//   .then(({ data }) => data)
//   .then((rick) => console.log(rick))
//   .catch((error) => console.log(error));

//   ******************************************************

//   .get("//rickandmortyapi.com/api/character/1")
//   .then((response) => response.data)
//   .then((rick) => console.log(rick))
//   .catch((error) => console.log(error));

async function getMorty() {
  try {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character/1"
    );
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getMorty();
