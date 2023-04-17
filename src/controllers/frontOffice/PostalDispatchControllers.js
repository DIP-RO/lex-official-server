import PostalDispatchModel from "../../models/frontOffice/PostalDispatch.js";
const createPostalDispatch = async (req, res) => {
  try {
    const result = new PostalDispatchModel({
      school: req.body.school,
      toTitle: req.body.toTitle,
      referenceNo: req.body.referenceNo,
      formTitle: req.body.formTitle,
      date: req.body.date,
      address: req.body.address,
      Note: req.body.Note,
      inTime: req.body.inTime,
      outTime: req.body.outTime,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePostalDispatch = async (req, res) => {
  try {
    if (!(await PostalDispatchModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PostalDispatchModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePostalDispatch = async (req, res) => {
  try {
    const PostalDispatch = await PostalDispatchModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!PostalDispatch) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(PostalDispatch);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllPostalDispatch = async (req, res) => {
  try {
    const admissionEnquiries = await PostalDispatchModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};
const getPostalDispatch = async (req, res) => {
  try {
    const phoneCallLog = await PostalDispatchModel.findById(req.params.id);
    if (!phoneCallLog) {
      return res.status(404).send({ error: "Invalid Visitor Book" });
    }
    return res.send(phoneCallLog);
  } catch (error) {
    return res.status(400).send(error);
  }
};
export {
  createPostalDispatch,
  deletePostalDispatch,
  UpdatePostalDispatch,
  getAllPostalDispatch,
  getPostalDispatch,
};
