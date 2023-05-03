import LibraryMemberModel from "../../models/library/LibraryMember.js";

const createLibraryMember = async (req, res) => {
  try {
    const result = new LibraryMemberModel({
      school: req.body.school,
      member: req.body.member,
      memberType: req.body.memberType,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteLibraryMember = async (req, res) => {
  try {
    if (!(await LibraryMemberModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await LibraryMemberModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateLibraryMember = async (req, res) => {
  try {
    const visitorBook = await LibraryMemberModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!visitorBook) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(visitorBook);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllLibraryMember = async (req, res) => {
  try {
    const LibraryMember = await LibraryMemberModel.find();
    return res.send(LibraryMember);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createLibraryMember,
  deleteLibraryMember,
  UpdateLibraryMember,
  getAllLibraryMember,
};
