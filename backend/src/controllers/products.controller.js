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
      console.log("❌ [backend] [products] getList:", products);
      res.status(404).json(products)
    }
    else{
      console.log("✅ [backend] [products] getList:", products);
      res.status(200).json(products)
    }
  }
  catch(err){
    console.log("❌ [backend] [products] getList:", err);
    res.status(500).json(err)
  }
};

/**
 * Obtiene los datos de una serie o película según el nombre
 * @param {*} req
 * @param {*} res
 */
export const getById = async (req, res) => {
  console.log(`📨 [backend] [product] getById: `, req.params.id)
  try{
    const product = await Product.findById(req.params.id)
    if(product){
      console.log("✅ [backend] [products] getById:", product);
      res.status(200).json(product)
    }
    else{
      console.log("❌ [backend] [products] getById:", product);
      res.status(404).json()
    }
  }
  catch(err){
    console.log("❌ [backend] [products] getBy:", err);
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
                        language: Language,
                        country: Country,
                        awards: Awards,
                        poster: Poster,
                        rating: imdbRating,
                        type: Type,
                        totalSeasons})
    if(await Product.findOne({"title": Title})){
      console.log("❌ [backend] [products] save:", `${Title} repetido`);
      res.status(400).json(`Encontrado producto de título: ${Title}`)
    }
    else{
      const productSave = await newProduct.save()
      console.log("✅ [backend] [products] save:", productSave);
      res.status(201).json(productSave)
    }
    
  }catch(err){
    console.log("❌ [backend] [products] save:", err);
    res.status(500).json(err)
  }
};

/**
 * Actualiza los datos de una serie o pelicula
 * @param {*} req
 * @param {*} res
 */
 export const update = async (req, res) => {
  console.log(`📨 [backend] [product] update: `, req.params.id, req.body)
  try{
    const updatedProduct = await Product.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true});
    if(updatedProduct){
      console.log("✅ [backend] [products] update:", updatedProduct);
      res.status(200).json(updatedProduct)
    }
    else{
      console.log("❌ [backend] [products] update:", null);
      res.status(404).json()
    }
  }
  catch(err){
    console.log("❌ [backend] [products] update:", err);
    res.status(500).json(err)
  }
};

/**
 * Borra los datos de una serie/pelicula segun su nombre
 * @param {*} req
 * @param {*} res
 */
export const del = async (req, res)=>{
  console.log(`📨 [backend] [product] delete: `, req.params.id)
  try{
    const deletedProduct = await Product.findOneAndDelete({"_id": req.params.id})
    if(deletedProduct){
      console.log("✅ [backend] [products] delete:", deletedProduct);
      res.status(200).json(deletedProduct)
    }
    else{
      console.log("❌ [backend] [products] delete:", null);
      res.status(404).json()
    }
  }
  catch(err){
    console.log("❌ [backend] [products] delete:", err);
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
    console.log("✅ [backend] [products] fillDb:")
    res.status(201).json()
  }
  catch(err){
    console.log("❌ [backend] [products] fillDb:", err);
    res.status(500).json(err)
  }
};

/**
 * Obtiene toda las lista de categorias
 * @param {*} req 
 * @param {*} res 
 */
export const getCategories = async (req, res) => {
  console.log(`📨 [backend] [product] getCategories: `)
  try{
    const products = await Product.find();
    if(products.length != 0){
      let categories = []; 
      products.forEach(product => {
        product.genre.split(", ").forEach(genre => {
          categories.indexOf(genre) === -1 ? categories.push(genre) : ""
        })
      })
      if(products.length != 0){
        console.log("✅ [backend] [products] getCategories:")
        res.status(200).json(categories)
      }
      else{
        console.log("❌ [backend] [products] getCategories:", categories);
        res.status(404).json(categories)
      }
    }
    else{
    console.log("❌ [backend] [products] getCategories:", products);
    res.status(404).json()
    }
  }
  catch(err){
    console.log("❌ [backend] [products] getCategories:", err);
    res.status(500).json(err)
  }
}

export const deleteAll = async (req, res) => {
  console.log(`📨 [backend] [product] deleteAll: `)
  try{
    await Product.deleteMany()
    console.log("✅ [backend] [products] deleteAll:");
    res.status(200).json()
  }
  catch(err){
    console.log("❌ [backend] [products] deleteAll:", err);
    res.status(500).json(err)
  }
}

/**
 * Devuelve lista de peliculas por categoria
 * @param {*} req 
 * @param {*} res 
 */
export const getListByCategorie = async (req, res) => {
  const name = req.params.name
  console.log(`📨 [backend] [product] getListByCategorie: ${name}`)
  try{
    const products = await Product.find({ "genre": { "$regex": name, "$options": "i" } });
    if(products.length != 0){
      console.log("✅ [backend] [products] getListByCategorie:", products);
      res.status(200).json(products)
    }
    else{
      console.log("❌ [backend] [products] getListByCategorie:", products);
      res.status(404).json()
    }
  }
  catch{
    console.log("❌ [backend] [products] getListByCategorie:", err);
    res.status(500).json(err)
  }
}