import PostalReceiveModel from "../../models/fontOffice/PostalReceive.js";

const createPostalReceive = async (req, res) => {
  try {
    const result = new PostalReceiveModel({
      school: req.body.school,
      formTitle: req.body.formTitle,
      referenceNo: req.body.referenceNo,
      address: req.body.address,
      note: req.body.note,
      toTitle: req.body.toTitle,
      date: req.body.date,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePostalReceive = async (req, res) => {
  try {
    if (!(await PostalReceiveModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PostalReceiveModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePostalReceive = async (req, res) => {
  try {
    const PostalReceive = await PostalReceiveModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!PostalReceive) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(PostalReceive);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllPostalReceive = async (req, res) => {
  try {
    const admissionEnquiries = await PostalReceiveModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};
const getPostalReceive = async (req, res) => {
  try {
    const phoneCallLog = await PostalReceiveModel.findById(req.params.id);
    if (!phoneCallLog) {
      return res.status(404).send({ error: "Invalid Visitor Book" });
    }
    return res.send(phoneCallLog);
  } catch (error) {
    return res.status(400).send(error);
  }
};
export {
  createPostalReceive,
  deletePostalReceive,
  UpdatePostalReceive,
  getAllPostalReceive,
  getPostalReceive,
};
