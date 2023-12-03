import mongoose from "mongoose";

// Define schemas
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  raitings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Create model

const movieModel = mongoose.model("Movie", movieSchema);

//create document

const createDoc = async () => {
  try {
    // create new document
    const m1 = new MovieModel({
      name: "Alexander",
      raitings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActice: true,
      comments: [{ value: "That was amazing movie" }],
    });
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { createDoc };
