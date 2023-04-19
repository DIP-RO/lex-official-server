import IssueItemModel from "../../models/Inventory/IssueItem.js";

const createIssueItem = async (req, res) => {
  try {
    const result = new IssueItemModel({
      school: req.body.school,
      userType: req.body.userType,
      issueTo: req.body.issueTo,
      issueBy: req.body.issueBy,
      issueDate: req.body.issueDate,
      returnDate: req.body.returnDate,
      note: req.body.note,
      itemCategory: req.body.itemCategory,
      item: req.body.item,
      Quantity: req.body.Quantity,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteIssueItem = async (req, res) => {
  try {
    if (!(await IssueItemModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await IssueItemModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

const getAllIssueItem = async (req, res) => {
  try {
    const admissionEnquiries = await IssueItemModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createIssueItem, deleteIssueItem, getAllIssueItem };
