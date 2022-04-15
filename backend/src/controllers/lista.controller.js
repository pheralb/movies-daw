import axios from "axios";

const apiURL = `https://www.omdbapi.com/?s=Naruto&page=2&apikey=98cd48bc`;

export const getLista = (req, res) => {
    axios.get(apiURL)
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

export const getByName = (req, res) => {
    console.log(req.body)
    res.json(req.body.name)
}