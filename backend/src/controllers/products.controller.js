import axios from "axios";
import Product from "../models/Product";

// Environment variables config ->
require("dotenv").config();

/**
 * Obtiene la lista de series y películas
 * @param {*} req
 * @param {*} res
 */
export const getList = (req, res) => {
  console.log(`📨 [backend] [product] getList:`)
};

/**
 * Obtiene los datos de una serie o película según el id
 * @param {"id": "tt2975590"} req
 * @param {*} res
 */
export const getById = (req, res) => {
  console.log(`📨 [backend] [product] getById: `)
};
/**
 * Guarda los datos de una serie
 * @param {"id": "tt2975590"} req
 * @param {*} res
 */
export const save = async (req, res) => {
  console.log(`📨 [backend] [product] save: `)
  console.log(req.body)
  try{
    const {Title, Year, Released, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, imdbRating, Type, totalSeasons} = req.body
    const newProduct = new Product({title: Title, year: Year, released: Released, genre: Genre, director: Director, writer: Writer, actors: Actors, plot: Plot, languake: Language, country: Country, awards: Awards, poster: Poster, rating: imdbRating, type: Type, totalSeasons})
    const productSave = await newProduct.save()
    console.log("✅ [backend] [omdbapi] save:", productSave);
    res.status(201).json(productSave)
  }catch(err){
    console.log("❌ [backend] [omdbapi] save:", err);
    res.status(500).json(err)
  }
};
