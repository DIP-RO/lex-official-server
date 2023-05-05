import VisitorBookModel from "../../models/frontOffice/VisitorBook.js";

const createVisitorBook = async (req, res) => {
  try {
    const result = new VisitorBookModel({
      school: req.body.school,
      purpose: req.body.purpose,
      meetingWith: req.body.meetingWith,
      visitorName: req.body.visitorName,
      phone: req.body.phone,
      idCard: req.body.idCard,
      numberOfPerson: req.body.numberOfPerson,
      date: req.body.date,
      inTime: req.body.inTime,
      outTime: req.body.outTime,
      attachDocument: `http://localhost:5000/visitor-book/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteVisitorBook = async (req, res) => {
  try {
    if (!(await VisitorBookModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await VisitorBookModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateVisitorBook = async (req, res) => {
  try {
    const visitorBook = await VisitorBookModel.findByIdAndUpdate(
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

const getAllVisitorBooks = async (req, res) => {
  try {
    const admissionEnquiries = await VisitorBookModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};
const getVisitorBook = async (req, res) => {
  try {
    const phoneCallLog = await VisitorBookModel.findById(req.params.id);
    if (!phoneCallLog) {
      return res.status(404).send({ error: "Invalid Visitor Book" });
    }
    return res.send(phoneCallLog);
  } catch (error) {
    return res.status(400).send(error);
  }
};
export {
  createVisitorBook,
  deleteVisitorBook,
  UpdateVisitorBook,
  getAllVisitorBooks,
  getVisitorBook,
};
