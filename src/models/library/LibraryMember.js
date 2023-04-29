import mongoose from "mongoose";

const LibraryMemberSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  member: {
    type: String,
    required: [true, "member required!"],
  },
  memberType: {
    type: String,
    required: [true, "member type required!"],
  },
  status: {
    type: String,
    required: [true, "status required!"],
  },
});

const LibraryMemberModel = mongoose.model("LibraryMember", LibraryMemberSchema);

export default LibraryMemberModel;
