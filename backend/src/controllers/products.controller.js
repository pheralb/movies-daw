import axios from "axios";
import Product from "../models/Product";

// Environment variables config ->
require("dotenv").config();

/**
 * Obtiene la lista de series y películas
 * @param {*} req
 * @param {"title": "Prueba","year": "2002–2007",...} res
 */
export const getList = async (req, res) => {
  console.log(`📨 [backend] [product] getList:`)
  try{
    const products = await Product.find();
    if(products.length == 0){
      console.log("❌ [backend] [omdbapi] getList:", products);
      res.status(404).json(products)
    }
    else{
      console.log("✅ [backend] [omdbapi] getList:", products);
      res.status(200).json(products)
    }
  }
  catch(err){
    console.log("❌ [backend] [omdbapi] getList:", err);
    res.status(500).json(err)
  }
};

/**
 * Obtiene los datos de una serie o película según el nombre
 * @param {*} req
 * @param {*} res
 */
export const getByName = async (req, res) => {
  console.log(`📨 [backend] [product] getByName: `, req.params.name)
  try{
    const product = await Product.findOne({"title": req.params.name})
    if(product){
      console.log("✅ [backend] [omdbapi] getByName:", product);
      res.status(200).json(product)
    }
    else{
      console.log("❌ [backend] [omdbapi] getByName:", null);
      res.status(404).json()
    }
  }
  catch(err){
    console.log("❌ [backend] [omdbapi] getByName:", err);
    res.status(500).json(err)
  }
};
/**
 * Guarda los datos de una serie/pelicula
 * @param {"Title": "Prueba","Year": "2002–2007", req ...}
 * @param {*} res
 */
export const save = async (req, res) => {
  console.log(`📨 [backend] [product] save: `, req.body)
  try{
    const {Title, Year, Released, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, imdbRating, Type, totalSeasons} = req.body
    const newProduct = new Product(
                        {title: Title,
                        year: Year,
                        released: Released,
                        genre: Genre,
                        director: Director,
                        writer: Writer,
                        actors: Actors,
                        plot: Plot,
                        languake: Language,
                        country: Country,
                        awards: Awards,
                        poster: Poster,
                        rating: imdbRating,
                        type: Type,
                        totalSeasons})
    
    if(Product.findOne({"title": Title})){
      console.log("❌ [backend] [omdbapi] save:", `${Title} repetido`);
      res.status(400).json(`Encontrado producto de título: ${Title}`)
    }
    const productSave = await newProduct.save()
    console.log("✅ [backend] [omdbapi] save:", productSave);
    res.status(201).json(productSave)
  }catch(err){
    console.log("❌ [backend] [omdbapi] save:", err);
    res.status(500).json(err)
  }
};

/**
 * Actualiza los datos de una serie o pelicula
 * @param {*} req
 * @param {*} res
 */
 export const update = async (req, res) => {
  console.log(`📨 [backend] [product] update: `, req.params.name, req.body)
  try{
    const updatedProduct = await Product.findOneAndUpdate({"title": req.params.name}, req.body, {new: true});
    if(updatedProduct){
      console.log("✅ [backend] [omdbapi] update:", updatedProduct);
      res.status(200).json(updatedProduct)
    }
    else{
      console.log("❌ [backend] [omdbapi] update:", null);
      res.status(404).json()
    }
  }
  catch(err){
    console.log("❌ [backend] [omdbapi] update:", err);
    res.status(500).json(err)
  }
};

/**
 * Borra los datos de una serie/pelicula segun su nombre
 * @param {*} req
 * @param {*} res
 */
export const del = async (req, res)=>{
  console.log(`📨 [backend] [product] delete: `, req.params.name)
  try{
    const deletedProduct = await Product.findOneAndDelete({"title": req.params.name})
    if(deletedProduct){
      console.log("✅ [backend] [omdbapi] delete:", deletedProduct);
      res.status(200).json(deletedProduct)
    }
    else{
      console.log("❌ [backend] [omdbapi] delete:", null);
      res.status(404).json()
    }
  }
  catch(err){
    console.log("❌ [backend] [omdbapi] delete:", err);
    res.status(500).json(err)
  }
};

/**
 * Carga la base de datos con los datos del array
 * @param {*} req
 * @param {*} res
 */

export const fillDb = (req, res)=>{
  const series = [
    "bleach",
    "naruto",
    "hunter x hunter",
  ]
  console.log(`📨 [backend] [product] fillDb: `, series)
  try{
    series.forEach(serie => {
      const json = JSON.stringify({"id": serie});
      axios.post(`http://127.0.0.1:${process.env.PORT}/omdbapi/obtener`, json , {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resOmdbApi => {
        axios.post(`http://127.0.0.1:${process.env.PORT}/productos/guardar`, resOmdbApi.data , {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      });
    })
    console.log("✅ [backend] [omdbapi] fillDb:")
    res.status(201).json()
  }
  catch(err){
    console.log("❌ [backend] [omdbapi] fillDb:", err);
    res.status(500).json(err)
  }
};
