import axios from "axios";

// Environment variables config ->
require("dotenv").config();

const apiURL = "https://www.omdbapi.com";
const apikey = process.env.API_KEY_OMDAPI;

/**
 * Obtiene una lista de series y peliculas segun nombre y página
 * @param {"name": "naruto","page":  "2"} req
 * @param {*} res
 */
export const getList = (req, res) => {
  console.log(`📨 [backend] [omdbapi] getList: `);
  console.log(req.body);
  var url = `${apiURL}?s=${req.body.name}&page=${req.body.page}&apikey=${apikey}`;
  axios
    .get(url)
    .then((resAPI) => {
      if (resAPI.data.Response === "False") {
        throw new Error(res.data.Error);
      }
      console.log("✅ [backend] [omdbapi] getList:", resAPI.data);
      res.status(200).json(resAPI.data);
    })
    .catch((err) => {
      console.log("❌ [backend] [omdbapi] getList:", err);
      res.status(404).json();
    });
};

/**
 * Obtiene los datos de una serie o película según el id
 * @param {"id": "tt2975590"} req
 * @param {*} res
 */
export const getById = (req, res) => {
  console.log(`📨 [backend] [omdbapi] getById: `);
  console.log(req.body);
  var url = `${apiURL}?t=${req.body.id}&apikey=${apikey}`;
  axios
    .get(url)
    .then((resAPI) => {
      if (resAPI.data.Response === "False") {
        throw new Error(resAPI.data.Error);
      }
      console.log("✅ [backend] [omdbapi] getById:", resAPI.data);
      res.status(200).json(resAPI.data);
    })
    .catch((err) => {
      console.log("❌ [backend] [omdbapi] getById:", err);
      res.status(404).json();
    });
};
