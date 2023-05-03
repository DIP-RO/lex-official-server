import IssueReturnModel from "../../models/library/IssueReturn.js";

const createIssueReturn = async (req, res) => {
  try {
    const result = new IssueReturnModel({
      school: req.body.school,
      book: req.body.book,
      issueTo: req.body.issueTo,
      returnDate: req.body.returnDate,
      isReturn: req.body.isReturn,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteIssueReturn = async (req, res) => {
  try {
    if (!(await IssueReturnModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await IssueReturnModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateIssueReturn = async (req, res) => {
  try {
    const visitorBook = await IssueReturnModel.findByIdAndUpdate(
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

const getAllIssueReturn = async (req, res) => {
  try {
    const IssueReturn = await IssueReturnModel.find();
    return res.send(IssueReturn);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createIssueReturn,
  deleteIssueReturn,
  UpdateIssueReturn,
  getAllIssueReturn,
};
