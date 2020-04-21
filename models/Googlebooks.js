const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooksSchema = new Schema({
  title: { type: String, required: true },
  authors: [String],
  description: { type: String },
  smallThumbnail: { type: String },
  infoLilnk: { type: String }
});

const Googlebooks = mongoose.model("Googlebooks", googlebooksSchema);

module.exports = Googlebooks;
