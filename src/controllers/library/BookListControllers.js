import BookListModel from "../../models/library/BookList.js";

const createBookList = async (req, res) => {
  try {
    const result = new BookListModel({
      school: req.body.school,
      name: req.body.name,
      bookNumber: req.body.bookNumber,
      isbnNumber: req.body.isbnNumber,
      publisher: req.body.publisher,
      author: req.body.author,
      subject: req.body.subject,
      rackNumber: req.body.rackNumber,
      qty: req.body.qty,
      bookPrice: req.body.bookPrice,
      description: req.body.description,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteBookList = async (req, res) => {
  try {
    if (!(await BookListModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await BookListModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateBookList = async (req, res) => {
  try {
    const visitorBook = await BookListModel.findByIdAndUpdate(
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

const getAllBookList = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await BookListModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await BookListModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await BookListModel.countDocuments(
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

export { createBookList, deleteBookList, UpdateBookList, getAllBookList };
