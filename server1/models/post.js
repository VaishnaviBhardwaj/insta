const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  boby: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    default: "no photo",
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

mongoose.model("Post", postSchema);
