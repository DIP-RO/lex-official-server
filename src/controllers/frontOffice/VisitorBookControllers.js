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
    if (req.params.id) {
      const data = await VisitorBookModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await VisitorBookModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await VisitorBookModel.countDocuments(
      query ? { school: query } : {}
    );

    return res.status(200).send({
      data: data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export {
  createVisitorBook,
  deleteVisitorBook,
  UpdateVisitorBook,
  getAllVisitorBooks,
};
