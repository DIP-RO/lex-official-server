import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "default_image_url.jpg",
  },
  userEmail: String, // Store the user's email who saved the bookmark
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;
