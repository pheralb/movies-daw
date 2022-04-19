import axios from "axios";

//Ejemplos llamadas a ombapi
//"https://www.omdbapi.com?s=Naruto&page=2&apikey=98cd48bc"
// `https://www.omdbapi.com/?i=${movieId}&apikey=98cd48bc`;

const apiURL = "https://www.omdbapi.com";
const apikey = "98cd48bc";

/**
 * Obtiene una lista de series y peliculas segun nombre y página
 * @param {"name": "naruto","page":  "2"} req 
 * @param {*} res 
 */
export const getLista = (req, res) => {
  var url = `${apiURL}?s=${req.body.name}&page=${req.body.page}&apikey=${apikey}`;
  axios.get(url)
            .then((resAPI) => {
              if (resAPI.data.Response === "False") {
                throw new Error(res.data.Error);
              }
              res.status(200).json(resAPI.data)
            })
            .catch((err) => {
              console.log(err)
              res.status(404).json();
            })
}

/**
 * Obtiene los datos de una serie o película según el id
 * @param {"id": "tt2975590"} req 
 * @param {*} res 
 */
export const getById = (req, res) => {
  var url = `${apiURL}?i=${req.body.id}&apikey=${apikey}`;
  axios.get(url)
            .then((resAPI) => {
              if (resAPI.data.Response === "False") {
                throw new Error(res.data.Error);
              }
              res.status(200).json(resAPI.data)
            })
            .catch((err) => {
              console.log(err)
              res.status(404).json();
            })
}