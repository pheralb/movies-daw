import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    year: String,
    released: String,
    genre: String,
    director: String,
    writer: String,
    actors: String,
    plot: String,
    language: String,
    country: String,
    awards: String,
    poster: String,
    rating: String,
    type: String,
    totalSeasons: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
